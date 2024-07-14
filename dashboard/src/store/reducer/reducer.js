import { combineReducers } from 'redux';
import { dashboardReducer } from './dashboardReducer';

const rootReducer = combineReducers({
  dashboarddata: dashboardReducer,
});

export default rootReducer;