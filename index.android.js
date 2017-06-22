import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import Home from './components/Home';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';


const App = StackNavigator({
  Recipes: { screen: Recipes },
  Recipe: { screen: Recipe },
});




export default class raspberry_cook extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <App  />
      </View>
    );
  }
}


AppRegistry.registerComponent('raspberry_cook', () => raspberry_cook);
