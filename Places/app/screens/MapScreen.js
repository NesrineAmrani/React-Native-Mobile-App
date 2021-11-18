import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Alert ,Dimensions} from 'react-native';
import MapView  from 'react-native-maps';
export default function MapScreen({route}) {

  let lat = 35.58845;
  let long = -5.33400;
  let nome = ''; 
 
  if(route.params){

    const {latitude,longitude,nom} = route.params
    lat = latitude
    long= longitude
    nome = nom
  }

  return (
    
    <MapView
      //mapType="satellite"
      style={{width:'100%',height:'100%'}}
      showsUserLocation={true}
      initialRegion={{
        latitude: lat ,
        longitude: long,
        latitudeDelta: 0.015,
        longitudeDelta: 0.012
      }}>
      <MapView.Marker
        coordinate={{
          latitude: lat,
          longitude: long,
        }}
        title={nome}
        />
    </MapView> 
  );
}

const styles = StyleSheet.create({ 
    map:{
        width:'100%',
        height:'100%'
    },
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    image_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  
 }); 