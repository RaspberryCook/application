import React from 'react';
import {
  View,
  Text
} from 'react-native';

import Recipes from './Recipes';

export default class Home extends React.Component {

  static navigationOptions = { title: 'Raspberry Cook', };

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Recipes />
      </View>
    );
  }
}
