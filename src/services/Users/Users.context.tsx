import React, { useState, createContext, useEffect } from "react";
import { serviceFetchAllUsers, serviceFetchUserDetails } from "./Users.service";

interface usersContextProps {
  userList: any;
  isLoading: boolean;
  fetchAllUsers: () => Promise<void>;
  fetchUserDetails: (id: string) => Promise<any>;
}

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<usersContextProps | null>(null);

export const UserContextProvider = ({ children }: Props) => {
  const [userList, setUserList] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllUsers = async () => {
    setIsLoading(true);
    try {
      const res = await serviceFetchAllUsers();
      setUserList(res);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const fetchUserDetails = async (id: string) => {
    setIsLoading(true);
    try {
      const res = await serviceFetchUserDetails(id);
      return res;
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        fetchAllUsers,
        fetchUserDetails,
        userList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
