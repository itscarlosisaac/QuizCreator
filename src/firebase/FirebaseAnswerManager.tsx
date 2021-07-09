import firebase from 'firebase';

class FirebaseAnswerManager {
  readonly FirebaseDB = firebase.firestore();

  async StartSavingAsnwer(data: any) {
    console.log(data);
    const AddedData = await this.FirebaseDB.collection("answers").add(data);
    const M = await (await AddedData.get()).data();
    console.log(M)
  }

}

export default FirebaseAnswerManager;