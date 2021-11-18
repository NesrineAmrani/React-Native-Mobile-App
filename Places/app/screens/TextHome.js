import React, { useState } from 'react';
import {StyleSheet,View,Text,Image,Pressable, FlatList, TouchableOpacity,Button} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const listTab = [
    { status : 'All' },
    { status : 'Purple' },
    { status : 'Green' },
]

const data = [
    { name: 'ronaldo',
      status: 'Green'
    },
    { name: 'Messi',
      status: 'purple'
    },
    { name: 'Neymar',
      status: 'Green'
    },
    { name: 'Ronny',
      status: 'purple'
    },
    { name: 'Rafael',
      status: 'Green'
    },
    { name: 'MBappe',
      status: 'purple'
    },
]

const TextHome = () =>{

    const [status ,setStatuts] = useState('All')
    const setStatutsFiler = status => {
        setStatuts(status)
    }
     
    const renderItem = ({ item, index}) => {
        return(
            <View key={index} style={styles.itemcontainer} >
                <View key={index} style={styles.itemLogo} >
                 <Image style={styles.itemImage} />
                </View>

                <View key={index} style={styles.itemLogo} >
                 <Image style={styles.itemImage} 
                    source={{uri: 'https://assets-fr.imgfoot.com/media/cache/1200x900/cristiano-ronaldo-60509ce0c1689.jpg'}}
                 />
                </View>

                <View style={styles.itemBody} >
                    <Text style={styles.itemName} >{item.name}</Text>
                </View>
                
                <View style={styles.itemStatut} >
                    <Text style={styles.itemStatut} >{item.status}</Text>
                </View>
            </View>
        )
    }

    return(
        <SafeAreaProvider style={styles.container}>
            <View style={styles.listTab}>
                {
                    listTab.map(e => (
                        <TouchableOpacity style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                            onPress={() => setStatutsFiler(e.status)}
                        >
                            <Text style={styles.textTab, status === e.status && styles.textTabActive}>{e.status}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <FlatList
                data={data}
                keyExtractor={(e, i) => i.toString()}
                renderItem={renderItem}
            />
        </SafeAreaProvider>
    )
}

export default TextHome;

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      
    },
    listTab: {
        flexDirection:'row',
        alignSelf:'center',
        marginBottom:20,
        backgroundColor:'red'
    },
    btnTab: {
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'#EBEBEB', 
        padding:10,
        justifyContent:'center',
    },
    textTab: {
        fontSize:15,
        color:'black'
    },
    btnTabActive: {
        backgroundColor:'#E6836D'
    },
    textTabActive: {
        color:'#fff'
    },
    itemcontainer :{
        flexDirection:'row',
        paddingVertical:15,
    },
    itemLogo :{
         padding:10,
        
    },
    itemImage :{
         width:50,
         height:50,
    },
    itemBody :{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center'
    },
    itemName : {
        fontWeight:'bold',
        fontSize:16,
    },
    itemStatut :{
        backgroundColor:'green',
        paddingHorizontal:10,
        justifyContent:'center', 
        right:10,
    }
})