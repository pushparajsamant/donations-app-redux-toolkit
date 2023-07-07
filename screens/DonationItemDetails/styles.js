import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  mainDetailsView: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(28),
  },
  mainImage: {
    width: '100%',
    height: verticalScale(240),
    marginTop: verticalScale(12),
    borderRadius: horizontalScale(5),
  },
  badgesContainer: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    marginVertical: verticalScale(24),
  },
  donationDesription: {
    fontFamily: 'Inter',
    fontSize: fontScale(14),
    lineHeight: fontScale(22),
    fontWeight: '400',
  },
  buttonContainer: {
    marginBottom: verticalScale(20),
    marginHorizontal: horizontalScale(20),
  },
});

export default styles;
