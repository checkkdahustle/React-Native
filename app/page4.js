import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';

import Header from './components/Header';

class Fourth extends Component {

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
          <TextInput
            autoCapitalize="none"
            placeholder="Enter text in this TextInput"
            style={styles.InputText}
            onPress={this.buttonBack.bind(this)}
          >
          </TextInput>

          <Text style={styles.buttonText}>Back to Main</Text>
        <Text style={styles.text}>This fourth component is a TextInput</Text>

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
  },
  InputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

module.exports = Fourth;
