import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase';
import toast from 'react-hot-toast';
export const dataProvider = createContext(null);
const NewsDataProvider = ({ children }) => {
   const [news, setNews] = useState([]);
   const [loader, setLoader] = useState(true)
   useEffect(() => {
      fetch("../../../public/news.json")
         .then(res => res.json())
         .then(data => setNews(data))
         .catch(err => console.error(err))
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
         })
   }
   const userLogin = (email, password) => {
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   //ovserve user 
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
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
   }
   return (
      <dataProvider.Provider value={{ news, createUserWithGoogle, createUserWithEmailAndPass, userLogin, user, setUser, handleLogout, loader, }}>
         {children}
      </dataProvider.Provider>
   );
};

export default NewsDataProvider;