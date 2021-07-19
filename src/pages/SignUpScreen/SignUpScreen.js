import React from 'react'
import StarbucksLogo from '../../components/logo/StarbucksLogo'
import { SIGNUP_SCREEN_STARBUCKS_REWARDS, SIGN_UP_HEADER } from '../../constants/SignupPageConstants'
import "./SignUpScreen.css"
import SignupForm from '../../components/form/SignupForm'
import FooterSecondary from "../../components/footer/FooterSecondary"

function SignUpScreen() {
    return (
        <div className="signupScreen">
            <div className="signupScreen__header">
                <div className="signupScreen__logo">
                    <StarbucksLogo />
                </div>
            </div>
            <h1 className="signupScreen__heading">
                {SIGN_UP_HEADER}
            </h1>
            <div className="signupScreen__rewards">
                <h4>{SIGNUP_SCREEN_STARBUCKS_REWARDS.heading}</h4>
                {SIGNUP_SCREEN_STARBUCKS_REWARDS.paragraph}
            </div>
            <SignupForm />
            <FooterSecondary alignItems="center" flexDirection="column" />
        </div>
    )
}

export default SignUpScreen
