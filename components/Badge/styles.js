import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(30),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: fontScale(10),
    lineHeight: fontScale(12),
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default styles;
