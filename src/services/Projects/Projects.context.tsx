import React, { useState, createContext, useEffect, useContext } from "react";
import { AuthContext } from "../Auth/Auth.context";
import // serviceFetchUserProjects,
// serviceCreateNewProject,
"./Projects.service";

interface projectContextProps {
  isLoading: boolean;
  // CreateProject: (data: createProjectProps) => Promise<void>;
  // projectList: [ProjectProps];
  // fetchProjects: () => Promise<void>;
}

interface ProjectProps {
  id: string;
  name: string;
  description: string;
  userRole?: string;
  image: any;
}

interface createProjectProps {
  name: string;
  description: string;
  image?: any;
}

interface Props {
  children: React.ReactNode;
}

export const ProjectsContext = createContext<projectContextProps | null>(null);

export const ProjectsContextProvider = ({ children }: Props) => {
  const authUser = useContext(AuthContext);
  // const [projectList, setProjectList] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // const CreateProject = async (data: createProjectProps) => {
  //   try {
  //     const res = await serviceCreateNewProject(
  //       data,
  //       authUser?.authUser?.access_token
  //     );
  //     setProjectList((prev: any) => [...prev, data]);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   const fetchUserProjects = async () => {
  //     setIsLoading(true);
  //     const res = await serviceFetchUserProjects(
  //       authUser?.authUser?.access_token
  //     );
  //     console.log("res", res);
  //     setProjectList(res);
  //     setIsLoading(false);
  //   };
  //   if (authUser?.authUser?.access_token) {
  //     fetchUserProjects();
  //   }
  // }, [authUser?.authUser?.access_token]);

  // const fetchProjects = async () => {
  //   setIsLoading(true);
  //   const res = await serviceFetchUserProjects(
  //     authUser?.authUser?.access_token
  //   );
  //   setProjectList(res);
  //   setIsLoading(false);
  // };

  return (
    <ProjectsContext.Provider
      value={{
        isLoading,
        // CreateProject,
        // projectList,
        // fetchProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
