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
  AsyncStorage
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import ArtistBox from './ArtistBox'
import { AccessToken } from 'react-native-fbsdk';

export default class HomeView  extends Component{

  constructor(){
 
    super();
 
    global.SampleVar = 'asdasd';
    global.id = '';
  }

    state={
    eventos:[],
  
  }

 async componentDidMount(){
    var { nombre }=this.props.route.params;
    var token=JSON.stringify(nombre);
    let Token=JSON.parse(token)
    global.SampleVar=Token

     console.warn('11111',Token);
           fetch(
           "https://rijhn09.pythonanywhere.com/evento/mostrar/?format=json",
           {
           method: "GET",
           headers: {
             'authorization': `Token ${Token}`,  
           },
            }
           )   
           //.then(response=>response.json())
           //.then(data=>{
            // console.warn('data',data.nombre)
          // })
          .then(response=>response.json())
           .then(eventos=>eventos.map(data=>{
            return{
                id:data.id,
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

  handlePress(data)
  {
    this.props.navigation.navigate('Detalle',{ide:data.id, nombre:data.nombre, hora:data.hora, fecha:data.fecha, lugar:data.lugar,organizadores:data.organizadores,imagen:data.imagen});
  }
  
  
  render(){
    

    let eventos=this.state.eventos
    //console.disableYellowBox = true;
    console.warn('ttst',eventos)

    

    return(
      
      <View style={styles.contenedor}>

        <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" size={30} color="white"/> 
          </TouchableOpacity>
          </View>

       <FlatList
       data={this.state.eventos}
       renderItem={({item})=>{
         return(
          <TouchableOpacity onPress={() => this.handlePress(item)}>
            <ArtistBox data={item}/> 
          </TouchableOpacity>
         )
      }}  
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
  