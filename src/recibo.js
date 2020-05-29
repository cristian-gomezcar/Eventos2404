import React, { Component } from "react";
import {
     StyleSheet,
     View,
     TextInput,
     Button,
     TouchableHighlight,
     Text,
     TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

export default class App extends Component {

render() {

    var { nombre }=this.props.route.params;
    var token=JSON.stringify(nombre);
    let Token=JSON.parse(token)

    console.warn('68',Token)
        return (     
        <View style={styles.container}>
        
            <View>
                <Text style={{textAlign:'center',color:'blue',fontWeight:'bold'}}>DATOS GENERALES</Text>
                <Text>NO. RECIBO:              {Token.pagos[0]['id']}</Text>
                <Text>USUARIO:                  {Token.pagos[0]['owner_p']}</Text>
                <Text>Nit:                          {global.nit}</Text>
                <Text>TOTAL PAGADO:             {Token.pagos[0]['total']} paypal </Text>
                <Text>LOCALIDAD:              {global.asiento}</Text>
                <Text>-----------------------------------------------------------------------------------------</Text>

            </View>

            <View>
                
                <Text style={{textAlign:'center',color:'blue',fontWeight:'bold'}}>DATOS DEL EVENTO</Text>
                <Text>NOMBRE:                  {global.nombre}</Text>
                <Text>ORGANIZADORES:  {global.organizadores}</Text>
                <Text>LUGAR:                      {global.lugar} </Text>
                <Text>FECHA:                     {global.fecha }</Text>
                <Text>HORA:                        {global.hora}</Text>
                <Text>-----------------------------------------------------------------------------------------</Text>
            </View>

        <View style={{marginTop:50}}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('Nav')}>          
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:19,color:'white',borderRadius:5,backgroundColor:'#39FF14',width:100,textAlign:'center'}}>Continuar</Text>
          </View>
        </TouchableOpacity>
        </View>
            
        </View>
        );
     }
 };
        
            
const styles= StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor: '#134379',
      },
      boton:{
          backgroundColor:'#134379',
          borderRadius:5
      }
})
            