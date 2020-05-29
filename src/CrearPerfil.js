import React, { Component } from 'react';
import { View,StyleSheet,Image,Text,Alert,TextInput,TouchableHighlight } from 'react-native';

export default class CrearPerfil extends Component {
    constructor(props) {
        super(props);

        this.state={
            nombre:'',
            apellido:'',
            user:'',
            correo:'',
            password1:'',

            first_name:'',
            last_name:'',
            username:'',
            email:'',
            password:'',
            is_verified:"",
            is_superuser: ""
        }
    }

    onChangeNombre(nombre){
        this.setState({nombre})
    }
    onChangeApellido(apellido){
        this.setState({apellido})
    }
    onChangeUser(user){
        this.setState({user})
    }

    onChangeCorreo(correo){
        this.setState({correo})
    }

    onChangePassword(password1){
        this.setState({password1})
    }
  

    ValidarCampos(){
        if(this.state.nombre && this.state.apellido && this.state.user && this.state.correo && this.state.password1 )
        {
            Alert.alert('Bienvenido'+this.state.user )
            this.onFetchLoginRecords();
            this.props.navigation.navigate('Nav')
        }
        else
        {
            Alert.alert("Complete los campos")
        }
    }

    ////
    async onFetchLoginRecords() {
        var data = {
            first_name:this.state.nombre,
            last_name:this.state.apellido,
            username:this.state.user,
            email:this.state.correo,
            password:this.state.password1,
            is_verified: true,
            is_superuser: false
        };
        try {
            let response = await fetch(
            "https://rijhn09.pythonanywhere.com/usuarios/crear/",
            {
            method: "POST",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
               body: JSON.stringify(data)
             }
            );
             if (response.status >= 200 && response.status < 300) {
                alert("Perfil creado");
             }
           } catch (errors) {
             alert(errors);
            } 
    }


  render() {
    return (

    <View style={styles.container}>
        <View>
            <Text>COMPLETE LOS CAMPOS PARA CREAR SU PERFIL</Text>
            <TextInput
                style={styles.input}
                placeholder='Primer Nombre'
                value={this.state.nombre}
                onChangeText={(nombre)=>this.onChangeNombre(nombre)}
            />

            <TextInput
                style={styles.input}
                placeholder='Primer Apellido'
                value={this.state.apellido}
                onChangeText={(apellido)=>this.onChangeApellido(apellido)}
            />

            <TextInput
                style={styles.input}
                placeholder='Nombre de usuario'
                value={this.state.user}
                onChangeText={(user)=>this.onChangeUser(user)}
            />

            <TextInput
                style={styles.input}
                placeholder='Correo electronico'
                value={this.state.correo}
                onChangeText={(correo)=>this.onChangeCorreo(correo)}
            />

            <TextInput
                style={styles.input}
                placeholder='Contrasena'
                value={this.state.password1}
                onChangeText={(password1)=>this.onChangePassword(password1)}
            />

            <TouchableHighlight style={styles.registrar} onPress={()=>this.ValidarCampos()}>
                <Text style={{textAlign:'center'}}>Registrar</Text>
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
        marginTop:30
    },
    input:{
        height:40,
        borderColor:'#ccc',
        borderWidth:2,
        marginBottom:20
    },
    registrar:{
        backgroundColor:'skyblue',
        padding:5
        
    }

  })
    