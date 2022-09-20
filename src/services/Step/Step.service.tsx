import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

export const serviceFetchAllSteps = async (access_token?: string) => {
  const res = await axios.get(`${baseURL}/v1/steps`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceCreateStep = async (
  data: any,
  action_id: string,
  access_token?: string
) => {
  const res = await axios.post(
    `${baseURL}/v1/steps/create/${action_id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
  return res.data.data;
};

export const serviceFetchStepDetails = async (
  step_id?: string,
  access_token?: string
) => {
  const res = await axios.get(`${baseURL}/v1/steps/show/${step_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceUpdateStepDetails = async (
  data: any,
  step_id?: string,
  access_token?: string
) => {
  const res = await axios.put(`${baseURL}/v1/steps/update/${step_id}`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceDeleteStepDetails = async (
  step_id?: string,
  access_token?: string
) => {
  const res = await axios.delete(`${baseURL}/v1/steps/delete/${step_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};
