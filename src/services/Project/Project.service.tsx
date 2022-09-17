import axios from "axios";

const baseURL =
  "https://3404-2001-16a2-ce63-9900-14b9-fe82-ff2b-eafa.eu.ngrok.io";

export const serviceFetchProject = async (id?: string) => {
  const res = await axios.get(`${baseURL}/api/projects/${id}`);
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
  const res = await axios.post(`${baseURL}/api/projects/${id}/scene`, data);
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
    `${baseURL}/api/projects/${id}/assign-member/`,
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
