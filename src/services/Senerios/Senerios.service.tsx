import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

export const serviceFetchAllScenarios = async (access_token?: string) => {
  try {
    const res = await axios.get(`${baseURL}/v1/scenarios`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const serviceFetchScenarioDetails = async (access_token?: string) => {
  try {
    const res = await axios.get(`${baseURL}/v1/scenarios`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const serviceCreateScenario = async (
  data: {
    name: string;
    description: string;
  },
  id?: string
) => {
  try {
    const res = await axios.post(`${baseURL}/v1/scenarios/create/${id}`, data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
