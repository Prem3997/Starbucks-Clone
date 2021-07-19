import { Route, Redirect } from "react-router";
import { SIGN_IN } from "../constants/routes";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
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
                                pathname: loggedInPath
                            }}
                        />
                    )
                }
                return null
            }}
        />
    )
}

export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children
                }
                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: SIGN_IN ,
                                state: { from: location }
                            }}
                        />
                    )
                }
                return null
            }}
        />
    )
}