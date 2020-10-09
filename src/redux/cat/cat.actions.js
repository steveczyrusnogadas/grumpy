import CatActionTypes from "./cat.types";

export const fetchCatsStart = ({ breedId, page }) => ({
  type: CatActionTypes.FETCH_CATS_START,
  payload: { breedId, page },
});

export const fetchCatsSuccess = (cats) => ({
  type: CatActionTypes.FETCH_CATS_SUCCESS,
  payload: cats,
});

export const fetchCatsFailure = (errorMessage) => ({
  type: CatActionTypes.FETCH_CATS_FAILURE,
  payload: errorMessage,
});

export const loadMoreCatsStart = ({ breedId, page }) => ({
  type: CatActionTypes.LOAD_MORE_CATS_START,
  payload: { breedId, page },
});

export const loadMoreCatsSuccess = (cats) => ({
  type: CatActionTypes.LOAD_MORE_CATS_SUCCESS,
  payload: cats,
});

export const loadMoreCatsFailure = (errorMessage) => ({
  type: CatActionTypes.LOAD_MORE_CATS_FAILURE,
  payload: errorMessage,
});

export const fetchCatStart = (catId) => ({
  type: CatActionTypes.FETCH_CAT_START,
  payload: catId,
});

export const fetchCatSuccess = (cat) => ({
  type: CatActionTypes.FETCH_CAT_SUCCESS,
  payload: cat,
});

export const fetchCatFailure = (errorMessage) => ({
  type: CatActionTypes.FETCH_CAT_FAILURE,
  payload: errorMessage,
});

export const clearCats = () => ({
  type: CatActionTypes.CLEAR_CATS,
});
