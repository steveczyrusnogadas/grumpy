import BreedActionTypes from "./breed.types";

const INITIAL_STATE = {
  isFetching: false,
  breeds: [],
  currentBreed: null,
  errorMessage: undefined,
};

const breedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BreedActionTypes.FETCH_BREEDS_START:
      return {
        ...state,
        isFetching: true,
      };
    case BreedActionTypes.FETCH_BREEDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        breeds: action.payload,
      };
    case BreedActionTypes.FETCH_BREEDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case BreedActionTypes.SET_CURRENT_BREED:
      return {
        ...state,
        currentBreed: action.payload,
      };
    default:
      return state;
  }
};

export default breedReducer;
