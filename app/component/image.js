import React, { Component } from 'react';
import {
	Image,
  Slider,
  StyleSheet,
  Text,
  View
} from 'react-native';



class ImageExample extends Component {

	render() {
    return (
			<View>
	      // <Image
	      //   style={styles.icon}
	      //   source={require('./myIcon.png')}
	      // />
	      <Image
	        style={styles.logo}
	        source={uri: 'http://placehold.it/350x150'}
	      />
	    </View>
    );
  }

}

const styles = StyleSheet.create({
	logo: {
		width: 350,
		height: 150,

	}
});
module.exports = ImageExample;
