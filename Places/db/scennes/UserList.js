import { styleSheets } from 'min-document';
import React, { useEffect, useState } from 'react';
import { View,StyleSheet,Text, Button,FlatList,Image, Pressable, ScrollView}  from 'react-native';
import firebase from '../firstore';

const UserList = (props) => {

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
        <View style={styles.container}>
            <Button title="Add user" onPress={()=> props.navigation.navigate('CreateUserScreen')} />
       
            <FlatList
                   
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={Lieu}
                
                renderItem={({ item }) => (
                    <View  >
                    <Pressable style={styles.categoriesItemContainer}
                        onPress={() => props.navigation.navigate('UserDetailScreen',{categId: item.id})}>
                            
                        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
                        <Text style={styles.categoriesName}>{item.nom_categorie}</Text>
                        
                    </Pressable>
                    </View>
                )}
                />
        </View>
    )
}

export default UserList;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    },
    categoriesItemContainer:{
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
      //backgroundColor:'green',
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