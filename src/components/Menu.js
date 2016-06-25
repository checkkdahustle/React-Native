import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';


class Menu extends Component {
  render(){
    return (
      <View>
        <Text style={[styles.largeText, styles.LiveTextColor]}> menu </Text>
      </View>
    )
  }//render
}//close class 'Menu'

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
    fontSize: 22
  },
  LiveTextColor: {
    color: 'red'
  }
});// styles
module.exports = Menu;
