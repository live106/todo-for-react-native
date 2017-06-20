import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialNavState = {
    index: 0,
    routes: [
        { key: 'Tasks', routeName: 'Tasks' },
    ],
};

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Add':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Add' }),
        state
      );
      break;
    case 'Tasks':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Tasks' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default navReducer;
