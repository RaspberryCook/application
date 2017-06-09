import React from 'react'
import {
  AppRegistry,
  ActivityIndicator,
  StyleSheet,
  ListView,
  Text,
  View,
  Image
} from 'react-native';

export default class Recipes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://raspberry-cook.fr/recipes.json')
      .then((response) => response.json())
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ (rowData) =>
            <View>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://raspberry-cook.fr' + rowData.image.url }}
              />
              <Text style={styles.recipe}>{rowData.name}</Text>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recipe: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});
