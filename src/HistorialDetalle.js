
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


export default class ArtistBox extends Component{  
  state={
    liked:false,
    liked1:false,
    liked2:false,
    liked3:false,
    liked4:false,
    comentario:''
  }

  onChangecom(com){
    this.setState({com})
}

ValidarComentario(){
  if(this.state.com)
  {
      Alert.alert('Su comentario A sido enviado: '+this.state.com )
  }
  else
  {
      Alert.alert("Complete los campos")
  }
}


  valorar = () =>
  {
    this.setState({liked: !this.state.liked})
  }
  valorar1 = () =>
  {
    
    this.setState({liked: !this.state.liked})
    this.setState({liked1: !this.state.liked1})
    Alert.alert('Ha valorado el evento con 2')
    
  }
  valorar2 = () =>
  {
    this.setState({liked: !this.state.liked})
    this.setState({liked1: !this.state.liked1})
    this.setState({liked2: !this.state.liked2})
    Alert.alert('Ha valorado el evento con 3')
    
  }

  valorar3 = () =>
  {
    this.setState({liked: !this.state.liked})
    this.setState({liked1: !this.state.liked1})
    this.setState({liked2: !this.state.liked2})
    this.setState({liked3: !this.state.liked3})
    Alert.alert('Ha valorado el evento con 4')
    
  }
  valorar4 = () =>
  {
    this.setState({liked: !this.state.liked})
    this.setState({liked1: !this.state.liked1})
    this.setState({liked2: !this.state.liked2})
    this.setState({liked3: !this.state.liked3})
    this.setState({liked4: !this.state.liked4})
    Alert.alert('Ha valorado el evento con 5')
    
  }

  render(){
    const { nombre }=this.props.route.params;
    let nom=JSON.stringify(nombre);

    const { hora }=this.props.route.params;
    let hor=JSON.stringify(hora);

    const { fecha }=this.props.route.params;
    let fech=JSON.stringify(fecha);

    const { lugar }=this.props.route.params;
    let luga=JSON.stringify(lugar);

    const { organizadores }=this.props.route.params;
    let organi=JSON.stringify(organizadores);

    const { imagen }=this.props.route.params;
    let image=JSON.stringify(imagen);

    console.warn('eventosdadasas',image)

    const likeIcon=this.state.liked ?
    <Icon name="md-star" size={31} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />

    const likeIcon1=this.state.liked1  ?
    <Icon name="md-star" size={31} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />

    const likeIcon2=this.state.liked2 ?
    <Icon name="md-star" size={31} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />

    const likeIcon3=this.state.liked3 ?
    <Icon name="md-star" size={31} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />

    const likeIcon4=this.state.liked4 ?
    <Icon name="md-star" size={31} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />
   
    return(

      <View style={styles.contenedor}>
         
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri: 'https://rawcdn.githack.com/davidlimonche9/miniaturas-de-la-lista-de-animes/920be596c343a90ec713270e1b99012bf7832e48/imagenes-black-clover-anime-4k-hd-fondo-de-pantalla-asta-yuno-trebol-negro%20(1).webp'}}/>

        <View style={styles.info}>
        <Text style={styles.name}>Nombre:      {nom}</Text>
        <Text style={styles.name}>Organizadores:        {organi}</Text>
        <Text style={styles.name}>Fecha:                  {fech}</Text>
        <Text style={styles.name}>Hora:                    {hor}</Text>
        <Text style={styles.name}>Lugar:                  {luga}</Text>

        </View>

      </View>

      <View >

            <View style={{flexDirection:'row',justifyContent:'center'}}> 

               <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={this.valorar}>
                  {likeIcon}
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={this.valorar1}>
                  {likeIcon1}
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={this.valorar2}>
                  {likeIcon2}
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={this.valorar3}>
                  {likeIcon3}
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={this.valorar4}>
                  {likeIcon4}
                </TouchableOpacity>

            </View>   
                
      </View>

              <View style={styles.inputContainer}>
                <TextInput
                 style={styles.input}
                 placeholder='Ingrese su comentario'
                 value={this.state.com}
                 onChangeText={(com)=>this.onChangecom(com)}
                />
                <TouchableOpacity onPress={()=>this.ValidarComentario()} style={{justifyContent: 'center', alignItems: 'center' }}  >
                  <Icon name="md-send" size={21} color="grey" />
                </TouchableOpacity>
              </View>

              
      </View>
    
  );
  }
}

const styles= StyleSheet.create({
  artistBox:{
    backgroundColor: '#134379',
    flexDirection:'row-reverse',
    margin:3
  },
  image:{
    width:150,
    height:150
  },
  info:{
    flex:1,
    justifyContent:'center',
    margin:9
  },
  contenedor:{
    flex:1,
    backgroundColor: 'white',
  },

  input:{
    margin:3,
    width:321,
  },
  inputContainer:{
    flexDirection:'row',
    backgroundColor:'white',
    borderColor:'grey',
    borderWidth:1,
    borderRadius:10,
    marginTop:20
  }

})