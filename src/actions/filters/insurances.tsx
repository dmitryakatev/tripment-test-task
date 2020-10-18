import {
  SELECT_INSURANCES,
  SEARCH_INSURANCES,
  RESET_INSURANCES,
  OTHER_PAYMENT,
} from '../../constants/ActionFilter';
import { applyFilter } from '../content';

export const setOtherPayment = (checked: boolean) => ({
  type: OTHER_PAYMENT,
  checked,
});

export const selectInsurances = (id: number, checked: boolean) => ({
  type: SELECT_INSURANCES,
  id,
  checked,
});

export const applyInsurances = (ids: number[]) => (
  (dispatch, getState) => {
    dispatch(applyFilter(getState(), { insurances: ids }));
  }
);

export const searchInsurances = (str: string) => ({
  type: SEARCH_INSURANCES,
  str,
});

export const resetForm = () => ({
  type: RESET_INSURANCES,
});
