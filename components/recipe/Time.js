import React from 'react';

import {
  View,
  Text
} from 'react-native';


export default class Time extends React.Component {

  render() {
    return (
      <View style={{backgroundColor: this.props.backgroundColor, height: 30,}}>
        <Text>{ this.props.name }</Text>
      </View>
    );
  }
}
