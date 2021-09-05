import axios from "axios";

const URL_END_POINT = "https://jsonplaceholder.typicode.com/photos";

const api = axios.create({
   baseURL: URL_END_POINT,
});

export const photoApi = {
   getList: () => api.get(""),
};
