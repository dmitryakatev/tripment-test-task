import { api } from '@api';
import {
  RECEIVE_CONTENT,
  FILTER_CONTENT,
} from '../constants/ActionContent';

import { IDoctor } from '../api/Content';
import { getFilterByKey } from '../reducers/filters/availabilities';
import { getIdByName as getSpecialityId } from '../reducers/filters/specialities';
import { getIdByName as getInsurancesId } from '../reducers/filters/insurances';
import { getAccessorById } from '../reducers/filters/sorters';

export const getContent = () => (
  async (dispatch) => {
    const [errorText, doctors] = await api.content.getDoctors();
    dispatch({ type: RECEIVE_CONTENT, doctors, errorText });
  }
);

export const resetAllFilters = () => (
  (dispatch, getState) => {
    dispatch(applyFilter(getState(), {
      availabilities: [],
      specialities: [],
      insurances: [],
    }));
  }
);


type Filter = (doctor: IDoctor) => boolean;

export const applyFilter = (state, applied) => {
  const {
    filterByAvailabilities,
    filterBySpecialities,
    filterByInsurances,
    useSorters,
  } = state.filters;

  const availabilities = applied.availabilities || filterByAvailabilities.selected;
  const specialities = applied.specialities || filterBySpecialities.applied;
  const insurances = applied.insurances || filterByInsurances.applied;
  const sort = applied.sort || useSorters.selected;

  const filters: Filter[] = [];

  Object.entries(availabilities).forEach(([key, checked]) => {
    if (checked) {
      const filter = getFilterByKey(key);
      filters.push(filter);
    }
  });

  if (specialities.length > 0) {
    filters.push((doctor) => (
      specialities.indexOf(getSpecialityId(doctor.speciality)) !== -1
    ));
  }

  if (insurances.length > 0) {
    filters.push((doctor) => (
      insurances.indexOf(getInsurancesId(doctor.insurances)) !== -1
    ));
  }

  let doctors: IDoctor[];
  if (filters.length === 0) {
    doctors = [...state.content.doctorsAll];
  } else {
    doctors = state.content.doctorsAll.filter((doctor) => (
      filters.every((filter) => filter(doctor))
    ));
  }

  const accessor = getAccessorById(sort[0]);
  doctors = doctors.sort((d1, d2) => {
    const v1 = accessor(d1);
    const v2 = accessor(d2);

    if (v1 > v2) {
      return 1;
    }
    if (v1 < v2) {
      return -1;
    }

    return 0;
  });

  return {
    type: FILTER_CONTENT,
    availabilities: applied.availabilities || null,
    specialities: applied.specialities || null,
    insurances: applied.insurances || null,
    sort,
    doctors,
  }
};
