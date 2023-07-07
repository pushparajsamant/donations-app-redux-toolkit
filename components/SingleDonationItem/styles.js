import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: verticalScale(180),
    resizeMode: 'contain',
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    left: horizontalScale(13),
    top: verticalScale(13),
    zIndex: 1000,
  },
  donationInfo: {
    marginTop: verticalScale(18),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default styles;
