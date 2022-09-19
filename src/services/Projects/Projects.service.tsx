import axios from "axios";

import { baseURL } from "../../components/utils/baseURL";

export const fetchUserProjects = async (access_token?: string) => {
  const res = await axios.get(`${baseURL}/v1/projects/`, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
    withCredentials: true,
  });
  return res.data;
};

export const createNewProject = async (
  data: {
    name: string;
    description: string;
    image?: any;
  },
  access_token?: string
) => {
  try {
    const res = await axios.post(`${baseURL}/v1/projects/create`, data, {
      headers: {
        Authorization: "Bearer " + access_token,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
