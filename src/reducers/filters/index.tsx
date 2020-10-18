import { combineReducers } from 'redux';

import { filterByAvailabilities } from './availabilities';
import { filterBySpecialities } from './specialities';
import { filterByInsurances } from './insurances';
import { useSorters } from './sorters';

export const filters = combineReducers({
  filterByAvailabilities,
  filterBySpecialities,
  filterByInsurances,
  useSorters,
});
