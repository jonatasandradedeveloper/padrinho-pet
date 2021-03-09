/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform} from 'react-native';

import {MainStackNavigator} from './StackNavigator';
import Adopted from '../pages/Adopted';
import Location from '../pages/LocationOngs';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: '',
        tabBarIcon: ({focused}) => {
          let imgSource = null;
          switch (route.name) {
            case 'Home':
              imgSource = require('../assets/Icons/pawprint.png');
              break;
            case 'Adopted':
              imgSource = require('../assets/Icons/heart.png');
              break;
            case 'Location':
              imgSource = require('../assets/Icons/placeholder.png');
              break;
          }
          return <Image source={imgSource} style={{width: 32, height: 32, top: 8}} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#f2f2f2',
        style: {
          height: Platform.OS === 'ios' ? 80 : 50,
        },
      }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Adopted" component={Adopted} />
      <Tab.Screen name="Location" component={Location} />
    </Tab.Navigator>
  );
}

export default BottomTab;
