import React from 'react';
import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/styles';
import Header from '../../components/Header/Header';
import styles from './style';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {horizontalScale} from '../../assets/styles/scale';
const Home = () => {
  return (
    <SafeAreaView
      style={[globalStyles.backgroundWhite, globalStyles.flexStyle]}>
      <View>
        <Header title={'Azzahri. A.'} />
        <Header title={'Azzahri. A.'} types={2} />
        <Header title={'Azzahri. A.'} types={3} />
        <Button
          title={'Donate'}
          callback={() => console.log('Pressed enabled button')}
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

export default Home;
