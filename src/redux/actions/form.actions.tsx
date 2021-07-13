import { firebaseManager } from '../../firebase/FirebaseManager';
import { FormActions } from '../constants/Form';
import { AppDispatch } from '../store';

export const StartFetchingForms = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    const data = await firebaseManager.formManager.StartFetchingForms(userId);
    return dispatch(FetchingForms(data))
  }
}

export const FetchingForms = (FormData:any) => ({
  type: FormActions.fetching ,
  payload: FormData
})

export const StartFetchingSingle = (documentId: string) => {
  return async (dispatch: AppDispatch) => {
    const data = await firebaseManager.formManager.FetchSingle(documentId);
    return dispatch(FetchingSingle(data))
  }
}

export const FetchingSingle = (FormData:any) => ({
  type: FormActions.fetchSingle ,
  payload: FormData
})

export const StartCreatingNewForm = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const formId = await firebaseManager.formManager.StartCreatingForm(id);
    await dispatch(CreatingNewForm(formId))
    return formId;
  }
}

export const CreatingNewForm = (FormData: any) => ({
  type: FormActions.createNewForm,
  payload: FormData,
})

export const StartSaveFormAction = (id:string, FormData: any) => {
  console.log("Start Save Action", FormData, id)
  return async (dispatch: AppDispatch) => {
    await firebaseManager.formManager.StartSavingForm(id, FormData);
    dispatch(SaveFormAction(FormData))
  }
}

export const SaveFormAction = (FormData: any) => ({
  type: FormActions.saveForm,
  payload: FormData,
})


export const EditFormMetaAction = (data: any) => {
  return {
    type: FormActions.editForm,
    payload: data
  }
}

export const AddNewQuestionAction = () => {
  console.log("Start adding question");
}

export const StartDeletingFormAction = (id: string) => {
  return async (dispatch: AppDispatch) => {
    await firebaseManager.formManager.DeleteForm(id);
    dispatch(DeleteFormAction(id))
  }
}

export const DeleteFormAction = (id: string) => ({
  type: FormActions.deleteForm,
  payload: id
})

export const CleanForm  = () => ({
  type: FormActions.cleanForm,
  payload: null
})
