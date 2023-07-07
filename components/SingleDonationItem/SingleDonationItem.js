import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Pressable} from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import styles from './styles';

const SingleDonationItem = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View>
        <View style={styles.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          source={{uri: props.uri}}
          style={styles.image}
          resizeMode={'cover'}
        />
        <View style={styles.donationInfo}>
          <Header title={props.donationTitle} types={3} />
          <View style={styles.price}>
            <Header
              title={'$' + props.price.toFixed()}
              color={'#156CF7'}
              types={3}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};
SingleDonationItem.default = {
  onPress: () => {},
};
SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  omPress: PropTypes.func,
};
export default SingleDonationItem;
