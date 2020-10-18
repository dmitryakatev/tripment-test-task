import {
  RECEIVE_CONTENT,
  FILTER_CONTENT,
} from '../constants/ActionContent';
import { IDoctor } from '../api/Content';

interface IStateDoctors {
  errorText: string;
  doctorsAll: IDoctor[];
  doctors: IDoctor[];
}

const initialState: IStateDoctors = {
  errorText: '',
  doctorsAll: [],
  doctors: [],
};

export const content = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CONTENT:
      return {
        ...state,
        errorText: action.errorText,
        doctorsAll: action.doctors,
        doctors: action.doctors,
      };
    case FILTER_CONTENT:
      return {
        ...state,
        doctors: action.doctors,
      };
    default:
      return state;
  }
};
