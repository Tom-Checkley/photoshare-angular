import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  // getUser(id: string): Observable<User> {
  //   const docRef = this.db.firestore.collection(`users/`).get(id);
  //   return docRef.valueChanges()
  // }
}
