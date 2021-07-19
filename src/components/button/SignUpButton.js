import React from 'react'
import { Link } from 'react-router-dom'
import { SIGN_UP } from '../../constants/routes'
import "./SignUpButton.css"
function SignUpButton() {
    return (
        <Link className="signUpButton" to={SIGN_UP}>
            Join Now
        </Link>
    )
}

export default SignUpButton
