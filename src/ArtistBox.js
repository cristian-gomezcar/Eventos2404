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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Entypo';

export default class ArtistBox extends Component{  

  saludo=()=>{Alert.alert("Hola")}

  render(){
    const {imagen,nombre,hora,fecha,lugar,organizadores,likes,comments}=this.props.data
    return(
      <TouchableOpacity>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: imagen}}/>

          <View style={styles.info}>
          <Text style={styles.name}>Nombre:              {nombre}</Text>
          <Text style={styles.name}>Organizadores:   {organizadores}</Text>
          <Text style={styles.name}>Fecha:                  {fecha}</Text>
          <Text style={styles.name}>Hora:                    {hora}</Text>
          <Text style={styles.name}>Lugar:                  {lugar}</Text>

          </View>

        </View>
        </TouchableOpacity>
      
    );
  }
}

const styles= StyleSheet.create({
  artistBox:{
    backgroundColor:'white',
    flexDirection:'row',
    margin:3
  },
  image:{
    width:150,
    height:150
  },
  info:{
    flex:1,
    justifyContent:'center',
    margin:13
  },

})
  