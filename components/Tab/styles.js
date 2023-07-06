import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: fontScale(14),
    lineHeight: fontScale(16),
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '500',
  },
  inActiveTitle: {
    color: '#79869F',
  },
});

export default styles;
