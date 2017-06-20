import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoReducers from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

const store = createStore(todoReducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
