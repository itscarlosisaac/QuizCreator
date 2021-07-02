import firebase from 'firebase';

class FirebaseFormManager {
  readonly FirebaseDB = firebase.firestore();

  async StartCreatingForm(id: string) {
    const Form = await this.FirebaseDB.collection("forms").add({
      ownerId: id
    });
    const FormData = await (await Form.get()).data();
    console.log(Form)
    console.log(FormData)
    return Form.id;
  }

  async StartFetchingForms(ownerId: string) {
    const Forms:any = []
    await this.FirebaseDB.collection("forms").where("ownerId", "==", ownerId).get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              Forms.push(doc.data())
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
    return Forms;
  }
}

export default FirebaseFormManager;