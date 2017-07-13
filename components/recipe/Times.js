import React from 'react';

import {
  View
} from 'react-native';

import Time from './Time';

export default class Times extends React.Component {

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Time name="préparation" backgroundColor='red'/>
        <Time name="cuisson" backgroundColor='yellow'/>
        <Time name="réfrigération" backgroundColor='blue'/>
        <Time name="repos" backgroundColor='red'/>
      </View>
    );
  }
}
