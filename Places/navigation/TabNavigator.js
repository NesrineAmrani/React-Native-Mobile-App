import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Image } from 'react-native-animatable';


import MapScreen from '../app/screens/MapScreen';
import AddScreen from '../app/screens/AddScreen';

import HomeScreen from '../app/screens/HomeScreen';
import CreateUserScreen from '../db/scennes/CreateUserScreen';
import UserList from '../db/scennes/UserList';

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator 
      initialRouteName="Home"
            
      tabBarOptions={{
      activeTintColor:"#fff",
      style: {
          position:'absolute',
          top: 15,
          left: 20,
          right: 20,
          backgroundColor: '#677179',
          borderRadius: 15,
          elevation: 0,
          height: 60,
          //...StyleSheet.shadow
        },
   }}
    >
      <Tabs.Screen 
         options={{
          tabBarIcon: ({focused}) => (
           <View style={{alignItems: 'center', justifyContent: 'center'}}>
             <Image
              source={require('../app/assets/icons/home.png')}
              resizeMode="contain"
              style={{
                  width: 30,
                  height: 30,
                  
                  tintColor: focused ? '#FED049' : '#ffff'
              }}
              />
              
           </View>
          ),
      }}
        name="Home" component={HomeScreen} />
      <Tabs.Screen 
        options={{
          tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
              source={require('../app/assets/icons/add.png')}
              resizeMode="contain"
              style={{
                  width: 30,
                  height: 30,
                  
                  tintColor: focused ? '#FED049' : '#fff'
              }}
              />
              
          </View>
          ),
      }}
        name="Ajout" component={AddScreen} />
      <Tabs.Screen
         options={{
          tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
              source={require('../app/assets/icons/map.png')}
              resizeMode="contain"
              style={{
                  width: 30,
                  height: 30,
                  
                  tintColor: focused ? '#FED049' : '#fff'
              }}
              />
              
          </View>
          ),
      }}
        name="Maps" component={MapScreen} />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;