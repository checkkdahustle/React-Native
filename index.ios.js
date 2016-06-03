import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator
  // Text,
  // View
} from 'react-native';


// import SliderExample from './app/component/Slider';
// import ImageExample from './app/component/image';


import Main from './app/Main';
import First from './app/First';
import Second from './app/Second';
import ScrollViewDesc from './app/ScrollViewDesc';


class AwesomeProject extends Component {

  navigatorRenderScene(route, navigator){
    navigator = navigator;
    switch (route.id) {
      case 'Main':
        return(<Main navigator={navigator} title='Main' />);
      case 'First':
        return(<First navigator={navigator} title='First' />);
      case 'Second':
        return(<Second navigator={navigator} title='Second'/>);
      case 'ScrollViewDesc':
        return(<ScrollViewDesc navigator={navigator} title='Scroll View' />);
    }//switch

  }//class 'nav render Scene'

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
  } //close render

} // close class 'AwesomeProject'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
