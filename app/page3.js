import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Switch
} from 'react-native';

import Header from './components/Header';

class Third extends Component {

  constructor(props){
    super(props);
    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false
    }
  }//close constructor

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

          <Switch
            style={styles.switchMargin} value={this.state.falseSwitchIsOn}
            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          />

          <Switch
            style={styles.switchMargin} value={this.state.trueSwitchIsOn}
            onValueChange={(value) =>
            this.setState({trueSwitchIsOn: value})}
          />

          <TouchableHighlight
            onPress={this.buttonBack.bind(this)}
          >
            <View style= {styles.button} >
              <Text style={styles.buttonText}>
                Back to Main
              </Text>
            </View>
          </TouchableHighlight>


        <Text style={styles.text}>
          This third component is a Switch
        </Text>
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
  switchMargin: {
    marginBottom: 75,
  }
});

module.exports = Third;
