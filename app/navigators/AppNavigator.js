import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import TodoListScene from '../containers/TodoListScene';
import AddTodoScene from '../containers/AddTodoScene';

export const AppNavigator = StackNavigator({
  Tasks: { screen: TodoListScene },
  Add: { screen: AddTodoScene },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AppWithNavigationState);
