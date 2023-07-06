import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import styles from './styles';

const SingleDonationItem = props => {
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image source={{uri: props.uri}} style={styles.image} />
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
    </View>
  );
};
SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default SingleDonationItem;
