import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

interface loginProps {
  email: string;
  password: string;
}

interface registerProps {
  email: string;
  password: string;
  name: string;
}

export const login = async (data: loginProps) => {
  const res = await axios.post(`${baseURL}/login`, {
    email: data.email,
    password: data.password,
  });
  return res.data;
};

export const fetchUser = async (token: string) => {
  console.log("Bearer " + token);
  const res = await axios.get(`${baseURL}/my-profile`, {
    headers: {
      Authorization: "Bearer " + token,
    },
    withCredentials: true,
  });
  console.log(res.data);
  return res.data;
};

export const register = async (data: registerProps) => {
  const res = await axios.post(`${baseURL}/register`, {
    name: data.name,
    password: data.password,
    email: data.email,
  });

  return res.data;
};
