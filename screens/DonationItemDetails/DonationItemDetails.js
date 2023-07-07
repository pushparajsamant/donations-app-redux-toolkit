import React from 'react';
import {useSelector} from 'react-redux';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {fontScale} from '../../assets/styles/scale';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import globalStyles from '../../assets/styles/styles';
const DonationItemDetails = ({navigation}) => {
  const donationItemDetails = useSelector(
    state => state.donations.selectedDonationDetails,
  );
  const categoryState = useSelector(state => state.categories);
  const matchingCategories = categoryState.categoryList.filter(category =>
    donationItemDetails.categoryIds.includes(category.categoryId),
  );
  console.log(matchingCategories);
  console.log(donationItemDetails);
  return (
    <SafeAreaView
      style={[globalStyles.flexStyle, globalStyles.backgroundWhite]}>
      <ScrollView style={styles.mainDetailsView}>
        <Pressable onPress={() => navigation.pop()}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={fontScale(20)}
            color={'#022150'}
          />
        </Pressable>
        <Image
          source={{uri: donationItemDetails.image}}
          style={styles.mainImage}
        />
        <View style={styles.badgesContainer}>
          {matchingCategories.length > 0 &&
            matchingCategories.map(category => (
              <Badge key={category.categoryId} title={category.name} />
            ))}
        </View>
        <Header title={donationItemDetails.name} />
        <View>
          <Text style={styles.donationDesription}>
            {donationItemDetails.description}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};
export default DonationItemDetails;
