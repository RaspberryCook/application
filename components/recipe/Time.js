import React from 'react';

import {
  View,
  Text
} from 'react-native';


export default class Time extends React.Component {

  render() {
    if(this.props.value == "0"){
      return null;
    }else{
      return(
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{ this.props.name } :</Text>
          <Text style={{fontSize: 16}}>{ this.props.value }</Text>
        </View>
      );
    }
  }
}
