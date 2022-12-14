import React, { useState, createContext, useEffect } from "react";
import { login, register, fetchUser } from "./Auth.service";

interface authUserProps {
  access_token: string;
  email: string;
  name: string;
  is_admin: boolean;
  id: number;
}

interface authContextProps {
  authUser: authUserProps | null;
  loginUser: (data: loginProps) => Promise<void>;
  logoutUser: () => void;
  registerUser: (data: registerProps) => Promise<void>;
  isLoading: boolean;
}

interface registerProps {
  email: string;
  password: string;
  name: string;
}

interface loginProps {
  email: string;
  password: string;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<authContextProps | null>(null);

export const AuthContextProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState<authUserProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("authUser", authUser);

  const loginUser = async (data: loginProps) => {
    try {
      const res = await login(data);
      setAuthUser({ ...res });
      localStorage.setItem("token", res.access_token);
    } catch (e) {
      console.log("error", e);
    }
  };

  const logoutUser = () => {
    setAuthUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await fetchUser(token);
          setAuthUser({ ...res, access_token: token });
        } catch (e) {
          console.log("error", e);
        }
      }
      setIsLoading(false);
    };
    fetcher();
  }, []);

  const registerUser = async (data: registerProps) => {
    try {
      const res = await register(data);
      setAuthUser({ ...res, email: data.email, name: data.name });
      console.log(res);
      localStorage.setItem("token", res.access_token);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
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
