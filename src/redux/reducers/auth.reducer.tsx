import {
  AuthActions
} from '../constants/Auth'
import {
  ActionType
} from '../constants/ActionType'


export const AuthReducer = ( state = {}, action: ActionType ) => {
  switch (action.type) {
    case AuthActions.login:
      return {
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
      }
  
    case AuthActions.logout:
      return { }
    
    case AuthActions.register:
      return {
        ...action.payload
      }
    default:
      return state;
    
    
  }
}