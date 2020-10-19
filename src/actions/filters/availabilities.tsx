import { applyFilter } from '../content';

export const selectAvailability = (key: string, checked: boolean) => (
  (dispatch, getState) => {
    const state = getState();
    const { selected } = state.filters.filterByAvailabilities;
    const newSelected = { ...selected };
    const group = ['today', 'next3Days', 'next2Weeks'];

    if (checked && group.indexOf(key) !== -1) {
      group.forEach((groupItem) => {
        newSelected[groupItem] = false;
      });
    }

    newSelected[key] = checked;

    dispatch(applyFilter(state, { availabilities: newSelected }));
  }
);
