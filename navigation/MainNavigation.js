import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import React from 'react';
import DesignLibray from '../screens/DesignLibrary/DesignLibray';
import DonationItemDetails from '../screens/DonationItemDetails/DonationItemDetails';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.DesignLibrary} component={DesignLibray} />
      <Stack.Screen
        name={Routes.DonationDetails}
        component={DonationItemDetails}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
