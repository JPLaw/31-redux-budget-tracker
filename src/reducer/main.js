import { combineReducers } from 'redux';
import sections from './section';
import expenses from './expense';

// this combineReducers method defines the shape of our store
export default combineReducers({
  sections,
  expenses,
});
