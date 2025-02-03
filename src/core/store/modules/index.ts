import { combineReducers } from 'redux';

import incidents from './incidents/slice';
import modals from './modals/slice';
import notifications from './notifications/slice';
import table from './table/slice';
import users from './users/slice';
import violators from './violators/slice';

export default combineReducers({
  incidents,
  modals,
  notifications,
  violators,
  users,
  table,
});
