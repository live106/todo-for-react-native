import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import theme from './theme';
import nav from './nav';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  theme,
  nav,
});

export default todoApp;
