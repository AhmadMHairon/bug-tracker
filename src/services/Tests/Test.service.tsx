import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

export const serviceFetchAllTests = async (access_token?: string) => {
  const res = await axios.get(`${baseURL}/v1/tests`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceCreateTest = async (data: any, access_token?: string) => {
  const res = await axios.post(`${baseURL}/v1/tests/create`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceFetchTestDetails = async (
  test_id?: string,
  access_token?: string
) => {
  const res = await axios.get(`${baseURL}/v1/tests/show/${test_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceUpdateTestDetails = async (
  data: any,
  test_id?: string,
  access_token?: string
) => {
  const res = await axios.put(`${baseURL}/v1/tests/update/${test_id}`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceDeleteTestDetails = async (
  test_id?: string,
  access_token?: string
) => {
  const res = await axios.delete(`${baseURL}/v1/tests/delete/${test_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};
