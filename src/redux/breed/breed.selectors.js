import { createSelector } from "reselect";

const selectBreed = (state) => state.breed;

export const selectBreeds = createSelector(
  [selectBreed],
  (breed) => breed.breeds
);

export const selectCurrentBreed = createSelector(
  [selectBreed],
  (breed) => breed.currentBreed
);
