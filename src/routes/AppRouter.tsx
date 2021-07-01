import {FC, ReactElement, useEffect, useState } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'


import { AuthRouter } from './AuthRouter';
import { BuilderRouter } from './BuilderRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicFormScreen } from '../pages/PublicFormScreen'

export const AppRouter: FC = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
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
