import React from 'react';
import {
  AppRegistry
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import Home from './components/Home';

const raspberry_cook = StackNavigator({ Home: { screen: Home },  });

AppRegistry.registerComponent('raspberry_cook', () => raspberry_cook);
