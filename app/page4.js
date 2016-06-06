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

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }//close constructor

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
          <View>
            <TextInput
              style={styles.InputText}
              onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
              autoCapitalize="none"
              placeholder="Enter text in this Input"
            />
            <TextInput
              style={styles.InputText}
              onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
              autoCapitalize="none"
              placeholder="Enter some more text in this Input"
            />
            <TextInput
              style={styles.InputText}
              onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
              autoCapitalize="none"
              placeholder="Enter ... you get the point"
            />
          </View>

          <TouchableHighlight
            onPress={this.buttonBack.bind(this)} >

            <View style= {styles.button} >
              <Text style={styles.buttonText}>
                Back to Main
              </Text>
            </View>
          </TouchableHighlight>


        <Text style={styles.text}>
          This fourth component is a TextInput
        </Text>
      </View>
    )//return
  }//close render
}//close component class 'Fourth'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  InputText: {
    alignItems: 'center',
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: .5,
    marginBottom: 25,

  }
});

module.exports = Fourth;
