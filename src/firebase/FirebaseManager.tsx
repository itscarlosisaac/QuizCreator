import firebase from "firebase";
import FirebaseUserManager from "./FirebaseUserManager";
import FirebaseFormManager from "./FirebaseFormManager";
import { FIREBASECONFIG } from './FirebaseSetting';

class FirebaseManager {

  readonly auth = firebase.auth;
  readonly fb = firebase;
  readonly userManager;
  readonly formManager;

  constructor() {
    firebase.initializeApp(FIREBASECONFIG);
    this.userManager = new FirebaseUserManager();
    this.formManager = new FirebaseFormManager();
  }
}

export const firebaseManager = new FirebaseManager();

