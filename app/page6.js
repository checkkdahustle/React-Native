import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';


import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ProgressViewIOS,

} from 'react-native';

import Header from './components/Header';

class Sixth extends Component {

  constructor(props){
		super(props);
		this.state = {
      mixins: [TimerMixin],
      progress: 0,
		}
	}//close constructor


  componentDidMount() {
    this.updateProgress();
  }

  updateProgress() {
    progress = this.state.progress + 0.01;
    this.setState({ progress });
    // this.requestAnimationFrame(() => this.updateProgress());
  }


  getProgress(offset) {
    progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  }

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

					<ProgressViewIOS style={styles.progressView} progress={this.getProgress(0.7)}/>
	        <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={this.getProgress(0.2)}/>
	        <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={this.getProgress(0.4)}/>
	        <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={this.getProgress(0.9)}/>
	        <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={this.getProgress(0.8)}/>


          <TouchableHighlight
            onPress={this.buttonBack.bind(this)} >

            <View style= {styles.button} >
              <Text style={styles.buttonText}>
                Back to Main
              </Text>
            </View>
          </TouchableHighlight>

        <Text style={styles.text}>
          This fifth component is ProgressViewIOS
        </Text>
      </View>
    )//return
  }//close render
}//close component class 'Sixth'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    backgroundColor: 'transparent',
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
  textMargin: {
    marginBottom: 75,
  },
  progressView: {
    marginTop: 20,
    marginBottom: 30,
    width: 340,
  }
});

module.exports = Sixth;
