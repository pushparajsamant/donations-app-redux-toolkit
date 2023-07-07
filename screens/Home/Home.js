import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import globalStyles from '../../assets/styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import Header from '../../components/Header/Header';
import {resetToInitial} from '../../redux/reducers/User';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {
  resetCategory,
  updateSelectedCategoryId,
} from '../../redux/reducers/Category';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {selectDonationId} from '../../redux/reducers/Donation';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const categoriesState = useSelector(state => state.categories);
  const donationsState = useSelector(state => state.donations);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [donationsItems, setDonationItems] = useState([]);
  const limit = 4;

  const dispatch = useDispatch();

  //Will run only first time as no dependencies
  useEffect(() => {
    //console.log(categoriesState.categoryList);
    setCategoryList(
      pagination(categoriesState.categoryList, categoryPage, limit),
    );
    //console.log('page' + categoryPage);
  }, [categoriesState.categoryList]);

  //Will run when the user changes the selectedCategory
  useEffect(() => {
    const filtered = donationsState.items.filter(item =>
      item.categoryIds.includes(categoriesState.selectedCategory),
    );
    setDonationItems(filtered);
    //console.log(filtered);
  }, [categoriesState.selectedCategory]);
  const pagination = (items, pageNumber, pageSize) => {
    //console.log('page' + pageNumber);
    const startIndex = (categoryPage - 1) * limit;
    const endIndex = startIndex + limit;
    if (startIndex > items.length) {
      return [];
    }
    setCategoryPage(pageNumber + 1);
    return items.slice(startIndex, endIndex);
  };
  return (
    <SafeAreaView
      style={[globalStyles.backgroundWhite, globalStyles.flexStyle]}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello</Text>
            <View style={styles.userName}>
              <Header title={user.firstName + ' ' + user.lastName + '👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            resizeMode={'contain'}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.searchBox}>
          <Search placeholder={'Search'} />
        </View>
        <Pressable>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
            style={styles.highlightedImage}
          />
        </Pressable>
        <View style={styles.category}>
          <Header title={'Select Category'} type={2} />
          <View style={styles.tabList}>
            <FlatList
              horizontal={true}
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                console.log(categoryPage);
                let newData = pagination(
                  categoriesState.categoryList,
                  categoryPage,
                  limit,
                );
                setCategoryList(prevState => [...prevState, ...newData]);
              }}
              showsHorizontalScrollIndicator={false}
              data={categoryList}
              renderItem={({item}) => (
                <View style={styles.tabItem}>
                  <Tab
                    title={item.name}
                    isInactive={
                      item.categoryId !== categoriesState.selectedCategory
                    }
                    callback={() =>
                      dispatch(
                        updateSelectedCategoryId({categoryId: item.categoryId}),
                      )
                    }
                  />
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.donationsContainer}>
          {donationsItems.length > 0 &&
            donationsItems.map(item => (
              <View
                key={item.donationItemId}
                style={styles.singleDonationItemViewContainer}>
                <SingleDonationItem
                  onPress={() => {
                    dispatch(selectDonationId(item.donationItemId));
                    navigation.navigate(Routes.DonationDetails);
                  }}
                  uri={item.image}
                  badgeTitle={
                    categoriesState.categoryList.filter(
                      category =>
                        category.categoryId ===
                        categoriesState.selectedCategory,
                    )[0].name
                  }
                  donationTitle={item.name}
                  price={parseFloat(item.price)}
                />
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
