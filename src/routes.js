import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Libary from './pages/Libary';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import Radio from './pages/Radio';
import Store from './pages/Store';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Libary,
      Artists,
      Albums,
      Radio,
      Store,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Libary') {
            iconName = `ios-disc`;
            //IconComponent = HomeIconWithBadge;
          } else if (routeName === 'Artists') {
            iconName = `md-person`;
          } else if (routeName === 'Albums') {
            iconName = `ios-albums`;
          } else if (routeName === 'Radio') {
            iconName = `md-wifi`;
          } else if (routeName === 'Store') {
            iconName = `ios-star`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#AA0613',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#111518',
        },
      },
    },
  ),
);

export default Routes;