import {
  SELECT_SPECIALITIES,
  SEARCH_SPECIALITIES,
  RESET_SPECIALITIES,
} from '../../constants/ActionFilter';
import { applyFilter } from '../content';

export const selectSpecialities = (id: number, checked: boolean) => (
  async (dispatch) => {
    dispatch({ type: SELECT_SPECIALITIES, id, checked });
  }
);

export const applySpecialities = (ids: number[]) => (
  async (dispatch, getState) => {
    dispatch(applyFilter(getState(), { specialities: ids }));
  }
);

export const searchSpecialities = (str: string) => (
  async (dispatch) => {
    dispatch({ type: SEARCH_SPECIALITIES, str });
  }
);

export const resetForm = () => (
  async (dispatch) => {
    dispatch({ type: RESET_SPECIALITIES });
  }
);
