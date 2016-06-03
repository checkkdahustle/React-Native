import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Header from './components/Header';

class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      streetName: 'Elm',
      streetNumber: 123,
      geoLocate: {
        lat: 12345.56778,
        long: 9877.72346
      }
    }
  }


  buttonPress(){
    this.props.navigator.push({
      id: 'Second'
    })
  }

  render(){

    console.log("title: ", this.props.title);
    console.log("State: ", this.state);

    return (
      <View style={styles.container}>
        <Header
          title={this.props.title}
          />
        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonPress.bind(this)}
        >
          <Text style={styles.buttonText}>Press Here</Text>
        </TouchableHighlight>
        <Text style={styles.text}>This is the Street Name</Text>
        <Text style={styles.text}>{this.state.streetName}</Text>
        <Text style={styles.text}>{this.state.geoLocate.lat}</Text>

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
    color: 'black',
    fontSize: 52
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

module.exports = First;
