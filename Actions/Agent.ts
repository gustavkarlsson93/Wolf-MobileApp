import axios, { AxiosResponse } from "Axios";

axios.defaults.baseURL = "https://localhost:7288";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const Club = {
  list: () => requests.get("GetAllClubs"),
};

const agent = {
  Club,
};

export default agent;
