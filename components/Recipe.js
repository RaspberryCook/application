import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';

import Times from './recipe/Times';


export default class Recipe extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.recipeData.name,
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.picture}
          source={{uri: 'https://raspberry-cook.fr' + params.recipeData.image.url }}
        />
        <Times times={params.recipeData}/>
        <Text style={styles.text}>{ params.recipeData.description }</Text>
        <Text style={styles.subTitle}>Ingrédients</Text>
        <Text style={styles.text}>{ params.recipeData.ingredients }</Text>
        <Text style={styles.subTitle}>Préparation</Text>
        <Text style={styles.text}>{ params.recipeData.steps }</Text>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    padding: 10,
    flex: 1
  },
  picture: {
    width: 200,
    height: 200,
    backgroundColor: "#cccccc"
  },
  subTitle: {
    fontSize: 22,
    color: '#96281B'
  },
  text: {
    fontSize: 18
  }
});
