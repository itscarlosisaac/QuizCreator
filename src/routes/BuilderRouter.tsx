import {FC, ReactElement, useEffect, useState } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import { ThankYouScreen } from '../pages/ThankYouScreen'
import { BuilderScreen } from '../pages/BuilderScreen'
import { DashboardScreen } from '../pages/DashboardScreen'
import { ViewerScreen } from '../pages/ViewerScreen'
import { AnswerScreen } from '../pages/AnswerScreen'

export const BuilderRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/app/dashboard" component={DashboardScreen}/>
          <Route path="/app/builder/:formId" component={BuilderScreen}/>
          <Route path="/app/viewer/:formId/answers" component={AnswerScreen}/>
          <Route path="/app/viewer/:formId/answers/:answersId" component={AnswerScreen}/>
          <Route path="/app/viewer/:formId" component={ViewerScreen}/>
          <Route path="/app/thank-you" component={ThankYouScreen}/>
        </Switch>
      </>
    </Router>
  )
}
