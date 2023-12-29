import React, { Children, createContext, useContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ childer }) => {

const createUser = async(email, password)=>{
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        
    }
}

  const values = {createUser};

  return <AuthContext.Provider value={values}>{Children}</AuthContext.Provider>;
};

export default AuthContextProvider;
