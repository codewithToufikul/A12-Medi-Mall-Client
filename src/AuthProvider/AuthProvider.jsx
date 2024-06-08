import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

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

    const value = {
        signUpUser,
        updateUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;