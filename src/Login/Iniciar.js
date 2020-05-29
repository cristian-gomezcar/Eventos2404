import React, { Component } from "react";
import {
     StyleSheet,
     View,
     TextInput,
     Button,
     TouchableHighlight,
     Text
} from "react-native";

export default class App extends Component {

    onChangeUser(User){
        this.setState({User})
    }
    onChangePass(Pass){
        this.setState({Pass})
    }

    constructor(props) {
        super(props);
 
    this.state = {
        User:"",
        Pass:"",
        username:"",
        password:"",
        token:''

      };
    }

    onPressSubmitButton() {
        this.onFetchLoginRecords();
     }

    async onFetchLoginRecords() {
        var data = {
        username: this.state.User,
        password: this.state.Pass
        };
        try {
            let response = await fetch(
            "https://rijhn09.pythonanywhere.com/login/",
            {
            method: "POST",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
               body: JSON.stringify(data)
             }
            )   
            .then((res) => res.json())
            .then(Data => {
                console.warn(Data)
                this.setState({
                    pokemon:Data.token
                })
                
            })

            if (this.state.pokemon) {
                alert('Bienvenido: '+this.state.User);   
                this.props.navigation.navigate('Eventos',{nombre:this.state.pokemon})
               
             }
             else
             {
                 alert("Usuario no existe",);
             }
           } catch (errors) {
             alert(errors);
            } 
    }

render() {
        return (     
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre de Usuario'
                       // keyboardType={'numeric'} 
                    value={this.state.User}
                    onChangeText={(User)=>this.onChangeUser(User)}
                />
        
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    secureTextEntry
                    value={this.state.Pass}
                    onChangeText={(Pass)=>this.onChangePass(Pass)}
                        
                />
        
                <TouchableHighlight style={styles.registrar} onPress={()=>this.onPressSubmitButton()}>
                    <Text style={{textAlign:'center'}}>Iniciar</Text>
                </TouchableHighlight>
            </View>
        </View>
        );
     }
 };
        
            
const styles= StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'white',
        paddingLeft:15,
        paddingRight:15,
        marginTop:30,
        alignContent:'center',
        justifyContent:'center'
         },
    input:{
        height:50,
        borderColor:'#ccc',
        borderWidth:2,
        marginBottom:20,
        fontSize:21
        },
    registrar:{
        backgroundColor:'skyblue',
        padding:5     
        }
        
})
            