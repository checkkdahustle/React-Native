/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  Slider,
  StyleSheet,
  Text,
  View
} from 'react-native';

class SliderExample extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: 0
    }
  }
  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>

      <Slider  style={styles.slider}
        maximumValue = {
          500
        }
        minimumValue = {
          0
        }
        step = {
          .1
        }
      onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
} // SliderExample


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9de',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  slider: {
    width: 374
  }
});

module.exports = SliderExample;
