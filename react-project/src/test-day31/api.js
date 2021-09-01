import axios from "axios";

const END_POINT = "https://yts.mx/api/v2/list_movies.json?sort_by=rating";

export const movieApi = {
   getList: () => axios.get(END_POINT),
};
