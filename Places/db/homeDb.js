import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { firebase , database } from './firstore';

import UserDetailScreen from './scennes/UserDetailScreen';
import UserList from './scennes/UserList';
import CreateUserScreen from './scennes/CreateUserScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
      
      
      </Stack.Navigator>
    );
  };

const HomeDb = () => {
    return(

        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}

export default HomeDb;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        textAlign:'center',
        fontSize:20,
    }
})