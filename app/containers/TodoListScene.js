import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Button,
} from 'react-native';

import { connect } from 'react-redux';
import { themable } from '../themes';
import { toggleTodo, setVisibilityFilter } from '../actions';
import Todos from '../components/Todos';
import Filter from '../components/Filter';
import NewTodo from './AddTodoScene';

class TodoListScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      todos,
      style,
      onFilterPress,
      onTodoPress,
      activeOnly,
      onAddNewTodo
    } = this.props;

    return (
      <View style={ style }>
        <ScrollView horizonal={false}>
          <Todos todos={todos} onTodoPress={onTodoPress}/>
        </ScrollView>
        <Filter activeOnly={activeOnly} onPress={onFilterPress} />
      </View>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    activeOnly: state.visibilityFilter === 'SHOW_ACTIVE'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoPress: (id) => {
      dispatch(toggleTodo(id));
    },
    onFilterPress: (activeOnly) => {
      const filter = activeOnly ? 'SHOW_ACTIVE' : 'SHOW_ALL';
      dispatch(setVisibilityFilter(filter));
    }
  };
};

const TodoListSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListScene);

const ThemableTodoListScene = themable(TodoListSceneContainer, (theme) => {
  const {styles, variables} = theme;
  return {
    style: styles.container,
    filterStyle: styles.filterItem,
    filterTextStyle: styles.filterTextStyle
  };
});

ThemableTodoListScene.navigationOptions = ({ navigation }) => {
  return {
    title: '任务列表',
    headerRight: <Button title="新建" onPress={ () => navigation.navigate('Add') } />,
    headerLeft: [],
  };
};

export default ThemableTodoListScene;
