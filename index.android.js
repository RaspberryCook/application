import React from 'react';
import {
  AppRegistry,
  Button,
  View,
  ActivityIndicator,
  ListView,
  Text
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import Recipes from './components/Recipes';


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



const raspberry_cook = StackNavigator({ Home: { screen: Home },  });


AppRegistry.registerComponent('raspberry_cook', () => raspberry_cook);
