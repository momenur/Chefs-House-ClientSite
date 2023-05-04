import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const Auth = getAuth(app)

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const logOut = () => {
        return signOut(Auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            console.log('OnAuthState Change', currentUser);
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    // Google Sign In

    const GoogleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
       return signInWithPopup(Auth, GoogleProvider)
    }

    // Github Sign In
    const GithubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        return signInWithPopup(Auth, GithubProvider)
    }


    const AuthInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;