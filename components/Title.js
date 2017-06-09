import React from 'react'

import {AppRegistry, StyleSheet, Text, View, ActivityIndicator, ListView } from 'react-native'

export default class Title extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});