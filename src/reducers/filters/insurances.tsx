import { createRegexSearch } from '@util';
import {
  OTHER_PAYMENT,
  SELECT_INSURANCES,
  SEARCH_INSURANCES,
  RESET_INSURANCES,
} from '../../constants/ActionFilter';
import {
  RECEIVE_CONTENT,
  FILTER_CONTENT,
} from '../../constants/ActionContent';

const insurancesNameMap = new Map<string, IInsurance>();
const insurancesIdMap = new Map<number, IInsurance>();

interface IInsurance {
  id: number;
  name: string;
  count: number;
}

interface IStateInsurances {
  insurancesAll: IInsurance[];
  insurances: IInsurance[];
  searchText: string;
  selected: number[];
  applied: number[];
  valueText: string;
  otherPayment: boolean;
}

const initialStateInsurances: IStateInsurances = {
  insurancesAll: [],
  insurances: [],
  searchText: '',
  selected: [],
  applied: [],
  valueText: '',
  otherPayment: false,
};

export const filterByInsurances = (state = initialStateInsurances, action) => {
  switch (action.type) {
    case RECEIVE_CONTENT:
      let insuranceId: number = 0;
      insurancesNameMap.clear();
      insurancesIdMap.clear();

      action.doctors.forEach((doctor) => {
        let insurance = insurancesNameMap.get(doctor.insurances);

        if (insurance) {
          ++insurance.count;
        } else {
          insurance = {
            id: ++insuranceId,
            name: doctor.insurances,
            count: 1,
          };

          insurancesNameMap.set(doctor.insurances, insurance);
          insurancesIdMap.set(insurance.id, insurance);
        }
      });

      const insurancesAll: IInsurance[] = [...insurancesNameMap.values()];
      return {
        ...state,
        insurancesAll,
        insurances: [...insurancesAll],
      };
    case SELECT_INSURANCES:
      return {
        ...state,
        selected: action.checked ? (
          [...state.selected, action.id]
        ) : (
          state.selected.filter((id) => id !== action.id)
        ),
      };
    case FILTER_CONTENT:
      const { insurances } = action;
      if (insurances !== null) {
        return {
          ...state,
          selected: insurances.length === 0 ? [] : state.selected,
          applied: insurances,
          valueText: insurances.length === 1 ? getNameById(insurances[0]) : '',
        };
      }

      return state;
    case SEARCH_INSURANCES:
      const reg = createRegexSearch(action.str);

      return {
        ...state,
        insurances: state.insurancesAll.filter((insurance) => reg.test(insurance.name)),
        searchText: action.str,
      };
    case RESET_INSURANCES:
      return {
        ...state,
        selected: [...state.applied],
        insurances: state.insurancesAll,
        searchText: '',
      };
    case OTHER_PAYMENT:
      return {
        ...state,
        otherPayment: action.checked,
      };
    default:
      return state;
  }
};

const getNameById = (id: number) => {
  const insurance = insurancesIdMap.get(id);

  if (insurance) {
    return insurance.name;
  }

  return null;
};

export const getIdByName = (name: string) => {
  const insurance = insurancesNameMap.get(name);

  if (insurance) {
    return insurance.id;
  }

  return null;
};
