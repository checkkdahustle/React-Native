import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

import Header from './components/Header';

class Third extends Component {

  buttonBack(){
    this.props.navigator.pop();
  }//close buttonBack

  render(){

    console.log("title: ", this.props.title);

    return (
      <View style={styles.container}>
        <Header
          title={this.props.title}
          />
          <TouchableNativeFeedback
            style={styles.button}
            onPress={this.buttonBack.bind(this)}
          >
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={styles.buttonText}>Back to Main</Text>
          </View>
          </TouchableNativeFeedback>

        <Text style={styles.text}>This is the third components</Text>

      </View>
    )//return
  }//close render
}//close component class 'Third'

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

module.exports = Third;
