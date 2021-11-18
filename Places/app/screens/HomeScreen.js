import React, { useEffect, useState } from 'react';
import {StyleSheet,View,Text,TextInput,Pressable, FlatList, TouchableOpacity,Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import firebase from '../../db/firstore';


//const goToLogin = () => navigation.navigate("Profiles");

function HomeScreen (props){

  const [Lieu, setLieu] = useState([])

    useEffect(()=> {

       /* firebase.db.collection('Lieu').doc(Lieu.id).collection('Banque').get()
        .then(response => {
            response.forEach(doc => {
                console.log(doc.data())
            });
        });
       */
        
         firebase.db.collection('Lieu').onSnapshot(querySnapshot => {
            const Lieu =[];
            querySnapshot.docs.forEach(doc =>{
                const {nom_categorie, photo_url} = doc.data()
                Lieu.push({
                    id: doc.id,
                    nom_categorie,
                    photo_url,
                    
                })
                
            });
            //console.log(Lieu)
            setLieu(Lieu)
        }); 

    }, [])

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
                
                 <View style={styles.containerSearch}>
                    <Animatable.View animation="slideInRight" duration={500} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius :12 }}>
                      <Animatable.View >
                         <AntDesign name="search1" size={24} color="black" />
                      </Animatable.View>
                      <TextInput placeholder="Search" style={{ fontSize: 24, marginLeft: 15, flex: 1 }} />
                    </Animatable.View>
                </View>
                
                <View style={styles.containerList}>

                <FlatList
                   
                   vertical
                   showsVerticalScrollIndicator={false}
                   numColumns={3}
                   data={Lieu}
                   
                   renderItem={({ item }) => (
                       <View  >
                       <TouchableOpacity style={styles.categoriesItemContainer}
                           onPress={() => props.navigation.navigate('Companie',{categId: item.id,nomCategorie:item.nom_categorie,
                           })}>
                               
                           <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
                           <Text style={styles.categoriesName}>{item.nom_categorie}</Text>
                           
                       </TouchableOpacity>
                       </View>
                   )}
                   />
                </View>
               
             </LinearGradient>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    image_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      height:'100%'
    },

    containerList: {
      flex:0.9,
      alignItems:'center',
      justifyContent:'center',
      top:60,
      marginBottom:20,
      
      //backgroundColor:'yellow',
      width:'100%',
    },

    categoriesItemContainer: {
      
      marginVertical:15,
      //backgroundColor:'red',
      margin:5,
      width:120,
      height:160,
    },/*
    categoriesItemContainer: {
      flex: 1,
      margin: 10,
      bottom: -40,
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
  
    },*/
    categoriesPhoto: {
      width: 110,
      height: 110,
      borderRadius: 125,
      alignSelf:'center',

    },
    categoriesName: {
      
      textAlign:'center',
      fontSize: 15,
      fontWeight: 'bold',
      //backgroundColor:'green',
      color: '#fff',
      marginTop: 8
    },
    ItemContainer:{
      flex: 1,
      margin:10,
      //backgroundColor:'red',
    },
    containerSearch:{ 
     
      height: 50, width: '95%' ,
      backgroundColor: 'transparent', 
      justifyContent: 'center',
      paddingHorizontal: 5 ,
      //position:'absolute',
      top:60,
      //backgroundColor:'red'
    },
   
  }
  );
  