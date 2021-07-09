import firebase from "firebase";
import FirebaseUserManager from "./FirebaseUserManager";
import FirebaseFormManager from "./FirebaseFormManager";
import FirebaseAnswerManager from "./FirebaseAnswerManager";
import { FIREBASECONFIG } from './FirebaseSetting';

class FirebaseManager {

  readonly auth = firebase.auth;
  readonly fb = firebase;
  readonly userManager;
  readonly formManager;
  readonly answerManager;

  constructor() {
    firebase.initializeApp(FIREBASECONFIG);
    this.userManager = new FirebaseUserManager();
    this.formManager = new FirebaseFormManager();
    this.answerManager = new FirebaseAnswerManager();
  }
}

export const firebaseManager = new FirebaseManager();

