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
import Title from './components/Title';
import Recipes from './components/Recipes';






export default class raspberry_cook extends React.Component {

  navigation = "alex";

  static navigationOptions = { title: 'Welcome', };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Title name='Raspberry Cook' />

        <Recipes />
        <Button title="Go to Jane's profile" onPress={() => navigate('Profile', { name: 'Jane' }) } />
      </View>
    );
  }
}



const App = StackNavigator({ Home: { screen: raspberry_cook },  });


AppRegistry.registerComponent('raspberry_cook', () => raspberry_cook);
