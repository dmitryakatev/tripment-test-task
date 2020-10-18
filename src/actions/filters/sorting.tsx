import { applyFilter } from '../content';

export const selectSort = (ids: number[]) => (
  (dispatch, getState) => {
    dispatch(applyFilter(getState(), { sort: ids }));
  }
);
