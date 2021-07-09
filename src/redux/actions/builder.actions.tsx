
import { firebaseManager } from '../../firebase/FirebaseManager';
import { BuilderActions } from '../constants/Builder';
import { AppDispatch } from '../store';

export const GetEditing = (docId: string) => {
  return async (dispatch: AppDispatch) => {
    const data = await firebaseManager.formManager.FetchSingle(docId);
    dispatch(GetData(data))
    return data;
  }
}

export const GetData = (FormData:any) => ({
  type: BuilderActions.editing,
  payload: FormData
})