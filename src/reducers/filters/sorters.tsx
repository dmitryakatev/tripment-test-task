import {
  FILTER_CONTENT,
} from '../../constants/ActionContent';
import { IDoctor } from '../../api/Content';

interface ISort {
  id: number;
  name: string;
}

interface IStateSorters {
  sorters: ISort[];
  selected: number[];
}

const sorters: ISort[] = [{
  id: 1,
  name: 'Next available',
}, {
  id: 2,
  name: 'Relevance',
}, {
  id: 3,
  name: 'Nearest',
}, {
  id: 4,
  name: 'Most Experienced',
}];

type AccessorFn = (doctor: IDoctor) => any;
export const sortAccessor = new Map<number, AccessorFn>([
  [1, (doctor: IDoctor) => doctor.telehealth],
  [2, (doctor: IDoctor) => doctor.reviewsCount, // ???
  ],
  [3, (doctor: IDoctor) => doctor.id, // ???
  ],
  [4, (doctor: IDoctor) => doctor.experience],
]);

const initialStateSorters: IStateSorters = {
  sorters,
  selected: [],
};

export const useSorters = (state = initialStateSorters, action) => {
  switch (action.type) {
    case FILTER_CONTENT:
      const { sort } = action;
      if (sort !== null) {
        return {
          ...state,
          selected: sort,
        };
      }

      return state;
    default:
      return state;
  }
};

const defaultAccessor = () => 0;
export const getAccessorById = (id: number) => sortAccessor.get(id) || defaultAccessor;
