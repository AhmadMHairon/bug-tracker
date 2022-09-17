import React, { useState, createContext, useEffect, useContext } from "react";
import { AuthContext } from "../auth.context";
import {
  serviceFetchUserProjects,
  serviceCreateNewProject,
} from "./Projects.services";

interface projectContextProps {
  isLoading: boolean;
  CreateProject: any;
  projectList: [ProjectProps];
  fetchProjects: () => Promise<void>;
}

interface ProjectProps {
  id: string;
  name: string;
  description: string;
  userRole?: string;
  image: string;
}

interface createProjectProps {
  name: string;
  description: string;
  user_id: string;
  img: string;
}

interface Props {
  children: React.ReactNode;
}

export const ProjectsContext = createContext<projectContextProps | null>(null);

export const ProjectsContextProvider = ({ children }: Props) => {
  const authUser = useContext(AuthContext);
  const [projectList, setProjectList] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const CreateProject = async (data: createProjectProps) => {
    const res = await serviceCreateNewProject(data);
    console.log(res);
    setProjectList((prev: any) => [...prev, res]);
  };

  useEffect(() => {
    const fetchUserProjects = async () => {
      setIsLoading(true);
      const res = await serviceFetchUserProjects(
        authUser?.authUser?.access_token
      );
      console.log("res", res);
      setProjectList(res);
      setIsLoading(false);
    };
    if (authUser?.authUser?.access_token) {
      fetchUserProjects();
    }
  }, [authUser?.authUser?.access_token]);

  const fetchProjects = async () => {
    setIsLoading(true);
    const res = await serviceFetchUserProjects(
      authUser?.authUser?.access_token
    );
    setProjectList(res);
    setIsLoading(false);
  };

  return (
    <ProjectsContext.Provider
      value={{
        isLoading,
        CreateProject,
        projectList,
        fetchProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
