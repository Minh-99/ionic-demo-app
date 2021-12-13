import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}
  get isLoggedIn(): boolean {
    const getUser = localStorage.getItem('user');
    return getUser ? true : false;
  }

  loginFireauth(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .catch((res) => {})
        .then(
          (res) => {
            localStorage.setItem('user', JSON.stringify(res));
            resolve(res);
          },
          (error) => reject(error)
        );
    });
  }

  userRegistration(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => resolve(res),
          (error) => reject(error)
        );
    });
  }
}
