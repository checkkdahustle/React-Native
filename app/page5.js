import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import Header from './components/Header';

class Fifth extends Component {

  buttonBack(){
    this.props.navigator.pop();
  }

  render(){

    console.log("title: ", this.props.title);

    return (
      <View style={styles.container}>
        <Header
          title={this.props.title}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.buttonBack.bind(this)}
          >
            <Text style={styles.buttonText}>Back to Main</Text>
          </TouchableHighlight>
        <Text style={styles.text}>This fifth component is TouchableHighlight </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'red',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050',
  },
  buttonText: {
    color: '#fff'
  }
});

module.exports = Fifth;
