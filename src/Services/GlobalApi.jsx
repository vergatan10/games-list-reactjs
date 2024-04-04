import axios from "axios";
const key = import.meta.env.VITE_APIKEY;
const axiosCreate = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

const getGenreList = axiosCreate.get(`/genres?key=${key}`);
const getAllGames = axiosCreate.get(`/games?key=${key}`);
const getGameListByGenreId = (id) =>
  axiosCreate.get(`/games?key=${key}&genres=${id}`);
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
