import React, { Component } from 'react';

import {

  Text,
  View,
  StyleSheet,
  // TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Header from './components/Header';
// import ImageEx from './components/image';

class Second extends Component {

  buttonBack(){
    this.props.navigator.pop();
  }//close buttonBack

  render(){

    console.log("title: ", this.props.title);

    return (
      <View style={styles.container}>
        <Header
          title={this.props.title} />

          <TouchableOpacity
            style={styles.button}
            onPress={this.buttonBack.bind(this)} >

            <Text style={styles.buttonText}>Back to Main</Text>
          </TouchableOpacity>
        <Text style={styles.text}>This second components has TouchableOpacity </Text>
        </View>
  // <TouchableHighlight
  //         onPress={this._onPressButton}>
  //
  //             <Text>Something</Text>
  //         </TouchableHighlight>


// Trying to add pic icon

    )//return
  }//close render
}//close component class 'Second'

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
		// height: 38,
  },
  buttonText: {
    color: '#fff'
  },
	buttonHeight: {
		height: 38,
	}
});

module.exports = Second;
