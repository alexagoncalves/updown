
import { combineReducers } from 'redux';

import todoReducer from './todo';
import expensesReducer from './expenses';

const rootReducer = combineReducers({
  todo: todoReducer,
  expenses: expensesReducer
});

export default rootReducer;