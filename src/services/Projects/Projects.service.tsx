import axios from "axios";

import { baseURL } from "../../components/utils/baseURL";

export const fetchUserProjects = async (access_token?: string) => {
  const res = await axios.get(`${baseURL}/v1/projects/`, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const createNewProject = async (
  data: {
    name: string;
    description: string;
    image?: any;
  },
  access_token?: string
) => {
  const res = await axios.post(`${baseURL}/v1/projects/create`, data, {
    headers: {
      Authorization: "Bearer " + access_token,
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const fetchProjectDetails = async (
  project_id: string,
  access_token?: string
) => {
  const res = await axios.get(`${baseURL}/v1/projects/show/${project_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const updatingProjectDetails = async (
  data: any,
  project_id: string,
  access_token?: string
) => {
  const res = await axios.put(
    `${baseURL}/v1/projects/update/${project_id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
  return res.data.data;
};

export const deleteProjectDetails = async (
  project_id: string,
  access_token?: string
) => {
  const res = await axios.delete(
    `${baseURL}/v1/projects/delete/${project_id}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
  return res.data.data;
};
