/* import React, { useState } from 'react';
import { View,StyleSheet,Text, ScrollView,Button, TextInput, Alert}  from 'react-native';
import firebase from '../firstore';

const CreateUserScreen = (props) => {

    const [infoUser, setInfoUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handlerChangeText = (name,value) => {
        setInfoUser({ ...infoUser, [name]: value })
    }

    const saveNewUser = async () => {
        if(infoUser.name === '' || infoUser.email === '' || infoUser.phone === ''){
            Alert.alert('veiller remplir tous les champs')
        }else{
            try{await firebase.db.collection('users').add({
                name: infoUser.name,
                email: infoUser.email,
                phone: infoUser.phone,
            })
            
            props.navigation.navigate("UserList")
            }catch(error
                ) {
                console.log(error)
            }

        }
    }

    return(
       
        <View style={styles.container}>
            <View style={styles.inputgroup}>
                <TextInput placeholder="Nom user" 
                    onChangeText={(value)=> handlerChangeText('name', value)} />
            </View>

            <View style={styles.inputgroup}>
                <TextInput placeholder="Email user" 
                    onChangeText={(value)=> handlerChangeText('email', value)}/>
            </View>

            <View style={styles.inputgroup}>
                <TextInput placeholder="Phone user"
                     onChangeText={(value)=> handlerChangeText('phone', value)} />
            </View>
           
            <View style={styles.inputgroup}>
                <Button title="Save user" onPress={saveNewUser} />
            </View>

        </View>
    
    )
}

export default CreateUserScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputgroup:{
        width:250,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#111',
    }
}) */

/* import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  console.log(selectedValue)
  return (
    <View style={styles.container}>
      <Picker
      
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 140,
    alignItems: "center"
  }
});

export default App; */

/* import React, { useState } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,ActivityIndicator,Linking,} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import firebase from '../../db/firstore';

export default function App() {
  const [uploading, setUploading] = useState(false);
  const [uploadTask, setUploadTask] = useState();
  const [uploadTaskSnapshot, setUploadTaskSnapshot] = useState({});
  const [downloadURL, setDownloadURL] = useState();
  const [paused, setPaused] = useState(false);

  const onTakePhoto = () => launchCamera({ mediaType: 'image' }, onMediaSelect);

  const onTakeVideo = () => launchCamera({ mediaType: 'video' }, onMediaSelect);

  const onSelectImagePress = () =>
    launchImageLibrary({ mediaType: 'image' }, onMediaSelect);

  const onSelectVideoPress = () =>
    launchImageLibrary({ mediaType: 'video' }, onMediaSelect);

  const togglePause = () => {
    if (paused) uploadTask.resume();
    else uploadTask.pause();
    setPaused((paused) => !paused);
  };

  const onMediaSelect = async (media) => {
    if (!media.didCancel) {
      setUploading(true);
      const reference = firebase.storage().ref(media.fileName);
      const task = reference.putFile(media.uri);
      setUploadTask(task);
      task.on('state_changed', (taskSnapshot) => {
        setUploadTaskSnapshot(taskSnapshot);
      });
      task.then(async () => {
        const downloadURL = await reference.getDownloadURL();
        setDownloadURL(downloadURL);
        setUploading(false);
        setUploadTaskSnapshot({});
      });
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Firebase Storage</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={onTakePhoto}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onTakeVideo}>
          <Text style={styles.buttonText}>Record Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSelectImagePress}>
          <Text style={styles.buttonText}>Pick a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSelectVideoPress}>
          <Text style={styles.buttonText}>Pick a Video</Text>
        </TouchableOpacity>
      </View>
      {uploading && (
        <View style={styles.uploading}>
          {!paused && (
            <ActivityIndicator size={60} color="#47477b"></ActivityIndicator>
          )}
          <Text style={styles.statusText}>
            {!paused ? 'Uploading' : 'Paused'}
          </Text>
          <Text style={styles.statusText}>
            {`${(
              (uploadTaskSnapshot.bytesTransferred /
                uploadTaskSnapshot.totalBytes) *
              100
            ).toFixed(2)}% / 100%`}
          </Text>
          <TouchableOpacity style={styles.button} onPress={togglePause}>
            <Text style={styles.buttonText}>{paused ? 'Resume' : 'Pause'}</Text>
          </TouchableOpacity>
        </View>
      )}
      {downloadURL && (
        <TouchableOpacity
          style={[styles.button, styles.mediaButton]}
          onPress={() => Linking.openURL(downloadURL)}>
          <Text style={styles.buttonText}>View Media</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 35,
    marginVertical: 40,
  },
  button: {
    backgroundColor: '#47477b',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
  mediaButton: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
    width: 300,
  },
  uploading: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    marginTop: 20,
    fontSize: 20,
  },
}); */


import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
//import * as ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
//import storage from '@react-native-firebase/storage';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBH7JNm-LXz8SNZ8Jg2bWasOgPGCeZ5yV8",
  authDomain: "nersrine-91c44.firebaseapp.com",
  databaseURL: "https://nersrine-91c44-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nersrine-91c44",
  storageBucket: "nersrine-91c44.appspot.com",
   messagingSenderId: "1076154759560",
  appId: "1:1076154759560:web:58d28c52f26ca7d97de23d"
};

 

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [uploading, setuploading] = useState(false);

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect:[2,1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () =>{
    const blob = await new Promise((resolve, reject) =>{
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve.apply(xhr.response);
      };
      xhr.onerror = function(){
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  }

  const ref = firebase.storage().ref().child(new Date().toISOString())
  const snapshot = ref.put(blob)

  snapshot.on(
    firebase.storage.TaskEvent.STATE_CHANGED, 
    () =>{
     setuploading(true);
    },
    (error) =>{setuploading(false);
    console.log(error);
    blob.close();
    return;
    },
    () =>{
      snapshot.snapshot.ref.getDownloadURL().then((url) =>{
        setuploading(false);
        console.log("dowload url:",url);
        blob.close();
        return url;
      })
    },
    )

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="choisissez une image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200 }} />}
      {console.log('je suis image', image)}
    </View>
  );
} 




