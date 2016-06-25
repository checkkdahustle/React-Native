import React, { Component } from 'react';
import { AsyncStorage, ScrollView, ListView, Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Live from '../components/Live';
import api from '../utilities/api';

const nflTeamData = require('../utilities/nflTeams.json');
const nflTeams = nflTeamData.nflTeams;
const nflTeamDataMap = {};
nflTeams.forEach((playerList) => {
  if(!nflTeamDataMap[playerList.conference]) {
    nflTeamDataMap[playerList.conference] = [];
  }
  nflTeamDataMap[playerList.conference].push(playerList);
});


export default class PlayerList extends Component {
  constructor(props){
    super(props);
      this.ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
       });
      this.state = {
        error: '',
        nflTeams: nflTeamDataMap
      }
  }

  componentWillMount(){
    console.log(this.props.data);
    let data = this.props.data;
    this.setState({
      dataSource: this.ds.cloneWithRowsAndSections(data)
    });
  }

  renderRow(playerList){
    const goTopage = () => Actions.main({teamkey: playerList.searchKey})
    return(
      <View>
        <TouchableHighlight
        onPress={(goTopage)}
        style={{backgroundColor: '#333333'}}>
          <Text style={{color: '#999999', fontSize: 20}}>{ playerList.teamName }</Text>
        </TouchableHighlight>
      </View>
    )
  }
  onTeamPress(playerList){
    console.log("onTeamPress");
      let PickedTeam = playerList.Team;
      Actions.main({
        teamkey: PickedTeam
      })
  }

  renderSectionHeader(sectionData, conference) {
    return(
      <View>
        <Text>{conference}</Text>
      </View>
    )
  }
  render(){
    console.log("PlayerList: ", this.props);
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
         />
      </View>
    )
  }//render
}//close class 'PlayerList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerColor: {
    backgroundColor: '#c9c000'
  },
  containerWidth:{
    width: 400
  },
  containerheight: {
    height: 75
  },
  textColor: {
    color: '#fff',
  },
  largeText: {
    fontSize: 25,

  },
  LiveTextColor: {
    color: '#ee083a',

  },
  LiveTextWeight: {
    fontWeight: 'bold'
  },
  LiveTextPaddingLeft: {
    paddingLeft: 20
  },
  marginTopText: {
    marginTop: 20
  }
});// styles
