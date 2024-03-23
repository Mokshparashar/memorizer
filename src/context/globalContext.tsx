import React, { createContext, useContext, useState } from "react";


const MyContext = createContext();

function globalContext:React.FC({ children }) {
  const [isSignupOpen, setIsSignupOpen] = useState();
  return (
    <myContext.Provider value={{ isSignupOpen, setIsSignupOpen }}>
      {children}
    </myContext.Provider>
  );
}

export default globalContext;

export const useGlobalContext = () => {
  return useContext(MyContext);
};
