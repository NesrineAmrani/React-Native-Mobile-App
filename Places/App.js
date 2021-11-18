import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
        <StatusBar  
            backgroundColor = "#d0cfbe"  
            barStyle='light-content'  
        />
     
       <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
   
  );
} 
