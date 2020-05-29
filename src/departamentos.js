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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class departamentos extends Component{

  render(){
    console.warn('Prubasndlkaj',global.SampleVar);
    return(
      <ScrollView style={{backgroundColor:'#134379'}}>
            <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" size={30} color="white"/> 
          </TouchableOpacity>
          </View>
        <View style={styles.contenedor}>
          <View style={styles.listado}>
            
            <Button  title="San Marcos" onPress={() =>this.props.navigation.navigate('depas',{nombre:'San Marcos'})}/>
          </View>
          <View style={styles.listado}>
            <Button  title="Baja Verapaz" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="Chimaltenango" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Chiquimula" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="El Progreso" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Escuintla" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="Guatemala" onPress={() =>this.props.navigation.navigate('depas',{nombre:'Guatemala'})} />
          </View>
          <View style={styles.listado}>
            <Button  title="Huehuetenango" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="Izabal" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Jalapa" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="Jutiapa" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Petén" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Quetzaltenango" onPress={() =>this.props.navigation.navigate('depas',{nombre:'Quetzaltenango'})} />
          </View>
          <View style={styles.listado}>
            <Button  title="Quiché" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Retalhuleu" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Sacatepéquez" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="San Marcos" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Santa Rosa" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Sololá" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Suchitepéquez" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Totonicapán" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Zacapa" onPress={this.saludo} />
          </View>
        </View>
      </ScrollView>   
    )
  }
}

const styles= StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:"#000080"
  },
  titulo:{
    flex:1,
    alignItems:"center"
  },
  listado:{
    flex: 1,
    marginTop:1.5,
    borderRadius:20
  },
  tit:{
    color:"white",
    fontWeight: 'bold',
    fontSize:15,
  }
})
  