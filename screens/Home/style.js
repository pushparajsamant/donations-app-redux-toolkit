import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: fontScale(16),
    lineHeight: fontScale(19),
    fontWeight: '600',
    color: '#636776',
  },
  userName: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(20),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  tabList: {
    marginTop: verticalScale(16),
  },
  category: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(24),
  },
  tabItem: {
    marginHorizontal: horizontalScale(5),
  },
  donationsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItemViewContainer: {
    maxWidth: '49%',
    marginBottom: verticalScale(20),
  },
});
export default styles;
