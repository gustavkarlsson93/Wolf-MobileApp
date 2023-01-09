import axios, { AxiosResponse } from "axios";
import { ClubsResponse } from "../models/clubs/ClubsResponse";

axios.defaults.baseURL = "http://localhost:5202/api/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string, params?: URLSearchParams) =>
    axios.get<T>(url, { params }).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Club = {
  All: (params?: URLSearchParams) =>
    requests.get<ClubsResponse>("/GetAllClubs", params),
};

const agent = {
  Club,
};

export default agent;
