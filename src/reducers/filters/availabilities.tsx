import {
  RECEIVE_CONTENT,
  FILTER_CONTENT,
} from '../../constants/ActionContent';
import { IDoctor } from '../../api/Content';

interface IAvailability {
  id: number;
  name: string;
  key: string;
  count: number;
}

interface IStateAvailabilities {
  availabilities: Array<IAvailability | null>;
  selected: {
    today: boolean;
    next3Days: boolean;
    next2Weeks: boolean;
    telehealth: boolean;
    newPatients: boolean;
    schedulesOnline: boolean;
    treatsChildren: boolean;
  };
}

const availabilities: Array<IAvailability | null> = [{
  id: 1,
  name: 'Today',
  key: 'today',
  count: 0,
}, {
  id: 2,
  name: 'Next 3 days',
  key: 'next3Days',
  count: 0,
}, {
  id: 3,
  name: 'Next 2 weeks',
  key: 'next2Weeks',
  count: 0,
}, null, {
  id: 4,
  name: 'Telehealth',
  key: 'telehealth',
  count: 0,
}, {
  id: 5,
  name: 'Accepts new patients',
  key: 'newPatients',
  count: 0,
}, {
  id: 6,
  name: 'Schedules online',
  key: 'schedulesOnline',
  count: 0,
}, {
  id: 7,
  name: 'Treats сhildren',
  key: 'treatsChildren',
  count: 0,
}];

type FilterCreatorFn = () => (doctor: IDoctor) => boolean;
export const filterCreator = new Map<string, FilterCreatorFn>([
  ['today', () => {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return (doctor: IDoctor) => doctor.offlineAvailable >= date;
  }],
  ['next3Days', () => {
    const date = new Date();
    date.setDate(date.getDate() - 3);

    return (doctor: IDoctor) => doctor.offlineAvailable >= date;
  }],
  ['next2Weeks', () => {
    const date = new Date();
    date.setDate(date.getDate() - 14);

    return (doctor: IDoctor) => doctor.offlineAvailable >= date;
  }],
  ['telehealth', () => (doctor: IDoctor) => doctor.telehealth],
  ['newPatients', () => (doctor: IDoctor) => doctor.acceptNew],
  ['schedulesOnline', () => () => true], // ???
  ['treatsChildren', () => () => true], // ???
]);

const defaultFilter = () => true;
export const getFilterByKey = (key: string) => {
  const creator = filterCreator.get(key);
  return creator ? creator() : defaultFilter;
};

const initialStateAvailabilities: IStateAvailabilities = {
  availabilities,
  selected: {
    today: false,
    next3Days: false,
    next2Weeks: false,
    telehealth: false,
    newPatients: false,
    schedulesOnline: false,
    treatsChildren: false,
  },
};

export const filterByAvailabilities = (state = initialStateAvailabilities, action) => {
  switch (action.type) {
    case RECEIVE_CONTENT:
      const newAvailabilities = state.availabilities.map((availability) => {
        if (availability === null) {
          return null;
        }

        const filter = getFilterByKey(availability.key);
        const doctors = action.doctors.filter((doctor) => filter(doctor));

        return { ...availability, count: doctors.length };
      });

      return {
        ...state,
        availabilities: newAvailabilities,
      };
    case FILTER_CONTENT:
      const { availabilities: selected } = action;
      if (selected !== null) {
        return {
          ...state,
          selected,
        };
      }

      return state;
    default:
      return state;
  }
};
