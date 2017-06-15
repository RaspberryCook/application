import React from 'react'
import {
  AppRegistry,
  ActivityIndicator,
  Button,
  StyleSheet,
  ListView,
  Text,
  View,
  Image
} from 'react-native';
import {
  StackNavigator,
 } from 'react-navigation';

import Recipe from './Recipe';


export default class Recipes extends React.Component {

  static navigationOptions = { title: 'Recettes', };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: 1
    }
    this.fetchRecipes();
  }


  fetchRecipes() {
    return fetch('https://raspberry-cook.fr/recipes?page=' + this.state.page + '&format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState(previousState => {
        previousState.isLoading = false;
        previousState.dataSource = ds.cloneWithRows(responseJson);
        return previousState;
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    return this.fetchRecipes();
  }

  incrementPage() {
    this.setState(previousState => {
      previousState.page += 1;
      return previousState;
    });
    return this.state.page
  }


  setLoading(bool) {
    this.setState(previousState => {
      previousState.isLoading = bool;
      return previousState;
    });
  }


  fetchMoreRecipes() {
    this.incrementPage();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1}}>
      <Text>Page number: {this.state.page}</Text>
        <ListView
          onEndReached={this.fetchMoreRecipes.bind(this)}
          dataSource={this.state.dataSource}
          style={styles.list}
          renderRow={ (rowData) =>
            <View style={styles.figure}>
              <Image
                style={styles.picture}
                source={{uri: 'https://raspberry-cook.fr' + rowData.image.url }}
                defaultSource={require('./assets/default.png')}
              />
              <Button
                onPress={() => navigate('Recipe', {recipeData: rowData})}
                title={rowData.name}
              />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list:{

  },
  figure:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 200,
    height: 200,
    backgroundColor: "#cccccc"
  },
  label: {
    fontSize: 18,
    textAlign: 'center',
    margin: 4,
  },
});
