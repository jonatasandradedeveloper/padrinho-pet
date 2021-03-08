/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import BottomTab from './src/routes/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true} />

      <BottomTab />
    </NavigationContainer>
  );
}
