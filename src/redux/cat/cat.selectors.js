import { createSelector } from "reselect";

const selectCat = (state) => state.cat;

export const selectCats = createSelector([selectCat], (cat) => cat.cats);

export const selectCurrentCat = createSelector([selectCat], (cat) => cat.cat);

export const selectCurrentPage = createSelector(
  [selectCat],
  (cat) => cat.currentPage
);

export const selectIsCatsFetching = createSelector(
  [selectCat],
  (cat) => cat.isFetching
);

export const selectHideLoadMore = createSelector(
  [selectCat],
  (cat) => cat.hideLoadMore
);
