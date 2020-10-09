import BreedActionTypes from "./breed.types";

export const fetchBreedsStart = () => ({
  type: BreedActionTypes.FETCH_BREEDS_START,
});

export const fetchBreedsSuccess = (breeds) => ({
  type: BreedActionTypes.FETCH_BREEDS_SUCCESS,
  payload: breeds,
});

export const fetchBreedsFailure = (errorMessage) => ({
  type: BreedActionTypes.FETCH_BREEDS_FAILURE,
  payload: errorMessage,
});

export const setCurrentBreed = (breed) => ({
  type: BreedActionTypes.SET_CURRENT_BREED,
  payload: breed,
});
