import {
  FormActions
} from '../constants/Form'

import {
  ActionType
} from '../constants/ActionType'
const InitialState = {
  formList: []
}

export const FormReducer = (state = InitialState, action: ActionType) => {
  switch (action.type) {
    case FormActions.fetching:
      return {
        ...state,
        formList: [...action.payload]
      }
    
    case FormActions.fetchSingle:
      return {
        ...state,
        public: action.payload
      }
  
    case FormActions.editForm:
      return {
        ...state,
        ...action.payload
      }
    
    case FormActions.saveForm:
      console.log(action.payload)
      const forms = state.formList.concat(action.payload)
      return {
        ...state,
        formList: forms
      }
    
    case FormActions.deleteForm:
      const filteredForms = state.formList.filter((form:any) => form.meta.id !== action.payload)
      return {
        ...state,
        formList: filteredForms
      }
    case FormActions.cleanForm:
      return {}

    default:
      return state;
    
    
  }
}