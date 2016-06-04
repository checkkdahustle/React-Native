import React, { Component } from 'react';
import {

  // Slider,
  StyleSheet,
  Text,
	Image,
  View
} from 'react-native';



class ImageEx extends Component {

	render() {
    return (
			<View>
			<Image
				style={styles.button}
				source={require('./img/icon.png')}
				/>
	    </View>
    );//return
  }//close render
}//close class 'Image'


const styles = StyleSheet.create({
	logo: {
		width: 350,
		height: 150,

	}
});
module.exports = ImageExample;
