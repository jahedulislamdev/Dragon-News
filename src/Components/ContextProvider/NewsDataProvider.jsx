import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase';
import toast from 'react-hot-toast';
export const dataProvider = createContext(null);
const NewsDataProvider = ({ children }) => {
   const [news, setNews] = useState([]);
   const [loader, setLoader] = useState(true)
   useEffect(() => {
      setLoader(true)
      fetch("/news.json")
         .then(res => res.json())
         .then(data => {
            setNews(data)
            setLoader(false)
         })
         .catch(err => {
            console.error(err);
            setLoader(false);
         })
   }, []);
   const auth = getAuth(app);
   //create userWith Email & password
   const [user, setUser] = useState()
   const createUserWithEmailAndPass = (email, password) => {
      setLoader(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   //create user with google 
   const createUserWithGoogle = () => {
      setLoader(true)
      if (user) {
         toast.error("You are already Login!");
         return;
      }
      const GoogleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, GoogleProvider)
         .then((res) => {
            updateProfile(res.user, {
               displayName: res.user.displayName,
               photoURL: res.user.photoURL,
            }).then(() => {
               setUser(res.user)
            }).catch((err) => { toast.error(err.message) })
         })
         .catch((err) => {
            toast.error(err.code)
            setLoader(false)
         })
   }
   // login User with github
   const createUserWithGithub = () => {
      setLoader(true)
      if (user) {
         toast.error("You are already Login!");
         return;
      }
      const providerGithub = new GithubAuthProvider();
      signInWithPopup(auth, providerGithub)
         .then((res) => {
            updateProfile(res.user, {
               displayName: res.user.displayName,
               photoURL: res.user.photoURL,
            }).then(() => {
               setUser(res.user)
            }).catch((err) => { toast.error(err.message) })
         })
         .catch((err) => {
            toast.error(err.code)
            setLoader(false)
         })
   }
   const userLogin = (email, password) => {
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   //ovserve user 
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         if (user) {
            setUser(currentUser);
         }
         setLoader(false)
      });
      return () => {
         unsubscribe();
      }
   }, []);

   //sign out
   const handleLogout = () => {
      setLoader(true);
      signOut(auth)
         .then(() => {
            toast.success("logout Successfull");
            setUser(null);
            return;
         });
      setLoader(false)
   }
   return (
      <dataProvider.Provider value={{ news, createUserWithGoogle, createUserWithEmailAndPass, createUserWithGithub, userLogin, user, setUser, handleLogout, loader, }}>
         {children}
      </dataProvider.Provider>
   );
};

export default NewsDataProvider;