import React from 'react';
import { Image, StyleSheet,ReactImage, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function WelcomeScreen(props) {
    return (

      <LinearGradient
        colors={['white', '#6B662D']}
        style={styles.image_view}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image 
          style={styles.places_icon}
          source={require('../assets/x123.png')} />
        
    </LinearGradient>
        
    );
}

const styles = StyleSheet.create({
    image_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    places_icon: {
        width: 300,
        height: 380,
    }
    
});

export default WelcomeScreen;