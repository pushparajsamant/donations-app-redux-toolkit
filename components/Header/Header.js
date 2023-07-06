import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = props => {
  const styleToApply = () => {
    switch (props.types) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  };
  return (
    <View>
      <Text style={[styleToApply(), {color: props.color}]}>{props.title}</Text>
    </View>
  );
};
Header.default = {
  title: '',
  types: 1,
  color: '#000000',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  types: PropTypes.number,
  color: PropTypes.string,
};
export default Header;
