import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Pet from '../pages/Pet';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Plans from '../pages/Plans';
import Payment from '../pages/Payment';
import Finish from '../pages/Finish';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Stack.Screen name="Pet" component={Pet} options={{header: () => null}} />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Plans"
        component={Plans}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Finish"
        component={Finish}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
