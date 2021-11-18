import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CompaniScreen from '../app/screens/CompanieScreen';
import DetailScreen from '../app/screens/DetailScreen';
import TabsNavigator from './TabNavigator';
import LieuDetailScreen from '../app/screens/LieuDetailScreen';
import MapScreen from '../app/screens/MapScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={TabsNavigator} />
      <Stack.Screen name="Companie" component={CompaniScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="Details" component={LieuDetailScreen} />
      <Stack.Screen name="Maps" component={MapScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;