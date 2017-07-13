import React from 'react';

import {
  View
} from 'react-native';

import Time from './Time';

export default class Times extends React.Component {

  render() {

    return (
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Time name="préparation" backgroundColor='red' value={this.props.times.baking}/>
        <Time name="cuisson" backgroundColor='yellow' value={this.props.times.cooking}/>
        <Time name="réfrigération" backgroundColor='blue' value={this.props.times.cooling}/>
        <Time name="repos" backgroundColor='red' value={this.props.times.rest}/>
      </View>
    );
  }
}
