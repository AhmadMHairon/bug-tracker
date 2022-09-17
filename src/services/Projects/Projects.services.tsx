import axios from "axios";

const baseURL =
  "https://3404-2001-16a2-ce63-9900-14b9-fe82-ff2b-eafa.eu.ngrok.io/api/v1";

export const serviceFetchUserProjects = async (access_token: any) => {
  const res = await axios.get(`${baseURL}/projects/`, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
    withCredentials: true,
  });
  return res.data;
};

export const serviceCreateNewProject = async (data: {
  name: string;
  description: string;
  user_id: string;
  img: string;
}) => {
  const res = await axios.post(`${baseURL}/projects`, data);
  return res.data;
};
