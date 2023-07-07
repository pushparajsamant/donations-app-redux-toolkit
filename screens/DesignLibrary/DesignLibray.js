import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import globalStyles from '../../assets/styles/styles';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {updateFirstName} from '../../redux/reducers/User';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
import {horizontalScale} from '../../assets/styles/scale';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

const DesignLibray = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={[globalStyles.backgroundWhite, globalStyles.flexStyle]}>
      <View>
        <Header title={user.firstName + ' ' + user.lastName} />

        <Header title={'Azzahri. A.'} types={2} />
        <Header title={'Azzahri. A.'} types={3} />
        <Button
          title={'Donate'}
          callback={() => dispatch(updateFirstName({firstName: 'P'}))}
        />
        <Button title={'Donate'} isDisabled={true} />
        <Tab title={'Highlight'} />
        <Tab title={'Lifestyle'} isInactive={true} />
        <Badge title={'Environment'} />
        <Search onSearch={value => console.log(value)} />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: horizontalScale(24),
          }}>
          <SingleDonationItem
            uri="https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg"
            badgeTitle={'Environment'}
            donationTitle={'Tree Cactus'}
            price={44}
          />
          <SingleDonationItem
            uri="https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg"
            badgeTitle={'Environment'}
            donationTitle={'Tree Cactus'}
            price={44}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DesignLibray;
