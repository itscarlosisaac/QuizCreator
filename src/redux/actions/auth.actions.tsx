
import { firebaseManager } from '../../firebase/FirebaseManager';
import { AuthActions } from '../constants/Auth';
import { AppDispatch } from '../store';

export const userLogin = (user: any) => {
  console.log("Login......")
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
  console.log("Start login with email and password")
  return async (dispatch: AppDispatch ) => {
    const { user } = await firebaseManager.userManager.LoginUser(email, password);
    dispatch(userLogin(user))
  }
}

export const startRegister = (email: string, password: string, username: string) => {
  console.log("Start registering.....");
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
  console.log("Logging out.....");
  return {
    type: AuthActions.logout
  }
}

export const startLogout = () => {
  console.log("Start Logout.....");
  return async (dispatch: any) => {
    await firebaseManager.userManager.LogoutUser()
    dispatch(logout())
  }
}
