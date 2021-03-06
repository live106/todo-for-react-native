import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableHighlight
} from 'react-native';
import { themable } from '../themes';

const Button = (props) => {
  const {
    style,
    underlayColor,
    btnTextStyle,
    disabledStyle,
    disabled,
    children,
    onPress
  } = props;

  const btnStyles = [style];
  if (disabled) btnStyles.push(disabledStyle);

  return (
    <TouchableHighlight
      onPress={ onPress }
      style={ btnStyles }
      underlayColor={ underlayColor }
      activeOpacity={1}>
      <Text style={ btnTextStyle }>{ children }</Text>
    </TouchableHighlight>
  );
};

const ThemableButton = themable(Button, (theme) => {
  const { styles, variables } = theme;
  return {
    style: styles.button,
    btnTextStyle: styles.buttonText,
    underlayColor: variables.colorMain,
    disabledStyle: styles.buttonDisabled
  };
});

ThemableButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default ThemableButton;
