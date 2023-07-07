import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {horizontalScale} from '../../assets/styles/scale';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      disabled={props.isDisabled}
      onPress={props.callback}
      style={[styles.tab, props.isInactive && styles.inactiveTab, tabWidth]}>
      <Text
        onTextLayout={event => setWidth(event.nativeEvent.lines[0].width)}
        ref={textRef}
        style={[styles.title, props.isInactive && styles.inActiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
Tab.default = {
  title: 'abc',
  isInactive: false,
  callback: () => {},
};
Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  callback: PropTypes.func,
};
export default Tab;
