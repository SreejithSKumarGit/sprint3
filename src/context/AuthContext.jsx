import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const[isAuth,toggleAuth]=React.useState(false);

  return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>;
};
