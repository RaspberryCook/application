import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ActivityIndicator,
  ListView,
  Text
} from 'react-native';
import Title from './components/Title';
import Recipes from './components/Recipes';

export default class raspberry_cook extends Component {

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Title name='Raspberry Cook' />
        <Recipes />
      </View>
    );
  }
}



AppRegistry.registerComponent('raspberry_cook', () => raspberry_cook);
