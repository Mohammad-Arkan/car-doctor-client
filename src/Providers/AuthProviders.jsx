import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";

export const AuthContex = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState()
    const creatUser = (email, password)=> {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() => {
        return signOut(auth)
    }

    useEffect(()=> {
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=> {
        console.log('auth state chang', currentUser)
        setUser(currentUser)
        setLoading(false)
        })
        return()=> {
           return unsubscribe()
        }
    },[])
    const authInfo={
        user,
        creatUser,
        signInUser,
        loading,
        logOut
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}    
        </AuthContex.Provider>
    );
};

export default AuthProviders;