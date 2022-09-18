import React, { useState, createContext, useContext } from "react";
import { AuthContext } from "../Auth/Auth.context";
import { serviceFetchProject } from "./ProjectDetails.service";

interface projectContextProps {
  isLoading: boolean;
  projectDetails: any;
  FetchProjectDetails: (id: string) => Promise<void>;
}

interface Props {
  children: React.ReactNode;
}

export const ProjectDetailsContext = createContext<projectContextProps | null>(
  null
);

export const ProjectDetailsContextProvider = ({ children }: Props) => {
  const authUser = useContext(AuthContext);
  const [projectDetails, setProjectDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const FetchProjectDetails = async (id: string) => {
    setIsLoading(false);
    try {
      const res = await serviceFetchProject(
        id,
        authUser?.authUser?.access_token
      );
      setProjectDetails(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ProjectDetailsContext.Provider
      value={{
        isLoading,
        FetchProjectDetails,
        projectDetails,
      }}
    >
      {children}
    </ProjectDetailsContext.Provider>
  );
};
