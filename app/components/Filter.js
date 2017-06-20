import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import { themable } from '../themes';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress(!this.props.activeOnly);
  }

  render() {
    const {style, textStyle, activeOnly} = this.props;
    const text = activeOnly ? '显示全部' : '显示未完成';

    return (
      <TouchableHighlight
        sytle={style}
        onPress={this.onPress}
        underlayColor='rgba(255, 255, 255, 0.5)'
        activeOpacity={1}>
        <Text style={textStyle}>{text}</Text>
      </TouchableHighlight>
    );
  }
}


const ThemableFilter = themable(Filter, (theme) => {
  const { styles } = theme;
  return {
    style: styles.filterItem,
    textStyle: styles.filterTextStyle,
  };
});

ThemableFilter.protoTypes = {
  onPress: PropTypes.func.isRequired,
  activeOnly: PropTypes.bool.isRequired
};

export default ThemableFilter;
