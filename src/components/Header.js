import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';


class Header extends Component {
  render(){
    return (
      <View style={[styles.container, styles.containerWidth, styles.containerheight, styles.containerColor]}>
        <Text style={[styles.largeText, styles.textColor]}> {this.props.title} </Text>
      </View>
    )
  }//render
}//close class 'Header'

const styles = StyleSheet.create({
  container: {
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
    fontSize: 30
  },
  LiveTextColor: {
    color: 'red'
  }
});// styles
module.exports = Header;
