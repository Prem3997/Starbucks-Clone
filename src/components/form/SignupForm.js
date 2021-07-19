import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import { VisibilityOutlined, Close, ReportProblemRounded, VisibilityOffOutlined } from '@material-ui/icons'
import FormSubmit from '../button/FormSubmit'
import { auth } from '../../lib/firebase.prod'
import "./SignupForm.css"
import { useDispatch } from 'react-redux'
import { login } from '../../features/UserSlice'
import { useHistory } from 'react-router-dom'
import { MENU_PAGE } from '../../constants/routes'

function SignupForm() {
    const { register, handleSubmit, errors } = useForm()
    const [passwordShown, setPasswordShown] = useState(false)
    const [firebaseError, setFirebaseError] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = ({ firstName, lastName, email, password }) => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: firstName
                    }).then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: firstName
                            })
                        )
                        history.replace(MENU_PAGE)
                    })
            }).catch((error) => setFirebaseError(error.message))

    }
    return (
        <div className="signupForm">
            <div className="signupForm__container">
                <form onSubmit={handleSubmit(onSubmit)} className="signupForm__form">
                    <h4 className="signupForm__section">Personal Information</h4>
                    <div className="signupForm__inputContainer">
                        <TextField
                            label="First Name"
                            className="signupForm__input"
                            type="text"
                            name="firstName"
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
                        {errors.firstName && (
                            <div className="signupForm__error">
                                <Close fontSize="small" />
                                <span>Enter your First Name.</span>
                                <ReportProblemRounded
                                    fontSize="small"
                                    className="signupForm__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    <div className="signupForm__inputContainer">
                        <TextField
                            label="Last Name"
                            className="signupForm__input"
                            type="text"
                            name="lastName"
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
                        {errors.lastName && (
                            <div className="signupForm__error">
                                <Close fontSize="small" />
                                <span>Enter your Last Name.</span>
                                <ReportProblemRounded
                                    fontSize="small"
                                    className="signupForm__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    <h4 className="signupForm__section">Account Security</h4>
                    <div className="signupForm__inputContainer">
                        <TextField
                            label="Email Address"
                            className="signupForm__input"
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
                            <div className="signupForm__error">
                                <Close fontSize="small" />
                                <span>Enter an Email Address.</span>
                                <ReportProblemRounded
                                    fontSize="small"
                                    className="signupForm__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    <div className="signupForm__inputContainer">
                        <TextField
                            label="Password"
                            className="signupForm__input"
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
                                className="signupForm__visibilityIcon"
                            />
                        ) : (
                            <VisibilityOffOutlined
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="signupForm__visibilityIcon"
                            />
                        )}
                        {errors.password && (
                            <div className="signupForm__error">
                                <Close fontSize="small" />
                                <span>Enter a Password.</span>
                                <ReportProblemRounded
                                    fontSize="small"
                                    className="signupForm__reportIcon"
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
                    <h4 className="signupForm__rewards">
                        COLLECT MORE STARS & EARN REWARDS
                    </h4>
                    <span className="signupForm__span">
                        Email is a great way to know about offers and what’s new from
                        Starbucks.
                    </span>
                    <FormSubmit name="Create account" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default SignupForm
