import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
});

export interface AuthProviderPropsInterface {
  children: JSX.Element;
}

export const AuthProvider = (props: AuthProviderPropsInterface) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
