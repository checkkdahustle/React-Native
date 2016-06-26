import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import {
  Text,
  ListView,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import api from '../utilities/api';
import Live from '../components/Live';
import NewsList from '../components/NewsList'



export default class News_view extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
     });
    this.state = {
      TopNews: []
    }
  }


  componentWillMount(){
    console.log("TopNew1", this.state.TopNews);

    api.getAllNews().then((res) => {
      this.setState({
        TopNews: res
      });
      }).then((res) => {
        let news = this.state.TopNews;
        this.setState({
          dataSource: this.ds.cloneWithRowsAndSections(news)
        });
        console.log("TopNew2", this.state.TopNews);
      });
  };

  render(){
    console.log('TopNews', this.state.TopNews);
    if(this.state.TopNews.length == 0){
      return(
        <View style={styles.container}>

          <View style={styles.LiveStyle}>
            <Live style={styles.LiveStyle} />
          </View>

          <View style={styles.container}>
            <Text style={[styles.NotFollowTeamMsg, styles.centerTeamMsg]}>
              Your not connected to the api.
            </Text>
          </View>
        </View>
      )
    } else {
      return (
          <View style={styles.container}>
            <NewsList
              ListData={this.state.TopNews}


            />
          </View>
      )
    }
  }//close render
}//close component class 'News_view'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d5629'
  },
  LiveStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    marginTop: 80
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
  }
});

// module.exports = News_view;
