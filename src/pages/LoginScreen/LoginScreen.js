import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { TextField } from '@material-ui/core'
import { VisibilityOutlined, Close, ReportProblemRounded, VisibilityOffOutlined } from '@material-ui/icons'
import { LOGIN_SCREEN_FORGOT_LINKS, LOGIN_SCREEN_HEADER, LOGIN_SCREEN_STARBUCKS_REWARDS } from '../../constants/LoginScreenConstants'
import FormSubmit from '../../components/button/FormSubmit'
import FooterSecondary from '../../components/footer/FooterSecondary'
import "./LoginScreen.css"
import { auth } from '../../lib/firebase.prod'
import { useDispatch } from 'react-redux'
import { login } from '../../features/UserSlice'
import StarbucksLogo from '../../components/logo/StarbucksLogo'
function LoginScreen() {
    const { register, handleSubmit, errors } = useForm()
    const [passwordShown, setPasswordShown] = useState(false)
    const [firebaseError, setFirebaseError] = useState('')
    const dispatch = useDispatch()
    const onSubmit = ({ email, password }) => {
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName
            }))
        }).catch((error) => setFirebaseError(error.message))
    }
    return (
        <div className="loginScreen">
            <div className="loginScreen__left">
                <div className="loginScreen__logo">
                    <StarbucksLogo />
                </div>
                <div className="loginScreen__info">
                    <h1>{LOGIN_SCREEN_HEADER}</h1>
                </div>
            </div>
            <div className="loginScreen__right">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="loginScreen__inputContainer">
                        <TextField
                            label="Email Address"
                            className="loginScreen__input"
                            type="email"
                            name="email"
                            inputRef={register({ required: true })}
                            InputLabelProps={{
                                style: {
                                    color: "rgba(0,0,0,0.56)"
                                }
                            }}
                            InputProps={{
                                style: {
                                    fontWeight: "400"
                                }
                            }}
                        />
                        {errors.email && (
                            <div className="loginScreen__error">
                                <Close fontSize="small" />
                                <span>Enter an Email.</span>
                                <ReportProblemRounded
                                    fontSize="small"
                                    className="loginScreen__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    <div className="loginScreen__inputContainer">
                        <TextField
                            label="Password"
                            className="loginScreen__input"
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            inputRef={register({ required: true })}
                            InputLabelProps={{
                                style: {
                                    color: "rgba(0,0,0,0.56)"
                                }
                            }}
                            InputProps={{
                                style: {
                                    fontWeight: "400"
                                }
                            }}
                        />
                        {passwordShown ? (
                            <VisibilityOutlined
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="loginScreen__visibilityIcon"
                            />
                        ) : (
                            <VisibilityOffOutlined
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="loginScreen__visibilityIcon"
                            />
                        )}
                        {errors.password && (
                            <div className="loginScreen__error">
                                <Close fontSize="small" />
                                <span>Enter a Password.</span>
                                <ReportProblemRounded
                                    fontSize="small"
                                    className="loginScreen__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    {firebaseError && (
                        <div className="loginScreen__error">
                            <Close fontSize="small" />
                            <span>{firebaseError}</span>
                        </div>
                    )}
                    <div className="loginScreen__resetLinks">
                        <Link>{LOGIN_SCREEN_FORGOT_LINKS.email}</Link>
                        <Link>{LOGIN_SCREEN_FORGOT_LINKS.passowrd}</Link>
                    </div>
                    <FormSubmit name="Sign In" type="submit" />
                </form>
                <div className="loginScreen__rewards">
                    <h4>{LOGIN_SCREEN_STARBUCKS_REWARDS.heading}</h4>
                </div>
                <div className="loginScreen__joinNow">
                    <div className="loginScreen__joinNowContainer">
                        <Link to="/account/signup">{LOGIN_SCREEN_STARBUCKS_REWARDS.join_now}</Link>
                        <h4>{LOGIN_SCREEN_STARBUCKS_REWARDS.heading_create_account}</h4>
                        <p>
                            {LOGIN_SCREEN_STARBUCKS_REWARDS.paragraph}
                        </p>
                    </div>
                </div>
                <FooterSecondary paddingLeft={30} flexDirection="column" />
            </div>
        </div>
    )
}

export default LoginScreen
