import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import { themable } from '../themes';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {todo, onTodoPress} = this.props;
    onTodoPress(todo.id);
  }

  renderButton() {
    const {activeTaskIconStyle, completeTaskIconStyle} = this.props;
    if (this.props.todo.completed) {
      return <Icon name="check-circle" style={ completeTaskIconStyle } />;
    } else {
      return <Icon name="circle-o" style={ activeTaskIconStyle } />;
    }
  }

  render() {
    const {todo, style, completeTaskColStyle, detailStyle, timestampStyle, titleStyle} = this.props;
    const {title, createdAt, completedAt} = todo;
    return (
      <View style={ style }>
        <TouchableHighlight
          onPress={ this.onPress }
          activeOpacity={75 / 100}
          style={completeTaskColStyle}
          >
          { this.renderButton() }
        </TouchableHighlight>
        <View style={ detailStyle }>
          <Text style={ titleStyle }>{ title }</Text>
          <Text style={ timestampStyle }>创建于： { createdAt.toGMTString() }</Text>
          { completedAt && <Text style={ timestampStyle }>完成于： { completedAt.toGMTString() }</Text> }
        </View>
      </View>
    );
  }
}

const ThemeableTodo = themable(Todo, (theme) => {
  const { styles } = theme;
  return {
    style: styles.todoItem,
    completeTaskColStyle: styles.todoItemCompleteTask,
    completeTaskIconStyle: styles.todoItemCompleteTaskIcon,
    activeTaskIconStyle: styles.todoItemActiveTaskIcon,
    detailStyle: styles.todoItemDetails,
    timestampStyle: styles.todoItemTimeStamp,
    titleStyle: styles.todoItemTitle,
  };
});

ThemeableTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoPress: PropTypes.func.isRequired
};

export default ThemeableTodo;
