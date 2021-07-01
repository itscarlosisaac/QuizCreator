import React, {ComponentType,  FC } from 'react'
import {
  Redirect,
  Route
} from 'react-router-dom'
import PropTypes from 'prop-types';
interface IProps {
  isAuthenticated: boolean,
  component: ComponentType,
  path: string
}


export const PublicRoute: FC<IProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={
        (props: React.PropsWithChildren<React.ReactNode>) => (
          (isAuthenticated)
            ? <Redirect to="/app/dashboard" />
            : <Component {...props} />
        )
      }
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}