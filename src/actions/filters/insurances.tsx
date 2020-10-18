import {
  SELECT_INSURANCES,
  SEARCH_INSURANCES,
  RESET_INSURANCES,
  OTHER_PAYMENT,
} from '../../constants/ActionFilter';
import { applyFilter } from '../content';

export const setOtherPayment = (checked: boolean) => (
  async (dispatch) => {
    dispatch({ type: OTHER_PAYMENT, checked });
  }
);

export const selectInsurances = (id: number, checked: boolean) => (
  async (dispatch) => {
    dispatch({ type: SELECT_INSURANCES, id, checked });
  }
);

export const applyInsurances = (ids: number[]) => (
  async (dispatch, getState) => {
    dispatch(applyFilter(getState(), { insurances: ids }));
  }
);

export const searchInsurances = (str: string) => (
  async (dispatch) => {
    dispatch({ type: SEARCH_INSURANCES, str });
  }
);

export const resetForm = () => (
  async (dispatch) => {
    dispatch({ type: RESET_INSURANCES });
  }
);
