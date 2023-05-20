import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const PRvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const createUser = ((email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
      }
      )
      const signIn = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
      }
      const Logout = () => {
            setLoading(true)
            return signOut(auth)

      }
      const LogWithGoogle = (auth, Provider) => {
            setLoading(true);
            return signInWithPopup(auth, Provider);

      }
      // const LogWithGithub = (auth, githubprovier) => {
      //       setLoading(true);
      //       return signInWithPopup(auth, githubprovier);
      // }


      useEffect(() => {

            const unsubcribe = onAuthStateChanged(auth, currentuser => {
                
                  setUser(currentuser);
                return  setLoading(false);

            })
            return () => {
                  return unsubcribe();
            }
      }, [])
      // console.log("pro",loading);
      const authInfo = {

            user,
            createUser,
            signIn,
            Logout,
            loading,
            LogWithGoogle,
            // LogWithGithub,


      };
      console.log(user);
      return (
            <AuthContext.Provider value={authInfo}>
                  {
                        children
                  }

            </AuthContext.Provider>
      );
};

export default PRvider;