import React, { ComponentType, FC } from 'react'
import PropTypes from 'prop-types';
import {
  Route,
  Redirect
} from 'react-router-dom'

interface IProps {
  isAuthenticated: boolean,
  component: ComponentType,
  path: string,
  exact?: boolean
}

export const PrivateRoute: FC <IProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route 
      {...rest}
      component={
        (props: React.PropsWithChildren<React.ReactNode>) => (
          ( isAuthenticated ) 
            ? <Component {...props} />
            : <Redirect to="/auth/login" />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}