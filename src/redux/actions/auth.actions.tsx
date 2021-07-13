
import { firebaseManager } from '../../firebase/FirebaseManager';
import { AuthActions } from '../constants/Auth';
import { AppDispatch } from '../store';

export const userLogin = (user: any) => {
  return { 
    type: AuthActions.login,
    payload: {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }
  }
}

export const startLoginEmailPassword = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { user } = await firebaseManager.userManager.LoginUser(email, password);
      return dispatch(userLogin(user))
    } catch {
      return "User or Password are invalid, please try again.";
    }
  }
}

export const startRegister = (email: string, password: string, username: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { user } = await firebaseManager.userManager.StartRegisterUser(email, password, username);
      await user!.updateProfile({ displayName: username });
      dispatch(userLogin(user))
    } catch (error) {
      return error;
    }
  }
}

export const logout = () => {
  return {
    type: AuthActions.logout
  }
}

export const startLogout = () => {
  return async (dispatch: any) => {
    await firebaseManager.userManager.LogoutUser()
    dispatch(logout())
  }
}
