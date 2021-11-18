import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

function Maps(props) {
    return (

      <LinearGradient
        colors={['white', '#6B662D']}
        style={styles.image_view}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text>Maps page</Text>
        
    </LinearGradient>
        
    );
}

const styles = StyleSheet.create({
    image_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});

export default Maps;