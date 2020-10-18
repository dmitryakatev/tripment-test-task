import { combineReducers } from 'redux';

import { content } from './content';
import { filters } from './filters';

export const reducer = combineReducers({
  content,
  filters,
});
