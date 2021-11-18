import React, { useEffect,useState } from 'react';
import { View,StyleSheet,Text, FlatList, TouchableOpacity, Button,Image}  from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import firebase from '../../db/firstore';

const CompanieScreen = (props) => {

     let nomCollection="" ;

    const categId = props.route.params.categId;
    const [Lieu, setLieu] = useState([]);

    if(categId == 'Restaurant_1'){
        nomCollection="Restaurant"

    }else if(categId == 'Banque_1')
    {nomCollection="Banque"

    }else if(categId == 'Assurence_1'){
        nomCollection="Assurence"
    }
    else if(categId == 'Agence_1'){
        nomCollection="Agence"
    }
    else if(categId == 'Boutique_1'){
        nomCollection="Boutique"
    }
    else if(categId == 'Ecole_1'){
        nomCollection="Ecole"
    }
    else if(categId == 'Library_1'){
        nomCollection="Library"
    }
    else if(categId == 'Cafe_1'){
        nomCollection="Cafe"
    }
    else if(categId == 'Hopital_1'){
        nomCollection="Hopital"
    }
    else if(categId == 'Pharmacie_1'){
        nomCollection="Pharmacie"
    }
    else if(categId == 'Police_1'){
        nomCollection="Police"
    }
    else if(categId == 'Medcin_1'){
        nomCollection="Medcin"
    }

    

    useEffect(()=>{

        firebase.db.collection('Lieu').doc(categId).collection(nomCollection).onSnapshot(querySnapshot => {
            const Lieu =[];
            querySnapshot.docs.forEach(doc =>{
              const {adresse, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              Lieu.push({
                  id: doc.id,
                  adresse,
                  nom,
                  photo_item,
                  ville,
                  telephone,
                  latitude,
                  longitude
                })
            });
          
            setLieu(Lieu)
        }); 

    }, [])

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['white', '#6B662D']}
                style={styles.image_view}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
           
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={Lieu}
                
                renderItem={({ item }) => (
                    <View  >
                    <TouchableOpacity style={styles.categoriesItemContainer}

                        onPress={() => props.navigation.navigate('Details',{
                            nom: item.nom, 
                            telephone: item.telephone,
                            photo_item: item.photo_item,
                            adresse: item.adresse,
                            ville: item.ville,
                            latitude: item.latitude,
                            longitude: item.longitude,
                        })}>
                            
                       <Image style={styles.categoriesPhoto} source={{ uri: item.photo_item }} />
                       <Text style={styles.nom} >{item.nom}</Text>
                        
                    </TouchableOpacity>
                    </View>
                )}
            />
           
            </LinearGradient>
        </View>
    )
}


export default CompanieScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
   nom:{
        fontSize:16,
        textAlign:'center'
   },
  
    categoriesItemContainer: {
      marginBottom:5,
      
      //backgroundColor:'red',
      
    },
    categoriesPhoto: {
      width: '100%',
      height: 150,
     borderRadius:23,
      

    },
    categoriesName: {
      marginTop:10,
      textAlign:'center',
      fontSize: 15,
      fontWeight: 'bold',
      //backgroundColor:'green',
      color: '#111',
      
    },
    
})