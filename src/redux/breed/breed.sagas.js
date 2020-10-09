import { takeLatest, call, put, all } from "redux-saga/effects";

import { fetchBreedsSuccess, fetchBreedsFailure } from "./breed.actions";

import BreedActionTypes from "./breed.types";

import { getBreeds } from "../../api/api";

export function* fetchBreedsAsync() {
  try {
    const breeds = yield call(getBreeds);
    yield put(fetchBreedsSuccess(breeds));
  } catch (error) {
    yield put(fetchBreedsFailure(error.message));
  }
}

export function* fetchBreedsStart() {
  yield takeLatest(BreedActionTypes.FETCH_BREEDS_START, fetchBreedsAsync);
}

export function* breedSagas() {
  yield all([call(fetchBreedsStart)]);
}
