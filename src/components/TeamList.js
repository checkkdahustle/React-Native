import React, { Component } from 'react';
import { AsyncStorage, ScrollView, ListView, Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Live from '../components/Live';
import api from '../utilities/api';

const nflTeamData = require('../utilities/nflTeams.json');
const nflTeams = nflTeamData.nflTeams;
const nflTeamDataMap = {};
nflTeams.forEach((teamList) => {
  if(!nflTeamDataMap[teamList.conference]) {
    nflTeamDataMap[teamList.conference] = [];
  }
  nflTeamDataMap[teamList.conference].push(teamList);
});


export default class TeamList extends Component {
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

  renderRow(teamList){
    const goTopage = () => Actions.main({teamkey: teamList.searchKey})
    return(
      <View>
        <TouchableHighlight
        onPress={(goTopage)}
        style={{backgroundColor: '#333333'}}>
          <Text style={{color: '#999999', fontSize: 20}}>{ teamList.teamName }</Text>
        </TouchableHighlight>
      </View>
    )
  }
  onTeamPress(teamList){
    console.log("onTeamPress");
      let PickedTeam = teamList.Team;
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
    console.log("TeamList: ", this.props);
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
}//close class 'TeamList'

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
