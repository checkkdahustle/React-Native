/**
 * Clay C. Cyprien
 * @checkkdahustle
 * Sample React-Native App
 * https://github.com/checkkdahustle/React-Native
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';


import Main from './app/Main';
import Second from './app/page2';
import Third from './app/page3';
import Fourth from './app/page4';
import Fifth from './app/page5';
import Sixth from './app/page6';



class AwesomeProject extends Component {

  navigatorRenderScene(route, navigator){
    navigator = navigator;
    switch (route.id) {
      case 'Main':
        return(<Main navigator={navigator} title='Main' />);
      case 'Second':
        return(<Second navigator={navigator} title='Second' />);
      case 'Third':
        return(<Third navigator={navigator} title='Third'/>);
      case 'Fourth':
        return(<Fourth navigator={navigator} title='Fourth'/>);
      case 'Fifth':
        return(<Fifth navigator={navigator} title='Fifth' />);
      case 'Sixth':
        return(<Sixth navigator={navigator} title='Sixth' />);
    }//switch

  }//close class 'navigatorRenderScene'

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          id: 'Main'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );//return
  }//close render

}// close class 'AwesomeProject'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
