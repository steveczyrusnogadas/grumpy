import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import breedReducer from "./breed/breed.reducer";
import catReducer from "./cat/cat.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["breed", "cat"],
};

const rootReducer = combineReducers({
  breed: breedReducer,
  cat: catReducer,
});

export default persistReducer(persistConfig, rootReducer);
