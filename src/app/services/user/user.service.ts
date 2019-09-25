import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/classes/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getUser(id: string): Observable<User> {
    const docRef = this.db.doc<User>(`users/${ id }`);
    return docRef.snapshotChanges()
      .pipe(
        map(changes => {
          const data = changes.payload.data();
          const returnedId = changes.payload.id;
          return { returnedId, ...data };
        })
      );
  }
}
