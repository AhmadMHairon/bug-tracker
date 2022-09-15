import React, { useState, createContext, useEffect } from "react";
import { login, register, fetchUser } from "./auth.services";

type authUserProps = {
  access_token?: string;
  email?: string;
  name?: string;
  id?: string;
};

type authContextProps = {
  authUser?: authUserProps | null;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
  registerUser: (data: registerProps) => Promise<void>;
  isLoading: boolean;
};

type registerProps = {
  email: string;
  password: string;
  name: string;
};

export const AuthContext = createContext<authContextProps | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const loginUser = async (email: string, password: string) => {
    // setIsLoading(true);
    try {
      const res = await login(email, password);

      setAuthUser({ ...res, email });
      localStorage.setItem("token", res.access_token);
    } catch (e) {
      console.log("error", e);
    }
    // setIsLoading(false);
  };
  const logoutUser = () => {
    setAuthUser({});
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);

      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        try {
          const res = await fetchUser(token);
          console.log("hey", { ...res.data });
          setAuthUser({ ...res.data, access_token: token });
        } catch (e) {
          console.log("error", e);
        }
      }
      setIsLoading(false);
    };
    fetcher();
  }, []);

  const registerUser = async (data: registerProps) => {
    console.log("Hey");
    try {
      const res = await register(data);
      setAuthUser({ ...res, email: data.email });
      localStorage.setItem("token", res.access_token);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authUser: authUser,
        loginUser,
        logoutUser,
        registerUser: registerUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
