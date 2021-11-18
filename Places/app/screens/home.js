import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableHighlight, TextInput, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { categories } from '../data/dataArrays';

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',

  });

  constructor(props) {
    super(props);
  }
  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('Categorie_items', { category, title });
  };

  renderCategory = ({ item }) => (
    
      <View style={styles.categoriesItemContainer}>
        <TouchableHighlight underlayColor='' onPress={() => this.onPressCategory(item)}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        </TouchableHighlight>
        <Text style={styles.categoriesName}>{item.name}</Text>
      </View>
    
  );
//start search
   state = {
    searchBarFocused: false
   }

//end search

  render() {

    return (
<View style={{ flex: 1 }}>
     <StatusBar 
       backgroundColor = "#d0cfbe"
       barStyle = 'dark-content'
     />
      <LinearGradient
        colors={['white', '#6B662D']}
        style={styles.image_view}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={{ height: 80, width: '90%' , backgroundColor: 'transparent', justifyContent: 'center', paddingHorizontal: 5 }}>

          <Animatable.View animation="slideInRight" duration={500} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius :12 }}>
            <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
              <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24 }} />
            </Animatable.View>
            <TextInput placeholder="Search" style={{ fontSize: 24, marginLeft: 15, flex: 1 }} />
          </Animatable.View>

        </View>
     
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
        


      

      </LinearGradient>
     </View>
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
    width: 100,
    height: 100,
    borderRadius: 125
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

//export default Home;