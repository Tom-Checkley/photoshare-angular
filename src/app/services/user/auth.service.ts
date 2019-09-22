import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
            // logged in, get custom user from Firestore
            return this.db.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // logged out, null
            return of(null);
          }
      })
    );
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .catch(error => console.error(error));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  userLoggedIn() {
    return this.afAuth.authState;
  }


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
