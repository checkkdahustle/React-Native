/*
          - Clay C. Cyprien
          - @checkkdahustle
          - PLAYBOOK - The Sports React-Native App
          - https://github.com/checkkdahustle/playbook
 */

/* React, React-Native, Router-Flux, Redux */
import React, { Component } from 'react';
import { StyleSheet, Navigator, Text } from 'react-native';
import { Router, Reducer, Scene, TabBar, TabView } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

/* Components */
import TeamList from './components/TeamList';

/* Views */
import News_view from './containers/News_view';
import Team_view from './containers/Team_view';
import FollowTeam_view from './containers/FollowTeam_view';
import Players_view from './containers/Players_view';

/* Utilities */
import api from './utilities/api';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';

const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? '#ee083a' :'#000'}}>{this.props.title}</Text>
        );
    }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      teamsInfo: [],
      news: []
    }
  }

  componentWillMount() {
    api.getTeamsInfo().then((res) => {
      this.setState({
        teamsInfo: res
      })
    });


  }

  render() {
    console.log("TeamsInfo: ", this.state.teamsInfo);
    return <Provider style={styles.container} store={store}>
            <RouterWithRedux  navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>


            <Scene key="root">
                <Scene key="tabbar" tabs={true}>

                  <Scene key="main"
										component={Team_view}
										title="Team"
										icon={TabIcon}
                    teamkey={null}
										initial={true}
                    />

                    <Scene key="second"
											component={Players_view}
											title="Player"
											icon={TabIcon}/>

                    <Scene key="news"
											component={News_view}
											title="News"
											icon={TabIcon} />
                  </Scene>

                    <Scene key="followteam"
                      component={FollowTeam_view}
                      title="Follow a Team"
                      icon={TabIcon} />





              </Scene>
            </RouterWithRedux>
          </Provider>


  }// close class 'AwesomeProject'
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#4d5629'

  },
  navBar: {
    backgroundColor: '#c9c000',
  },
  navBarTitle:{
    color: "#fff"
  }
});
