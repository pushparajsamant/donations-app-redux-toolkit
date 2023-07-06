import {StyleSheet} from 'react-native';
import {fontScale} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontSize: fontScale(24),
    fontWeight: '600',
    lineHeight: fontScale(27),
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: fontScale(18),
    fontWeight: '600',
    lineHeight: fontScale(22),
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: fontScale(16),
    fontWeight: '600',
    lineHeight: fontScale(20),
  },
});

export default styles;
