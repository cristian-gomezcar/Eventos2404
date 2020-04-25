import React, { Component } from 'react';
import { View,StyleSheet,Image,Text,Alert, Button,BackHandler,TouchableHighlight, TouchableOpacity } from 'react-native';
import { LoginButton, AccessToken,LoginManager } from 'react-native-fbsdk';
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBc0pDwChg1kFVnLoI7pMRGKTQN8v2Crkw",
    authDomain: "umgapp-4bac8.firebaseapp.com",
    databaseURL: "https://umgapp-4bac8.firebaseio.com",
    projectId: "umgapp-4bac8",
    storageBucket: "umgapp-4bac8.appspot.com",
    messagingSenderId: "667257931284",
    appId: "1:667257931284:web:029d79e8624a346f6f0901",
    measurementId: "G-S4JH50DX85"
  };
  // Initialize Firebase
 !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  const {FacebookAuthprovider} =firebase.auth
  const firebaseAuth=firebase.auth()

export default class fbLogin extends Component {
    state={
        credentials:null
    }

    UNSAFE_componentWillMount(){
        this.autenticateUser()
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);}

    autenticateUser = () =>
    {
        AccessToken.getCurrentAccessToken().then((data) => {
            const {accessToken}=data

        const credential=firebase.auth.FacebookAuthProvider.credential(accessToken)
        firebaseAuth.signInWithCredential(credential).then((credentials)=> {
            this.setState({credentials})
          },function(error) {
            console.log("Sign In Error", error);
          });
        })

    }

    handleLoginFinished=(error, result) => {
        if (error) {
            console.log("Inicio de Sesion fallido: " + result.error);
        } else if (result.isCancelled) {
            console.log("inicio de secion cancelado.");
        } else {

            this.autenticateUser()
            this.props.navigation.navigate('CrearPerfil');
        }
        }

        backPressed = () => {

            Alert.alert(
              'Exit App',
              'Do you want to exit?',
              [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () => BackHandler.exitApp()},
              ],
              { cancelable: false })
       
       return true;
       }
    
  render() {
    return (

    <View style={styles.container}>

        <View style={styles.logo}>
            <Image style={{width:400,height:400}} source = {require('./logo.jpg')} />
        </View>

        <View style={styles.botones}>
        <View style={styles.facebook}>
        <Text style={{fontSize:50}}>{this.state.credentials && this.state.credentials.displayName}</Text>
            <LoginButton
            readPermissions={['public_profile','email']}
            onLoginFinished={this.handleLoginFinished}
            onLogoutFinished={() => console.log("logout.")}/>
        </View>
        
        <View style={styles.google}>
        <TouchableOpacity style={styles.registrar} onPress={() =>this.props.navigation.navigate('google')}>
            <Text style={{textAlign:'center',color:'white',fontWeight: 'bold',padding:5}}>Iniciar con Google</Text>
        </TouchableOpacity>            
        </View>

        <View style={styles.tengo}>
        <TouchableOpacity style={styles.registrar} onPress={() =>this.props.navigation.navigate('Iniciar')}>
            <Text style={{textAlign:'center',color:'white',fontWeight: 'bold',padding:5}}>Tengo un Perfil</Text>
        </TouchableOpacity>            
        </View>
        </View>
        
      </View>
    );
  }
};



const styles= StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        backgroundColor:'white'
    },
    facebook:{
        margin:7
    },
    google:{
        margin:7,
        backgroundColor:'#db4a39',
        height:30,
        alignItems:'center',
        borderRadius:3,
        
    },
    tengo:{
        margin:7,
        backgroundColor:'blue',
        height:30,
        alignItems:'center',
        borderRadius:5,
        
    },
    botones:{
        flex:1,
    },
    logo:{
        flex:1
    }

  })
    