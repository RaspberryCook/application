/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ActivityIndicator,
  ListView,
  Text
} from 'react-native';

import Title from './components/Title';

export default class raspberry_cook extends Component {

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
          <Title name='Raspberry Cook' />
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Title name='Raspberry Cook' />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ (rowData) => <Text>{rowData.name}</Text> }
        />
      </View>
    );
  }
}



AppRegistry.registerComponent('raspberry_cook', () => raspberry_cook);
