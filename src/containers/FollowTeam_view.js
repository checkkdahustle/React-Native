import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, ScrollView, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Live from '../components/Live';
import TeamList from '../components/TeamList';
import api from '../utilities/api';

const nflTeamData = require('../utilities/nflTeams.json');
const nflTeams = nflTeamData.nflTeams;
const nflTeamDataMap = {};
nflTeams.forEach((team) => {
  if(!nflTeamDataMap[team.conference]) {
    nflTeamDataMap[team.conference] = [];
  }
  nflTeamDataMap[team.conference].push(team);
});


export default class Main extends Component {

  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 });
    this.state = {
      error: '',
      nflTeams: nflTeamDataMap
    }

  }//close constructor

  // shouldComponentUpdate() {
  //   api.getTeamNews(this.state.query).then((res) => {
  //     AsyncStorage.setItem('teamNews', JSON.stringify(res), () => {
  //       AsyncStorage.getItem('teamNews', (error, results) => {
  //         let teamNewsObj= JSON.parse(results);
  //         this.setState({
  //           teamNews: teamNewsObj
  //         })
  //       })
  //     })
  //   })
  // }//close buttonPress

  render(){
    console.log('AppJS_Obj:', this.props);
      return(
        <View style={styles.container}>

          <View style={styles.teamsContainer}>
            <ScrollView>
              <TeamList data={this.state.nflTeams} />
            </ScrollView>
          </View>

        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d5629'
  },
  teamsContainer: {
    flex: 1,
    marginTop: 100
  },
  LiveStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    marginTop: 80

  },
  followTeamText: {
    color: '#666666',
    fontSize: 16
  },
  NotFollowTeamMsg: {
    color: '#a2a2a2',
    fontSize: 20
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050',
  },
  buttonText: {
    color: '#fff'
  },
  LiveTextColor: {
    color: 'red'
  },
  text: {
    color: 'red',
  },
  textInput: {
    height:45,
    borderWidth: 1
  },
  centerTeamMsg: {
    width: 200,
    justifyContent: 'center',
    flex: 2,
    // alignText: 'center'
  },
  centerTeamLink: {
    width: 150,
    flex: 9,
  }
});
