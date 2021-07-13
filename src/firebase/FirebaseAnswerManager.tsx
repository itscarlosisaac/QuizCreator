import firebase from 'firebase';

class FirebaseAnswerManager {
  readonly FirebaseDB = firebase.firestore();

  async StartSavingAsnwer(data: any) {
    const AddedData = await this.FirebaseDB.collection("answers").add(data);
    await (await AddedData.get()).data();
  }

  async GetAnswers(id:string) {
    const documents = await (await this.FirebaseDB.collection("answers").where("meta.formId", "==", id).get()).docs;
    const answers:any[] = []
    documents.map(document => {
      answers.push( document.data() )
    })
    return answers;
  }

}

export default FirebaseAnswerManager;