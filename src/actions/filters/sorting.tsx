import { applyFilter } from '../content';

export const selectSort = (ids: number[]) => (
  async (dispatch, getState) => {
    dispatch(applyFilter(getState(), { sort: ids }));
  }
);
