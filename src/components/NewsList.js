import React, { Component } from 'react';
import { AsyncStorage, ScrollView, ListView, Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import News_view from '../containers/News_view';


export default class NewsList extends Component {
  constructor(props){
    super(props);
      const ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
       });
      this.state = {
        dataSource: this.ds.cloneWithRowsAndSections(props.ListData)
      }
  }

  componentWillReceiveProps(nextProps){
    const dataSource = this.state.dataSource.cloneWithRowsAndSections(nextProps.ListData);
    this.setState({dataSource});
  }


  componentWillMount(){
    // console.log("whats This: ",this.props.ListData);
    let data = this.props.ListData;
    this.setState({
      dataSource: this.ds.cloneWithRowsAndSections(data)
    });
  }
/*
  renderRow(teamList){
    return(
      <View>
        <TouchableHighlight style={{backgroundColor: '#333333'}}>
          <Text style={{color: '#999999', fontSize: 20}}>{ teamList.teamName }</Text>
        </TouchableHighlight>
      </View>
    )
  }

  renderSectionHeader(sectionData, conference) {
    return(
      <View>
        <Text>{conference}</Text>
      </View>
    )
  }
*/
  render(){
    // console.log("TopNewsfrom_CustomView: ", this.props);
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
         />
      </View>
    )
  }//render
}//close class 'NewsList'

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
