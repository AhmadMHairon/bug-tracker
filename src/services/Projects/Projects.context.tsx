import React, { useState, createContext, useEffect, useContext } from "react";
import { AuthContext } from "../auth.context";
import {
  fetchAllProjects,
  fetchUserProjects,
  createNewProject,
} from "./Projects.services";

type authUserProps = {
  access_token?: string;
  email?: string;
  name?: string;
};

type projectContextProps = {
  isLoading: boolean;
  CreateProject: any;
  projectList: any;
};

interface createProjectProps {
  name: string;
  description: string;
  user_id: string;
  img: string;
}

export const ProjectContext = createContext<projectContextProps | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ProjectContextProvider = ({ children }: Props) => {
  //   const [authUser, setAuthUser] = useState({});
  const authUser = useContext(AuthContext);
  const [projectList, setProjectList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const CreateProject = async (data: createProjectProps) => {
    const res = await createNewProject(data);
    console.log(res);
    setProjectList((prev: any) => [...prev, res]);
  };

  const fetchProjects = async () => {
    setIsLoading(true);
    const res = await fetchAllProjects();
    setProjectList(res);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {}, []);

  return (
    <ProjectContext.Provider
      value={{
        isLoading,
        CreateProject,
        projectList,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
