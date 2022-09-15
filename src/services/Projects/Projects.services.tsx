import axios from "axios";

const baseURL =
  "https://3404-2001-16a2-ce63-9900-14b9-fe82-ff2b-eafa.eu.ngrok.io";

export const fetchAllProjects = async () => {
  const res = await axios.get(`${baseURL}/api/projects`);
  return res.data;
};

export const fetchUserProjects = async (id: string) => {
  const res = await axios.get(`${baseURL}/api/projects/${id}`);
  return res.data;
};

export const createNewProject = async (data: {
  name: string;
  description: string;
  user_id: string;
  img: string;
}) => {
  const res = await axios.post(`${baseURL}/api/projects`, data);
  return res.data;
};
