import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      onPress={props.callback}
      style={[styles.styleButton, props.isDisabled && styles.disabled]}>
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};
Button.default = {
  title: '',
  isDisabled: false,
  callback: () => {},
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  callback: PropTypes.func,
};
export default Button;
