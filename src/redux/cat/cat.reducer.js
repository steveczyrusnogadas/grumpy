import CatActionTypes from "./cat.types";
import _ from "lodash";

const INITIAL_STATE = {
  isFetching: false,
  cats: [],
  cat: null,
  currentPage: 1,
  hideLoadMore: false,
  errorMessage: undefined,
};

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CatActionTypes.FETCH_CATS_START:
      return {
        ...state,
        isFetching: true,
        currentPage: 1,
        hideLoadMore: false,
      };
    case CatActionTypes.FETCH_CATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cats: [...action.payload],
      };
    case CatActionTypes.FETCH_CATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case CatActionTypes.LOAD_MORE_CATS_START:
      return {
        ...state,
        isFetching: true,
        currentPage: action.payload.page,
      };
    case CatActionTypes.LOAD_MORE_CATS_SUCCESS:
      const cats = _.unionBy(state.cats, action.payload, "id");
      const noNewCats = _.isEqual(state.cats, cats);
      return {
        ...state,
        isFetching: false,
        cats: cats,
        currentPage: state.currentPage,
        hideLoadMore: noNewCats,
      };
    case CatActionTypes.LOAD_MORE_CATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case CatActionTypes.FETCH_CAT_START:
      return {
        ...state,
        isFetching: true,
      };
    case CatActionTypes.FETCH_CAT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cat: action.payload,
      };
    case CatActionTypes.FETCH_CAT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case CatActionTypes.CLEAR_CATS:
      return {
        ...state,
        cats: [],
        hideLoadMore: false,
      };
    default:
      return state;
  }
};

export default catReducer;
