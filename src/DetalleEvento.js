/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  AppRegistry,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  Button,
  Alert,
  color,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Entypo';

import ArtistBox from './ArtistBox'

import {getEven} from './api-Eventos'

export default class DetalleEvento  extends Component{


  
  render(){
    let eventos=this.prop.eventos
    //console.disableYellowBox = true;
    console.warn('eventos',eventos)

    return(
      
      <View style={styles.contenedor}>

        <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" size={30} color="white"/> 
          </TouchableOpacity>
          </View>
          
       <FlatList
       data={this.state.eventos}
       renderItem={({item})=><ArtistBox data={item}/>}  
      />
      
      </View>
      
    );
  }
}

const styles= StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor: '#134379',
  },
  dis:{
    color:'white',
    fontSize:15,
    margin:5,
    fontWeight: 'bold'
  }
})
  