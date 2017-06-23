import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';


export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange(text) {
    this.props.onChange;
    this.setState({text:  + text})
  }

  render() {
    return (
      <View style={{padding: 5}}>
        <TextInput
          style={{height: 40}}
          placeholder="Entrez le nom d'unce recette ou un ingrédient"
          onChangeText={this.props.onChange} />
      </View>
    );
  }
}
