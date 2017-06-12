import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet
} from 'react-native';


export default class Recipe extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.recipeData.name,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={{flex: 1}}>
        <Image
          style={styles.picture}
          source={{uri: 'https://raspberry-cook.fr' + params.recipeData.image.url }}
        />
        <Text style={styles.text}>{ params.recipeData.description }</Text>
        <Text style={styles.text}>{ params.recipeData.ingredients }</Text>
        <Text style={styles.text}>{ params.recipeData.steps }</Text>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  picture: {
    width: 200,
    height: 200
  },
  text: {
    fontSize: 18
  }
});
