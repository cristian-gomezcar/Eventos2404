
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppRegistry,
  Image,
  FlatList,
  Button,
  Alert,
  color,
  TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class ArtistBox extends Component{  


  render(){
    const {imagen,nombre,hora,fecha,lugar,organizadores}=this.props.data
    return(

        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: imagen}}/>

          <View style={styles.info}>
            <View  style={{marginTop:5}}>
            <Text style={styles.name}>Nombre:</Text>
            <Text style={styles.des}>{nombre}</Text>
            </View>

            <View style={{marginTop:10}}>
            <Text style={styles.name}>Organizadores:   </Text>
            <Text style={styles.des}> {organizadores}</Text>
            </View>
         
          

          </View>

        </View>
      
    );
  }
}

const styles= StyleSheet.create({
  artistBox:{
    backgroundColor:'white',
    flexDirection:'row-reverse',
    margin:3
  },
  image:{
    width:150,
    height:121
  },
  info:{
    flex:1,
    margin:5,
  },
  name:{
    fontWeight:'bold',
    fontFamily:'Times New Roman',
    fontSize:15
  },
  des:{
    marginLeft:40,
    fontFamily:'Times New Roman'
  }

})
  