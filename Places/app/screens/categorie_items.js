import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { getList } from "../data/MockDataAPI";
export default class CategoriesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
    };
  };

  constructor(props) {
    super(props);
  }

  onPressList = (item) => {
    this.props.navigation.navigate("Categorie_items", { item });
  };
  renderList = ({ item }) => (
    <TouchableHighlight underlayColor="" onPress={() => this.onPressList(item)}>
      <View style={styles.container}>
        <Image /*style={styles.photo}*/ source={{ uri: item.photo_url }} />
        <Text /*style={styles.title}*/>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("category");
    const CategoriesArray = getList(item.id);

    return (

      <LinearGradient
        colors={['white', '#6B662D']}
        style={styles.image_view}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >

      
          <Image
            style={styles.categoriesPhoto}
            source={{ uri: item.photo_url }}
          ></Image>
        
        <View style={{ flex: 3}}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={CategoriesArray}
            renderItem={this.renderList}
            keyExtractor={(item) => `${item.listId}`}
          /></View>
       

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  image_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    bottom: -40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,

  },
  categoriesPhoto: {
    width: '100%',
    height: 100,
  },
  categoriesName: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
 
}
);


/*import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Categorie_items extends React.Component {
   
render() {

    return (

      <LinearGradient
        colors={['white', '#6B662D']}
        style={styles.image_view}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >

        <Text>Categorie items</Text>
        
    </LinearGradient>
        
    );
}
}

const styles = StyleSheet.create({
    image_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      },
      
  }
  );*/