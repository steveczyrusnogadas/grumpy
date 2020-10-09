import { all, call } from "redux-saga/effects";

import { breedSagas } from "./breed/breed.sagas";
import { catSagas } from "./cat/cat.sagas";

export default function* rootSaga() {
  yield all([call(breedSagas), call(catSagas)]);
}
