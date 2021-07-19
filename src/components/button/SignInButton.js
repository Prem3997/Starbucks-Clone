import React from 'react'
import { Link } from 'react-router-dom'
import { SIGN_IN } from '../../constants/routes'
import "./SignInButton.css"
function SignInButton() {
    return (
        <Link className="signInButton" to={SIGN_IN}>
            Sign In
        </Link>
    )
}

export default SignInButton
