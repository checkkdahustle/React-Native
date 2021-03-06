import React, { Component } from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import Header from './components/Header';
import Button from './components/Button';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }//close constructor

  buttonPress(){
    this.props.navigator.push({
      id: 'Second'
    })
  }//close buttonPress

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Header
          title={this.props.title} />

          <Button navigator={this.props.navigator} componentType="Second" />
          <Button navigator={this.props.navigator} componentType="Third" />
          <Button navigator={this.props.navigator} componentType="Fourth" />
          <Button navigator={this.props.navigator} componentType="Fifth" />
          <Button navigator={this.props.navigator} componentType="Sixth" />
        </View>
      </View>

    )//return
  }// render
}//close class 'Main'


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

module.exports = Main;
