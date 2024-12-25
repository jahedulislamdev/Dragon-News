import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
   const auth = getAuth(app)
   //create userWith Email & password
   const [user, setUser] = useState()
   const createUser = (email, password) => {
      setLoader(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const userLogin = (email, password) => {
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   //ovserve user 
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         console.log("user in the auth state changed", currentUser)
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
      <dataProvider.Provider value={{ news, createUser, userLogin, user, setUser, handleLogout, loader }}>
         {children}
      </dataProvider.Provider>
   );
};

export default NewsDataProvider;