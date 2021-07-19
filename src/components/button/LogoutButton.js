import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import "./LogoutButton.css"
import { auth } from "../../lib/firebase.prod"
import { logout } from "../../features/UserSlice"
function LogoutButton() {
    const dispatch = useDispatch()
    const history = useHistory()

    const logoutOfApp = () => {
        auth
            .signOut()
            .then(() => {
                dispatch(logout())
                history.replace('/')
            })
            .catch((error) => alert(error.message))
    }
    return (
        <button className='logoutButton' onClick={logoutOfApp}>
            Logout
        </button>
    )
}

export default LogoutButton
