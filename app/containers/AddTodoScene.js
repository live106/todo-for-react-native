import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { themable } from '../themes';
import { addTodo } from '../actions';
import AddTodo from '../components/AddTodo';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.cancel = this.backToList.bind(this);
    this.save = this.save.bind(this);
  }

  backToList() {
    this.props.navigation.navigate('Tasks');
  }

  save(text) {
    this.props.saveTodo(text);
    this.backToList();
  }

  render() {
    const {
      style,
    } = this.props;

    return (
      <View style={style}>
        <ScrollView horizontal={false}>
          <AddTodo saveTodo={this.save} onFinish={this.done} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveTodo: (title) => {
      dispatch(addTodo(title));
    }
  };
};

const NewTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodo);

const ThemableAddTodo = themable(NewTodoContainer, (theme) => {
  const {styles, variables} = theme;
  return {
    style: styles.container,
  };
});

ThemableAddTodo.navigationOptions = ({ navigation }) => {
  return {
    title: '新建任务',
    // headerRight: <Button title="Done" onPress={ () => navigation.navigate('Tasks') } />,
  };
};

export default ThemableAddTodo;
