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

          <Text style={styles.textMargin}>
            Touch the Blue button before releasing
          </Text>

          <TouchableHighlight
            onPress={this.buttonBack.bind(this)} >

            <View style= {styles.button} >
              <Text style={styles.buttonText}>
                Back to Main
              </Text>
            </View>
          </TouchableHighlight>

        <Text style={styles.text}>
          This fifth component is TouchableHighlight
        </Text>
      </View>
    )//return
  }//close render
}//close component class 'Fifth'

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
    justifyContent: 'center',
    backgroundColor: '#07d',
    width: 340,
		height: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
  },
  textMargin: {
    marginBottom: 75,
  }
});

module.exports = Fifth;
