import axios from "axios";

export const getBreeds = async () => {
  return axios
    .get(`https://api.thecatapi.com/v1/breeds`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    })
    .then((response) => response.data);
};

export const getCats = async ({ breedId, page = 1 }) => {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?page=${page}&limit=10&breed_id=${breedId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_CAT_API_KEY,
        },
      }
    )
    .then((response) => response.data);
};

export const getCat = async (catId) => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/${catId}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    })
    .then((response) => response.data);
};
