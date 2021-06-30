import {FC, ReactElement, useEffect, useState } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import { BuilderScreen } from '../pages/BuilderScreen'
import { DashboardScreen } from '../pages/DashboardScreen'
import { LoginScreen } from '../pages/LoginScreen'
import { RegisterScreen } from '../pages/RegisterScreen'
import { ViewerScreen } from '../pages/ViewerScreen'

export const AppRouter: FC = (): ReactElement => {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route path="/app/login" component={LoginScreen}/>
            <Route path="/app/register" component={RegisterScreen}/>
            <Route path="/app/dashboard" component={DashboardScreen}/>
            <Route path="/app/builder/:formId" component={BuilderScreen}/>
            <Route path="/app/viewer/:formId" component={ViewerScreen}/>
            <Route path="/app/viewer/:formId/answers" component={LoginScreen}/>
            <Route path="/app/viewer/:formId/answers/:answersId" component={LoginScreen}/>
            <Route path="/app/public/:formId" component={LoginScreen}/>
          </Switch>
        </>
      </Router>
    </>
  )
}
