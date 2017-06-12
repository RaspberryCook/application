import React from 'react';
import {
  View,
  Text
} from 'react-native';


export default class Recipe extends React.Component {

  static navigationOptions = { title: 'One recipe', };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>One recipe</Text>
      </View>
    );
  }
}
