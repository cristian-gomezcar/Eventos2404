
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
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ComprarBoleto extends Component{  

  render(){

   
    return(

      <View style={styles.contenedor}>
        <View style={{backgroundColor:'#134379'}}>
            <Text style={{textAlign:'center',fontSize:41,color:'white'}}>Nombre del evento</Text>
        </View>

        <View style={styles.asientos}>
            <Text>Seleccione su Asiento</Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}> 

               <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}>
                <Image
                     style={styles.iconos}
                    source={{
                    uri: 'https://webstockreview.net/images/clipart-diamond-logo-4.png',
                            }}
                />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}>
                <Image
                     style={styles.iconos}
                    source={{
                    uri: 'https://img2.freepng.es/20180224/ipw/kisspng-diamond-yellow-designer-gold-yellow-diamond-5a911d0f8e6e47.4577729215194595995834.jpg',
                            }}
                />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}>
                <Image
                     style={styles.iconos}
                    source={{
                    uri: 'https://q-xx.bstatic.com/images/hotel/max1024x768/780/78079663.jpg',
                            }}
                />
                </TouchableOpacity>



            </View> 
        </View>

        <View>
            <TextInput
                style={styles.input}
                placeholder='Ingrese su Numero de NIT'
            />
            <TextInput
                style={styles.input}
                placeholder='Ingrese su numero de cuenta de paypal'
            />

            <Button
                title="comprar"
                color="skyblue"
           />

        </View>


      </View>
    
  );
  }
}

const styles= StyleSheet.create({
    contenedor:
    {
        flex:1,
        backgroundColor:'white'
    },
    asientos:
    {
        marginTop:5,
        marginBottom:15
    },
    input:
    {
        borderWidth:1,
        borderColor:'grey',
        borderRadius:9,
        margin:5,
        height:39
    },
    iconos:{
        width:73,
        height:73
    }

})