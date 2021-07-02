import {
  FormActions
} from '../constants/Form'
import {
  ActionType
} from '../constants/ActionType'


export const FormReducer = ( state = {}, action: ActionType ) => {
  switch (action.type) {
    case FormActions.create:
      return {}
  
    case FormActions.edit:
      return {}
    
    case FormActions.update:
      return {}
    
    case FormActions.delete:
      return {}

    default:
      return state;
    
    
  }
}