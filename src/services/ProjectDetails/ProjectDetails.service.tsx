import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

export const serviceFetchProject = async (
  id: string,
  access_token?: string
) => {
  const res = await axios.get(`${baseURL}/v1/projects/show/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data;
};

export const serviceCreateScene = async (
  data: {
    name: string;
    description: string;
    project_id: string;
  },
  id?: string
) => {
  const res = await axios.post(`${baseURL}/projects/${id}/scene`, data);
  return res.data;
};

export const serviceAssignMember = async (
  data: {
    user_id: string;
    project_id: string;
  },
  id?: string
) => {
  const res = await axios.post(
    `${baseURL}/projects/${id}/assign-member/`,
    data
  );
  return res.data;
};

export const serviceCreateNewProject = async (data: {
  name: string;
  description: string;
  user_id: string;
  img: string;
}) => {
  const res = await axios.post(`${baseURL}/api/projects`, data);
  return res.data;
};
