import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {horizontalScale} from '../../assets/styles/scale';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <View style={[styles.badge, badgeWidth]}>
      <Text
        onTextLayout={event => setWidth(event.nativeEvent.lines[0].width)}
        ref={textRef}
        style={[styles.title]}>
        {props.title}
      </Text>
    </View>
  );
};
Badge.default = {
  title: '',
};
Badge.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Badge;
