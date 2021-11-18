import { styleSheets } from 'min-document';
import React, { useEffect,useState } from 'react';
import { View,StyleSheet,Text, FlatList, Pressable, Button,Image}  from 'react-native';
import firebase from '../firstore';

const UserDetailScreen = (props) => {

     let nomCollection="" ;

    const categId = props.route.params.categId;
    const [Lieu, setLieu] = useState([]);

    if(categId == 'Restaurant_1'){
        nomCollection="Restaurant"

    }else if(categId == 'Banque_1')
    {nomCollection="Banque"

    }else if(categId == 'Agence_1'){
        nomCollection="Agence"
    }
    else if(categId == 'Boutique_1'){
        nomCollection="Boutique"
    }
    else if(categId == 'Faculte_1'){
        nomCollection="Faculte"
    }
    else if(categId == 'Medcin_1'){
        nomCollection="Medcin"
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

    /* console.log(categId)
    console.log('nomCollection est :',nomCollection) */

    useEffect(()=>{

        firebase.db.collection('Lieu').doc(categId).collection(nomCollection).onSnapshot(querySnapshot => {
            const Lieu =[];
            querySnapshot.docs.forEach(doc =>{
              const {adresse, telephone,photo_item,nom,ville,} = doc.data()
              Lieu.push({
                  id: doc.id,
                  adresse,
                  nom,
                  photo_item,
                  ville,
                  telephone,
                    
                })
                
            });
            console.log('les donnes:',Lieu)
            console.log('nomCollection est :',nomCollection)
            setLieu(Lieu)
        }); 

    }, [])

    return(
        <View style={styles.container}>
            <Button title="lieuDetail" onPress={()=> props.navigation.navigate('LieuDetailScreen')} />
       
            <FlatList
                   
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={Lieu}
                
                renderItem={({ item }) => (
                    <View  >
                    <Pressable style={styles.categoriesItemContainer}
                        onPress={() => props.navigation.navigate('LieuDetailScreen',{
                            nom: item.nom, 
                            telephone: item.telephone,
                            photo_item: item.photo_item,
                            adresse:item.adresse,
                            ville:item.ville
                        })}>
                            
                        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_item }} />
                        <Text style={styles.categoriesName}>{item.nom}</Text>
                        
                    </Pressable>
                    </View>
                )}
                />
        </View>
    )
}


export default UserDetailScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },categoriesItemContainer:{
        justifyContent:'center',
        alignItems:'center',

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
    },
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
      backgroundColor:'green',
      color: '#111',
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
})