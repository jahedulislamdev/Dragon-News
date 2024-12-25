import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../Firebase/Firebase';
export const dataProvider = createContext(null);
const NewsDataProvider = ({ children }) => {
   const [news, setNews] = useState([]);
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
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const userLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }
   return (
      <dataProvider.Provider value={{ news, createUser, userLogin, user, setUser }}>
         {children}
      </dataProvider.Provider>
   );
};

export default NewsDataProvider;