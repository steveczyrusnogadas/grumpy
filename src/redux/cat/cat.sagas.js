import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";

import {
  fetchCatsSuccess,
  fetchCatsFailure,
  loadMoreCatsFailure,
  loadMoreCatsSuccess,
  fetchCatSuccess,
  fetchCatFailure,
} from "./cat.actions";

import CatActionTypes from "./cat.types";

import { getCat, getCats } from "../../api/api";

export function* fetchCatsAsync(action) {
  try {
    const cats = yield call(getCats, action.payload);
    yield put(fetchCatsSuccess(cats));
  } catch (error) {
    yield put(fetchCatsFailure(error.message));
  }
}

export function* loadMoreCatsAsync(action) {
  try {
    const cats = yield call(getCats, action.payload);
    yield put(loadMoreCatsSuccess(cats));
  } catch (error) {
    yield put(loadMoreCatsFailure(error.message));
  }
}

export function* fetchCatAsync(action) {
  try {
    const cat = yield call(getCat, action.payload);
    yield put(fetchCatSuccess(cat));
  } catch (error) {
    yield put(fetchCatFailure(error.message));
  }
}

export function* fetchCatsStart() {
  yield takeLatest(CatActionTypes.FETCH_CATS_START, fetchCatsAsync);
}

export function* loadMoreCatsStart() {
  yield takeEvery(CatActionTypes.LOAD_MORE_CATS_START, loadMoreCatsAsync);
}

export function* fetchCatStart() {
  yield takeLatest(CatActionTypes.FETCH_CAT_START, fetchCatAsync);
}

export function* catSagas() {
  yield all([
    call(fetchCatsStart),
    call(loadMoreCatsStart),
    call(fetchCatStart),
  ]);
}
