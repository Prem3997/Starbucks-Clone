import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/UserSlice";
import { auth } from "../lib/firebase.prod";

export default function useAuthListener() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        const listener = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName
                }))
            } else {
                dispatch(logout())
            }
        })
        return () => listener()
    }, [dispatch])
    return user
}