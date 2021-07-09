import { FC, ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

import { firebaseManager } from '../firebase/FirebaseManager';
import { AuthRouter } from './AuthRouter';
import { BuilderRouter } from './BuilderRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicFormScreen } from '../pages/PublicFormScreen'
import { userLogin } from '../redux/actions/auth.actions'
import { LoadingScreen } from '../pages/LoadingScreen';

export const AppRouter: FC = (): ReactElement => {

    
  const dispatch = useDispatch();
  const [firebaseLoading, setFirebaseLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebaseManager.auth().onAuthStateChanged((user => {
      if( user?.uid ) {
        dispatch(userLogin(user))
        setIsLoggedIn(true)
      }else {
        setIsLoggedIn(false)
      }
      setFirebaseLoading(false)
    }))
  }, [dispatch, firebaseLoading, isLoggedIn])
  

  if ( firebaseLoading ) {
    return ( <LoadingScreen/> )
  }

  return (
    <>
      <Router>
        <>
          <Switch>
            <PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={AuthRouter} />
            <PrivateRoute isAuthenticated={isLoggedIn} path="/app" component={BuilderRouter} />
            <Route path="/public/:formId" component={PublicFormScreen}/>
          </Switch>
        </>
      </Router>
    </>
  )
}
