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


/*

import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function HomeStackScreen() {
 return (
   <SettingsStack.Navigator>
    <SettingsStack.Screen name="Home" component={HomeScreen} />             <SettingsStack.Screen name="Details" component={DetailsScreen} />
   </SettingsStack.Navigator>
  );
}
const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Home') {
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
          }
    
     return <Ionicons name={iconName} size={size} color={color}     />;
       },
    })}
tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component=     {SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



import { StatusBar } from 'expo-status-bar';


import React from 'react';
import { View ,Text } from 'react-native-animatable';

import MapScreen from './app/screens/MapScreen';


export default function App() {
  return (
     <View>
       <Text>je suis homme</Text>
     </View>
  );
}

*/

