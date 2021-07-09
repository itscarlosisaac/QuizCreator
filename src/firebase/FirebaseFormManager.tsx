import firebase from 'firebase';

class FirebaseFormManager {
  readonly FirebaseDB = firebase.firestore();

  async StartSavingForm(id: string, formData: any) {
    const Form = await this.FirebaseDB.collection("forms").doc(id).set({
      ...formData
    }, { merge: true })
    return Form;
  }

  async StartCreatingForm(id: string) {
    const Form = await this.FirebaseDB.collection("forms").add({
      ownerId: id,
      meta: {
        id: "",
        title: "New Form",
        description: "Form Description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      questionList: []
    });
    const data = await (await Form.get()).data();
    if (data !== undefined) {
      data.meta.id = Form.id;
      data.meta.publicUrl = `https://fueled-questionnaire.web.app/public/${Form.id}`
      await Form.update(data)
    }
    return Form.id;
  }

  async StartFetchingForms(ownerId: string) {
    const Forms:any = []
    await this.FirebaseDB.collection("forms").where("ownerId", "==", ownerId).get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              Forms.push(doc.data())
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
    return Forms;
  }

  async DeleteForm(id: string) {
    await this.FirebaseDB.collection("forms").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  async FetchSingle(documentId: string) {
    let data;
    await this.FirebaseDB.collection("forms").doc(documentId).get()
      .then((doc) => {
        data = doc.data()
      });
    return data
  }
}

export default FirebaseFormManager;