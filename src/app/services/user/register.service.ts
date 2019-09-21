import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  registerUser(userObj: User) {
    return this.afAuth.auth
              .createUserWithEmailAndPassword(userObj.email, userObj.password)
              .then(userDb => {
                this.setUserDoc(userDb, userObj);
              })
              .catch(err => console.error(err.message, err));
  }

  private setUserDoc(user, data: User) {
    const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${ user.user.uid }`);
    data.id = user.user.uid;
    return userRef.set(data);
  }
}
