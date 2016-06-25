import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


import Live from '../components/Live';


export default class Team_view extends Component {
  constructor(props){
    super(props);
    this.state = {
      followedTeams: [],
      teamNews: null,
      team: null
    }
  }//close constructor

  shouldComponntUpdate(nextState){
    console.log("showThis", nextState.team !== this.state.team);
    return nextState.team !== this.state.team;
  }

  componentWillReceiveProps(nextProps){
    console.log('PickedTeam', this.props.teamkey);
    console.log('Next', nextProps.teamkey);

    const team = nextProps.teamkey;
    this.setState({ team });


  }

  render(){
    console.log("team props",this.props.teamkey);
    console.log('FollowedTeams',this.state.followedTeams);

    if(this.state.followedTeams.length == 0) {
      return (
        <View style={styles.container}>

          <View style={styles.LiveStyle}>
            <Live style={styles.LiveStyle} />
          </View>

          <View style={styles.container}>
            <Text style={[styles.NotFollowTeamMsg, styles.centerTeamMsg]}>
              You Aren’t Following Any Teams Yet
            </Text>


              <Text
                style={[styles.followTeamText, styles.centerTeamLink]}
                onPress={() => Actions.followteam()}>
                  Follow a Team
              </Text>

          </View>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>

          <View style={styles.LiveStyle}>
            <Live style={styles.LiveStyle} />
          </View>

          <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={() => Actions.team()}>
              <Text style={styles.buttonText}>Add another team</Text>
            </TouchableHighlight>
          </View>

        </View>
      )
    }
  }
}

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
  followTeamText: {
    color: '#666666',
    fontSize: 16
  },
  NotFollowTeamMsg: {
    color: '#a2a2a2',
    fontSize: 20
  },
  button: {
    flex: 3,
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
