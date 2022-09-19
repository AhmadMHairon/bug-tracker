import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

export const serviceFetchAllUsers = async (access_token?: string) => {
  const res = await axios.get(`${baseURL}/v1/users`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceCreateUser = async (data: any, access_token?: string) => {
  const res = await axios.post(`${baseURL}/v1/users/create`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceFetchUserDetails = async (
  user_id?: string,
  access_token?: string
) => {
  const res = await axios.get(`${baseURL}/v1/users/show/${user_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceUpdateUserDetails = async (
  data: any,
  user_id?: string,
  access_token?: string
) => {
  const res = await axios.put(`${baseURL}/v1/users/update/${user_id}`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceDeleteUserDetails = async (
  user_id?: string,
  access_token?: string
) => {
  const res = await axios.delete(`${baseURL}/v1/users/delete/${user_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};
