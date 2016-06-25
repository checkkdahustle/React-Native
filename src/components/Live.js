import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Live extends Component {
  render(){
    return (
      <View>
        <Text style={[styles.largeText, styles.LiveTextColor, styles.LiveTextWeight]}> Live </Text>
      </View>
    )
  }//render
}//close class 'Live'

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerColor: {
    backgroundColor: '#c9c000'
  },
  containerWidth:{
    width: 400
  },
  containerheight: {
    height: 75
  },
  textColor: {
    color: '#fff',
  },
  largeText: {
    fontSize: 25,

  },
  LiveTextColor: {
    color: '#ee083a',

  },
  LiveTextWeight: {
    fontWeight: 'bold'
  },
  LiveTextPaddingLeft: {
    paddingLeft: 20
  },
  marginTopText: {
    marginTop: 20
  }
});// styles
