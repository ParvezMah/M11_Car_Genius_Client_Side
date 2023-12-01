import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn 
    const signIn = (email, password)=> {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // SignOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // user signed in or not
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Current User in : ', currentUser);
            setLoading(false);
        })
        return ()=>{
            return unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;