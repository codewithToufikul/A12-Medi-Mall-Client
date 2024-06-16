import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const signUpUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const loginUser = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () =>{
        return signOut(auth)
    }

    const value = {
        signUpUser,
        updateUser,
        loginUser,
        user,
        logoutUser,
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser  =>{
            setUser(currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;