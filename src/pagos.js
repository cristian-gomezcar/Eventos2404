
import React, { Component,useState } from 'react';
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
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class pagos extends Component{ 

    constructor(){
        super();
            global.nit = '';
            global.asiento
      }

    onChangenit(nit){
        this.setState({nit})
    }
    onChangepaypal(paypal){
        this.setState({paypal})
    }

    state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })}

      
    onPressSubmitButton() {
        if(this.state.paypal && this.state.nit)
        {
            global.asiento=this.state.user
            global.nit=this.state.nit
            this.onFetchLoginRecords();
        }
        else{
            alert('Complete Los campos')
        }

        
     } 
        

     async onFetchLoginRecords() {
        var data = {
            "estado": 1,
            "pagos": [
                {
                    "tipoPago": 1,
                    "estado": 3,
                    "total": 500,
                    "evento": 146,
                    "localidad": 1
                }
            ]
         
        //username: this.state.nit,
        //password: this.state.user
        };

        let response = await fetch(
            "https://rijhn09.pythonanywhere.com/recibos/",
            {
            method: "POST",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'authorization': `Token ${global.SampleVar}`,
            },
               body: JSON.stringify(data)
             }
            )   
            .then((res) => res.json())
            .then(Data => {
                console.warn(Data)
                this.setState({
                    pokemon:Data
                })
                
            })

            if (this.state.pokemon) {
                alert("Su compra fue procesada con exito");   
                this.props.navigation.navigate('recibo',{nombre:this.state.pokemon})
               
             }
             else
             {
                 alert("Usuario no existe",);
             }
    }

  render(){
    return(

      <View style={styles.contenedor}>
         
        <View style={styles.titulo}>
            <Text style={styles.name}>Nombre del Evento</Text>
            <Text style={styles.descripcion}>{global.nombre}</Text>
        </View>

     

    <View>
    <View style={{flexDirection:'row',alignItems:'center',height:50,borderTopColor:'#134379',borderTopWidth:5}}>
        
        <Text>ELIJA SU TIPO DE ASIENTO:</Text>
        <View style={{borderColor:'grey',borderWidth:1,marginLeft:20,marginTop:11,width:165,borderRadius:10}}>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item  label = "General" value = "General" />
               <Picker.Item label = "Oro" value = "oro" />
               <Picker.Item label = "Platino" value = "platino" />
            </Picker>
            </View>
         </View>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',height:50,marginTop:30}}>
        <Text>INGRESE SU NUMERO DE NIT:</Text>
        <View style={{borderColor:'grey',borderWidth:1,marginLeft:13,width:165,borderRadius:10}}>
                <TextInput
                    style={styles.input}
                    placeholder='NO. NIT'
                       // keyboardType={'numeric'} 
                    value={this.state.nit}
                    onChangeText={(nit)=>this.onChangenit(nit)}
                />
        </View> 
    </View>

    <View style={{flexDirection:'row',alignItems:'center',height:50,marginTop:30}}>
        <Text>NUMERO DE CUENTA PAYPAL:</Text>
        <View style={{borderColor:'grey',borderWidth:1,marginLeft:13,width:165,borderRadius:10}}>
                <TextInput
                    style={styles.input}
                    placeholder='NO. NIT'
                       // keyboardType={'numeric'} 
                    value={this.state.paypal}
                    onChangeText={(paypal)=>this.onChangepaypal(paypal)}
                />
        </View> 
    </View>
    
    

        <View style={{marginTop:50}}>
          <TouchableOpacity onPress={()=>this.onPressSubmitButton()}>          
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:19,color:'white',borderRadius:5,backgroundColor:'#39FF14',width:100,textAlign:'center'}}>Reservar</Text>
          </View>
          </TouchableOpacity>
        
        </View>
      </View>
            
  );
  } 
}

const styles= StyleSheet.create({

  contenedor:{
    flex:1,
    backgroundColor: 'white',
  },
  name:{
    fontWeight:'bold',
    fontFamily:'Times New Roman',
    fontSize:17,
    color:'#134379'
  },
  descripcion:{
    marginLeft:31,
    fontFamily:'Times New Roman',
    color:'black'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 },
 titulo:{
     alignItems:'center',
     marginBottom:20,
 }

})