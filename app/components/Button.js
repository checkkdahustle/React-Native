import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }//constructor

  buttonPress(){
    this.props.navigator.push({
      id: this.props.componentType
    })
  }//close buttonPress

  render(){
    console.log("Navigator from Buttons: ", this.props.navigator);
    return (
      <View style={styles.container}>

        <TouchableHighlight
          onPress={this.buttonPress.bind(this)}
        >
          <Text style={styles.text}>{this.props.componentType}</Text>

        </TouchableHighlight>

      </View>
    )
  }//render
}//close class 'Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 26
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

module.exports = Button;
