import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

export const serviceFetchAllUsers = async (access_token?: string) => {
  const res = await axios.get(`${baseURL}/v1/users`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data;
};

export const serviceFetchUserDetails = async (
  id: string,
  access_token?: string
) => {
  const res = await axios.get(`${baseURL}/v1/users/show/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data;
};
