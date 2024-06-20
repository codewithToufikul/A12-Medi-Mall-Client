import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import usePublicAxios from "../Hooks/usePublicAxios";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic = usePublicAxios()

    const signUpUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const loginUser = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const value = {
        signUpUser,
        updateUser,
        loginUser,
        user,
        logoutUser,
        googleLogin,
        loading
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser  =>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post("/jwt", userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
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