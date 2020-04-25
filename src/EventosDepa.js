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
  TouchableOpacity,
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

export default class EventosDepa  extends Component{

    

state={
    eventos:[]
  }

  
  componentDidMount(){

    //const { otherParam }=this.props.route.params;
    //const { itemId }=this.props.route.params;
    //let nombre=JSON.stringify(itemId);
    //let direccion=JSON.stringify(otherParam);

    
    let URL='https://rijhn09.pythonanywhere.com/evento/mostrar/?format=json'

    fetch(URL)
    .then(response=>response.json())
    .then(eventos=>eventos.map(data=>{
     return{
         nombre:data.nombre,
         imagen:"https://imagenes.universia.net/gc/net/images/educacion/s/se/sem/semana_de_las-juventudes_2019.jpg",
         fecha: data.fecha,
         hora:  data.hora,
         lugar: data.lugar,
         organizadores: data.organizadores,
         likes:200,
         comments:200
 
     }
 }))
 .then(data=>this.setState({eventos:data}))
  }
  
  render(){

    let eventos=this.state.eventos
    //console.disableYellowBox = true;
    console.warn('verificacion222',eventos)

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
  