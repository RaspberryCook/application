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

 import SearchForm from './SearchForm';
import Recipe from './Recipe';


export default class Recipes extends React.Component {

  static navigationOptions = { title: 'Recettes', };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      url: 'https://raspberry-cook.fr/recipes.json'
    };
  }


  fetchRecipes() {
    this.setState({
      isLoading: true
    });

    return fetch(this.state.url)
    .then((response) => response.json() )
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    return this.fetchRecipes();
  }



  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <SearchForm />
          <ActivityIndicator />
        </View>
      );
    }

    const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <SearchForm onChange={(text) => {
          this.setState({url: "https://raspberry-cook.fr/recipes?format=json&name=" + text});
          this.fetchRecipes();
        }} />
        <ListView
          dataSource={this.state.dataSource}
          style={styles.list}
          renderRow={ (rowData) =>
            <View style={styles.figure}>
              <Image
                style={styles.picture}
                source={{uri: 'https://raspberry-cook.fr' + rowData.image.url }}
                defaultSource={require('./assets/default.png')} />
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
