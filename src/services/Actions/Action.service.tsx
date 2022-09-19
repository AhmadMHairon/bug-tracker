import axios from "axios";
import { baseURL } from "../../components/utils/baseURL";

export const serviceFetchAllActions = async (access_token?: string) => {
    const res = await axios.get(`${baseURL}/v1/scenarios`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
    return res.data;
};

export const serviceCreateAction = async (
    data: {
        name: string;
        description: string;
    },
    scenario_id?: string,
    access_token?: string
) => {
    const res = await axios.post(`${baseURL}/v1/actions/create/${scenario_id}`, data,{
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
    return res.data;
}

export const serviceFetchActionDetails = async (access_token?: string, action_id?: string) => {
    const res = await axios.get(`${baseURL}/v1/actions/show/${action_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
    return res.data;
}

export const serviceUpdateActionDetails = async (data : any , access_token?: string, action_id?: string) => {
    const res = await axios.put(`${baseURL}/v1/actions/update/${action_id}`, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
    return res.data;
}

export const serviceDeleteActionDetails = async ( access_token?: string, action_id?: string) => {
    const res = await axios.delete(`${baseURL}/v1/actions/delete/${action_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
    return res.data;
}