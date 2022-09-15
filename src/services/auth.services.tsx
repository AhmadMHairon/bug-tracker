import axios from "axios";

const baseURL =
  "https://3404-2001-16a2-ce63-9900-14b9-fe82-ff2b-eafa.eu.ngrok.io";

export const login = async (email: string, password: string) => {
  const res = await axios.post(`${baseURL}/api/login`, {
    email: email,
    password: password,
  });
  return res.data;
};

export const fetchUser = async (token: string) => {
  const res = await axios.get(`${baseURL}/api/my-profile`, {
    headers: {
      Authorization: "Bearer " + token,
    },
    withCredentials: true,
  });
  console.log(res.data);
  return res.data;
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axios.post(`${baseURL}/api/register`, {
    name: data.name,
    password: data.password,
    email: data.email,
  });

  return res.data;
};
