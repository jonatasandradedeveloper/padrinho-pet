/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import {MainStackNavigator} from './StackNavigator';
import Adopted from '../pages/Adopted';

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
          }
          return <Image source={imgSource} style={{width: 32, height: 32, top: 8}} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#f2f2f2',
        style: {
          height: 80,
        },
      }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Adopted" component={Adopted} />
    </Tab.Navigator>
  );
}

export default BottomTab;
