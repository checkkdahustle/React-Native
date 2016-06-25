import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';


class Feeds extends Component {
  render(){
    return (
      <View>
        <Text style={[styles.myFeedTextSize, styles.myFeedTextColor, styles.centerThisText, styles.marginTopText]}> myFeed </Text>
      </View>
    )
  }//render
}//close class 'myFeed'

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
  myFeedTextSize: {
    fontSize: 20,

  },
  myFeedTextColor: {
    color: '#a2a2a5'
  },
  centerThisText: {
    alignSelf: 'center',
  },
  marginTopText: {
    marginTop: 20
  }
});// styles
module.exports = Feeds;
