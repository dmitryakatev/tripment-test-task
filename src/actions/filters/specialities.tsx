import {
  SELECT_SPECIALITIES,
  SEARCH_SPECIALITIES,
  RESET_SPECIALITIES,
} from '../../constants/ActionFilter';
import { applyFilter } from '../content';

export const selectSpecialities = (id: number, checked: boolean) => ({
  type: SELECT_SPECIALITIES,
  id,
  checked,
});

export const applySpecialities = (ids: number[]) => (
  (dispatch, getState) => {
    dispatch(applyFilter(getState(), { specialities: ids }));
  }
);

export const searchSpecialities = (str: string) => ({
  type: SEARCH_SPECIALITIES,
  str,
});

export const resetForm = () => ({
  type: RESET_SPECIALITIES,
});
