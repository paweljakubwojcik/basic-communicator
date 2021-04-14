import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuthListener from '../hooks/useAuthListener'

export function PrivateRoute({ children, ...rest }) {
    const { user } = useAuthListener()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/SignIn',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}

export function IsUserRedirect({ loggedInPath, children, ...rest }) {
    const { user } = useAuthListener()
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children
                }
                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    )
                }
                return null
            }}
        />
    )
}
