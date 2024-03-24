import React, { createContext, useContext, useState } from "react";

interface InitialValueInterface {
  isSignupOpen: boolean | null;
  setIsSignupOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const MyContext = createContext<InitialValueInterface | undefined>(undefined);

const GlobalContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSignupOpen, setIsSignupOpen] = useState<boolean | null>(false);
  const ContextValue: InitialValueInterface = {
    isSignupOpen,
    setIsSignupOpen,
  };
  return (
    <MyContext.Provider value={ContextValue}>{children}</MyContext.Provider>
  );
};

export default GlobalContext;

export const useGlobalContext = (): InitialValueInterface => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};