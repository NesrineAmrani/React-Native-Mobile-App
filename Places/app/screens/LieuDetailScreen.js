import React, { useEffect,useState } from 'react';
import { View,StyleSheet,Text, FlatList,TouchableOpacity, Pressable, Button,Image}  from 'react-native';
import firebase from '../../db/firstore';
import {LinearGradient} from 'expo-linear-gradient';
import {  } from 'react-native';


const LieuDetailScreen = (props) => {

   const nom = props.route.params.nom;
   const telephone = props.route.params.telephone;
   const adresse = props.route.params.adresse;
   const photo_item = props.route.params.photo_item;
   const ville = props.route.params.ville;
   const latitude = props.route.params.latitude;
   const longitude = props.route.params.longitude;
  // const heure_debut = route.params.heure_debut;
   //const heure_fin = route.params.heure_fin;
   
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            }}
        >
          
              <LinearGradient
                colors={['white', '#6B662D']}
                style={styles.image_view}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                
                <Image style={styles.photo_item} source={{ uri: photo_item }} />
                <View style={styles.container_item} >

                    <View style={{margin:10,}}>
                      <Text style={styles.name_item}>{nom}</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:10,}}>
                      <Image source={require('../assets/icons/home.png')} style={styles.icon}/>
                      <Text style={styles.text_item}>{adresse} , {ville}</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:10,}}>
                      <Image source={require('../assets/icons/phone.png')} style={styles.icon}/>
                      <Text style={styles.text_item}>{telephone}</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:10,}}>
                      <Image source={require('../assets/icons/time.png')} style={styles.icon}/> 
                      <Text style={styles.text_item}>09h a 16h </Text>
                    </View>
             
                    <TouchableOpacity style={{flexDirection:'row',margin:10,}}
                        onPress={() => props.navigation.navigate('Maps',{
                          latitude: latitude, 
                          longitude: longitude, 
                          nom: nom,
                      })} >
                        <Image source={require('../assets/icons/map.png')} style={styles.icon}/>
                        <Text style={styles.position_item}>Emplacement sur la carte</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.etoile}>
                  <Image source={require('../assets/icons/etoile.png')} style={styles.icon_etoile}/>
                  <Image source={require('../assets/icons/etoile.png')} style={styles.icon_etoile}/>
                  <Image source={require('../assets/icons/etoile.png')} style={styles.icon_etoile}/>
                  <Image source={require('../assets/icons/etoile.png')} style={styles.icon_etoile}/>
                  <Image source={require('../assets/icons/etoile.png')} style={styles.icon_etoile}/>
                </View>
              
          </LinearGradient> 
        </View>
    );
}
export default LieuDetailScreen;

const styles = StyleSheet.create({
    image_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'100%'
      },
    container_item: {
      flex:1,
       //backgroundColor:'red',
        alignSelf:'center',
        top:275,
        width:'100%',
        height:'40%',
        position:'absolute',
      },
    photo_item: {
        width: '100%',
        height: '40%',
        position:'absolute',
        alignSelf:'center',
        top:-10,
      },
    name_item: {
       color:'black',
       fontSize:40,
       fontWeight:'bold',
       textTransform:'capitalize',
      },
    text_item: {
        color:'black',
        fontSize:20,
        fontWeight:'bold',
      },
    position_item: {
      color:'blue',
      fontSize:15,
      textAlign:'center',
      },
    icon:{
        width: 30,
        height: 30,
         tintColor: '#fff',
         marginRight:10,
         alignSelf:'center' 
      },

   
      etoile:{
        flexDirection:'row',
        //backgroundColor:'red',
        width:'75%',
        height:70,
        bottom:-285,
        alignSelf:'center',
      },
      icon_etoile:{
        width: 40,
        height: 40,
         tintColor: '#fff',
         margin:10,
         justifyContent:'center' ,
         alignItems:'center',
      },

})