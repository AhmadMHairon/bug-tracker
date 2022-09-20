import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

export const serviceFetchAllScenarios = async (access_token?: string) => {
  const res = await axios.get(`${baseURL}/v1/scenarios`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceCreateScenario = async (
  data: {
    name: string;
    description: string;
  },
  id?: string,
  access_token?: string
) => {
  const res = await axios.post(`${baseURL}/v1/scenarios/create/${id}`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceFetchScenarioDetails = async (
  access_token?: string,
  scenario_id?: string
) => {
  const res = await axios.get(`${baseURL}/v1/scenarios/show/${scenario_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const serviceUpdateScenarioDetails = async (
  data: any,
  access_token?: string,
  scenario_id?: string
) => {
  const res = await axios.put(
    `${baseURL}/v1/scenarios/update/${scenario_id}`,
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

export const serviceDeleteScenarioDetails = async (
  access_token?: string,
  scenario_id?: string
) => {
  const res = await axios.delete(
    `${baseURL}/v1/scenarios/delete/${scenario_id}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
  return res.data.data;
};
