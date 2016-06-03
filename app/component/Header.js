import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';


class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}> {this.props.title} </Text>
      </View>
    )
  }//render
}//close class 'Header'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'red',
  },
  largeText: {
    fontSize: 52
  }
});// styles

module.exports = Header;
