import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  searchViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
  },
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: 'Inter',
    fontSize: fontScale(14),
    lineHeight: fontScale(14),
    color: '#6867CA',
    paddingHorizontal: horizontalScale(16),
  },
});

export default styles;
