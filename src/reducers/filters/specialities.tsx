import { createRegexSearch } from '@util';
import {
  SELECT_SPECIALITIES,
  SEARCH_SPECIALITIES,
  RESET_SPECIALITIES,
} from '../../constants/ActionFilter';
import {
  RECEIVE_CONTENT,
  FILTER_CONTENT,
} from '../../constants/ActionContent';

const specialitiesNameMap = new Map<string, ISpecialitity>();
const specialitiesIdMap = new Map<number, ISpecialitity>();

interface ISpecialitity {
  id: number;
  name: string;
  count: number;
}

interface IStateSpecialities {
  specialitiesAll: ISpecialitity[];
  specialities: ISpecialitity[];
  searchText: string;
  selected: number[];
  applied: number[];
  valueText: string;
}

const initialStateSpecialities: IStateSpecialities = {
  specialitiesAll: [],
  specialities: [],
  searchText: '',
  selected: [],
  applied: [],
  valueText: '',
};

const getNameById = (id: number) => {
  const speciality = specialitiesIdMap.get(id);

  if (speciality) {
    return speciality.name;
  }

  return null;
};

export const getIdByName = (name: string) => {
  const speciality = specialitiesNameMap.get(name);

  if (speciality) {
    return speciality.id;
  }

  return null;
};

export const filterBySpecialities = (state = initialStateSpecialities, action) => {
  switch (action.type) {
    case RECEIVE_CONTENT:
      let specialityId: number = 0;
      specialitiesNameMap.clear();
      specialitiesIdMap.clear();

      action.doctors.forEach((doctor) => {
        let speciality = specialitiesNameMap.get(doctor.speciality);

        if (speciality) {
          ++speciality.count;
        } else {
          speciality = {
            id: ++specialityId,
            name: doctor.speciality,
            count: 1,
          };

          specialitiesNameMap.set(doctor.speciality, speciality);
          specialitiesIdMap.set(speciality.id, speciality);
        }
      });

      const specialitiesAll: ISpecialitity[] = [...specialitiesNameMap.values()];
      return {
        ...state,
        specialitiesAll,
        specialities: [...specialitiesAll],
      };
    case SELECT_SPECIALITIES:
      let selected;

      if (action.checked) {
        selected = [...state.selected, action.id];
      } else {
        selected = state.selected.filter((id) => id !== action.id);
      }

      return {
        ...state,
        selected,
      };
    case FILTER_CONTENT:
      const { specialities } = action;
      if (specialities !== null) {
        return {
          ...state,
          selected: specialities.length === 0 ? [] : state.selected,
          applied: specialities,
          valueText: specialities.length === 1 ? getNameById(specialities[0]) : '',
        };
      }

      return state;
    case SEARCH_SPECIALITIES:
      const reg = createRegexSearch(action.str);

      return {
        ...state,
        specialities: state.specialitiesAll.filter((speciality) => reg.test(speciality.name)),
        searchText: action.str,
      };
    case RESET_SPECIALITIES:
      return {
        ...state,
        selected: [...state.applied],
        specialities: state.specialitiesAll,
        searchText: '',
      };
    default:
      return state;
  }
};
