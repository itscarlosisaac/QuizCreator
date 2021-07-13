import firebase from 'firebase';

class FirebaseUserManager {
  readonly FirebaseDB = firebase.firestore();

  async StartRegisterUser(email: string, password: string, username: string) {
    const User = await this.FirebaseDB.collection("users").add({ email, password, username });
    const UserData = await (await User.get()).data()
    const Registered = await this.RegisterUser(UserData!.email, UserData!.password)
    return Registered;
  }

  async RegisterUser(email: string, password: string) {
    return await firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  async LoginUser(email: string, password: string) {
    console.log(email, password)
    return await firebase.auth().signInWithEmailAndPassword(email, password)
  }

  async LogoutUser(){
    return await  firebase.auth().signOut();
  }
}

export default FirebaseUserManager;