import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap, map } from 'rxjs/operators';
import { Post } from 'src/app/classes/post';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Observable<any>;
  itemsCollection: AngularFirestoreCollection<Post>;
  task: AngularFireUploadTask;
  percentageUpload: Observable<number>;
  snapshot: any;
  downloadUrl: Observable<any>;
  post: Post;
  error: any;
  itemDoc: any;
  item: any;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  newPost(post: Post, file?: File) {
    this.post = post;
    const path = `images/photos/${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'angular-photo-share' };
    const fileRef = this.storage.ref(path);
    this.post.path = path;

    this.task = this.storage.upload(path, file, { customMetadata });

    this.percentageUpload = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.pipe(
      finalize(() => {
        this.downloadUrl = fileRef.getDownloadURL();
        this.downloadUrl.subscribe(url => {

          this.post.imageUrl = url;
          this.itemsCollection = this.db.collection<Post>('posts');
          this.posts = this.itemsCollection.snapshotChanges();

          return this.itemsCollection.add(this.post);
        });
      })
    ).subscribe();
  }

  getPosts(): Observable<any> {
    return this.db.collection('/posts').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const obj = { id, ...data };

        return obj;
      }))
    );
  }

  deletePost(post: Post): Observable<any> {
    // Remove photo from Firebase Storage
    this.storage.storage.refFromURL(post.imageUrl).delete();
    // Remove post from Firestore
    this.itemDoc = this.db.doc<Post>(`posts/${post.id}`);
    this.item = this.itemDoc.snapshotChanges();

    return this.itemDoc.delete();
  }

}
