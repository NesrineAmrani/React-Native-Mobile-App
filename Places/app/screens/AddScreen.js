import React, { useState,useEffect } from 'react';
import { Text, View,Pressable, Image, TextInput, Button,StyleSheet, Platform, Alert, ActivityIndicator ,SafeAreaView,ScrollView  } from 'react-native';
import { Picker } from '@react-native-community/picker';
import {LinearGradient} from 'expo-linear-gradient';
import * as Location from 'expo-location';
import {StylesCss} from '../styles/StylesCss';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../db/firstore';

function AddScreen (props){

    const [image, setImage] = useState(null);
    const [selectedValue, setSelectedValue] = useState("");
    const [transfered, setTransfered] = useState(0);
    const [uploading, setUploading] = useState(false);

    const [vide , setvide] = useState(false);
    const [nom, setnom] = useState('');
    const [ville, setville] = useState('');
    const [adresse, setadresse] = useState('');
    const [telephone, settelephone] = useState('');
    const [photo_item, setphoto_item] = useState('');
    const [latitude, setLatitude] = useState(35);
    const [longitude, setLongitude] = useState(-5);

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [test, setTest] = useState('Waiting...');
    
    let idCateg="" ;

    if(selectedValue == 'Restaurant'){
        idCateg="Restaurant_1"

    }else if(selectedValue == 'Banque')
    {idCateg="Banque_1"

    }else if(selectedValue == 'Agence'){
        idCateg="Agence_1"
    }
    
    else if(selectedValue == 'Boutique'){
        idCateg="Boutique_1"
    }
    else if(selectedValue == 'Ecole'){
        idCateg="Ecole_1"
    }
    else if(selectedValue == 'Medcin'){
        idCateg="Medcin_1"
    }
    else if(selectedValue == 'Cafe'){
        idCateg="Cafe_1"
    }
    else if(selectedValue == 'Hopital'){
        idCateg="Hopital_1"
    }
    else if(selectedValue == 'Assurence'){
        idCateg="Assurence_1"
    }
    else if(selectedValue == 'Hotel'){
        idCateg="Hotel_1"
    }; 


    const saveNewLieu = async () => {
        if(nom === '' || adresse === '' || ville === ''){
            setvide(true)
        }else{
            try{await firebase.db.collection('Lieu').doc(idCateg).collection(selectedValue).add({
                nom,
                adresse,
                telephone,
                ville,
                photo_item,
                latitude,
                longitude,
            })
            Alert.alert('Informations du nouveau lieu bien Enregistrées')

            setImage(null)
            setnom('')
            setville('')
            setadresse('')
            settelephone('')
            setphoto_item('')
            setLatitude('')
            setLongitude('')
            setLocation('')
            props.navigation.navigate("Home")
            }catch(error
                ) {
                console.log(error)
            }

        }
        
    }

    //                     USEEFFECT

    
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
               ///////// Choisis une image

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect:[2,1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
     /////  upload image to firebase storage and recuper le lien du fichier
             // au moment du chois de l'image

     const image = result.uri;
     
     setTransfered(0);
     
      const path = `${selectedValue}/${nom + '_' + ville + '_' + Date.now()}.jpg`
      return new Promise(async (res, rej) => {
        const response = await fetch(image)
        const file = await response.blob()
        setUploading(true);
        const upload = firebase.storage.ref(path).put(file);
        
        upload.on('state_changed', function(snapshot){
           
         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
           
           setTransfered(
              Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          
        }, function(error) {
          setvideImage(true)
        }, function() {
          upload.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              setUploading(false);
            setphoto_item(downloadURL)
          
        });
      });
    })

  };
  ///////////////////////  obtention des cooedonner gps de votre position ##########################

  const getPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    
    if (errorMsg) {
      setTest (errorMsg);
    } else if (location) {
     setTest (JSON.stringify(location));
     setLatitude(location.coords.latitude)
     setLongitude(location.coords.longitude)
    }
  }

  ///////////////////////  RETURN   ##########################
  
    return(
        <SafeAreaView  style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            }}>

          <LinearGradient
            colors={['white', '#6B662D']}
            style={StylesCss.image_view}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >  
            
            <ScrollView style={styles.scrollView}>
              <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>Ajouter un lieu</Text>
              <TextInput
                  style={styles.inputAjout}
                  placeholder="Nom"
                  placeholderTextColor="black"
                  onChangeText={text => setnom(text)}
                  autoFocus={true}
                  value={nom}
                  returnKeyType='next'
                  scrollEnabled={true}
              />
          
              <TextInput
                  style={styles.inputAjout}
                  placeholder="Ville"
                  placeholderTextColor="black"
                  onChangeText={text => setville(text)}
                  value={ville}
              />
              <TextInput
                  style={styles.inputAjout}
                  placeholder="Adresse"
                  placeholderTextColor="black"
                  onChangeText={text => setadresse(text)}
                  value={adresse}
              />       
              
              <TextInput
                  style={styles.inputAjout}
                  placeholder="Telephone" keyboardType='numeric'
                  placeholderTextColor="black"
                  onChangeText={text => settelephone(text)}
                  value={telephone}
              />
          
              <View style={styles.inputCategorie}>
                  <Picker
                      selectedValue={selectedValue}
                      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                      style={{ height: 50, width: '95%',alignSelf:'center',}}>
                      <Picker.Item label="Choisis une categorie" value="disabled" color="black" />
                      <Picker.Item label="Assurence" value="Assurence" />
                      <Picker.Item label="Agence" value="Agence" />
                      <Picker.Item label="Banque" value="Banque" />
                      <Picker.Item label="Boutique" value="Boutique" />
                      <Picker.Item label="Cafe" value="Cafe" />
                      <Picker.Item label="Ecole" value="Ecole" />
                      <Picker.Item label="Hopital" value="Hopital" />
                      <Picker.Item label="Medcin" value="Medcin" />
                      <Picker.Item label="Restaurant" value="Restaurant"  />
                  </Picker>
              </View>
              
              <View style={styles.inputCategorie}>
                <Pressable onPress={getPosition} >
                    {
                        !location ? <Text style={{fontSize:20,padding:10}}>Ajouter la position</Text>
                        : <Text style={{fontSize:16,padding:10}}>lat: {latitude},long: {longitude} </Text>
                    }
                </Pressable>
              </View >
                  
              <View style={styles.inputCategorie}>
                <Pressable onPress={pickImage} style={{flexDirection:'row'}} >
                    {
                        !uploading ? <Text style={{alignSelf:'flex-start',fontSize:20,padding:4}}>Choisissez une image</Text>

                    : <ActivityIndicator/>
                    }
                    
                    <Image source={{ uri: image }} style={{ width: 110, height: 43 ,borderRadius:8}} />
                </Pressable>
              </View>
            
                {
                    vide && (<Text style={{alignSelf:'center',fontSize:16,padding:4,color:'red'}}>Veillez remplir tous les champs!</Text>)
                }
            <Pressable style={{width:'40%',alignSelf:'flex-end',margin:50,backgroundColor:"yellow",borderRadius:10}}
                 onPress={saveNewLieu} >
                <Text style={{alignSelf:'center',fontSize:16,padding:4}}>ENREGISTER</Text>
            </Pressable>
            </ScrollView>  
          </LinearGradient>   
        </SafeAreaView >
    );
}
export default AddScreen;
const styles = StyleSheet.create({
    inputAjout:{
        alignSelf:'center',
        width: '80%',
        height:45,
        marginTop: 20,
        borderColor: 'white',
        borderRadius: 10,
        padding:10,
        borderWidth: 1,
        fontSize:20,
      },
      inputCategorie:{alignSelf:'center',
      width: '80%',
      height:45,
      marginTop: 20,
      borderColor: 'white',
      borderRadius: 10, 
       borderWidth: 1,
      }, 
      scrollView: {
      
        marginTop: 65,
        width:'100%'
      },
})