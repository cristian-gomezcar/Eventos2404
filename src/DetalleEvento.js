
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


  constructor(){
 
    super();
 
    global.nombre = '';
    global.lugar = '';
    global.fecha = '';
    global.organizadores = '';
    global.hora = '';
    
  }

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
      Alert.alert('Su comentario a sido enviado:' )
      var data = {
        comentario:this.state.com,
    };
    try {
        let response = fetch(
        "https://rijhn09.pythonanywhere.com/comentarios/",
        {
        method: "POST",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'authorization': `Token ${global.SampleVar}`, 
        },
           body: JSON.stringify(data)
         }
        );
       } catch (errors) {
         alert(errors);
        } 
  }
  else
  {
      Alert.alert("Complete los campos")
  }
}


  valorar = () =>
  {
    this.setState({liked: !this.state.liked})
    var data = {
      valoracion:'1.0',
  };
  try {
      let response = fetch(
      "https://rijhn09.pythonanywhere.com/valoraciones/",
      {
      method: "POST",
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'authorization': `Token ${global.SampleVar}`, 
      },
         body: JSON.stringify(data)
       }
      );
     } catch (errors) {
       alert(errors);
      } 

  }
  valorar1 = () =>
  {
    
    this.setState({liked: !this.state.liked})
    this.setState({liked1: !this.state.liked1})
    Alert.alert('Ha valorado el evento con 2')
    this.setState({liked: !this.state.liked})
    var data = {
      valoracion:'2.0',
  };
  try {
      let response = fetch(
      "https://rijhn09.pythonanywhere.com/valoraciones/",
      {
      method: "POST",
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'authorization': `Token ${global.SampleVar}`, 
      },
         body: JSON.stringify(data)
       }
      );
     } catch (errors) {
       alert(errors);
      } 
    
  }
  valorar2 = () =>
  {
    this.setState({liked: !this.state.liked})
    this.setState({liked1: !this.state.liked1})
    this.setState({liked2: !this.state.liked2})
    Alert.alert('Ha valorado el evento con 3')
    this.setState({liked: !this.state.liked})
    var data = {
      valoracion:'3.0',
  };
  try {
      let response = fetch(
      "https://rijhn09.pythonanywhere.com/valoraciones/",
      {
      method: "POST",
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'authorization': `Token ${global.SampleVar}`, 
      },
         body: JSON.stringify(data)
       }
      );
     } catch (errors) {
       alert(errors);
      } 
    
  }

  valorar3 = () =>
  {
    this.setState({liked: !this.state.liked})
    this.setState({liked1: !this.state.liked1})
    this.setState({liked2: !this.state.liked2})
    this.setState({liked3: !this.state.liked3})
    Alert.alert('Ha valorado el evento con 4')
    this.setState({liked: !this.state.liked})
    var data = {
      valoracion:'4.0',
  };
  try {
      let response = fetch(
      "https://rijhn09.pythonanywhere.com/valoraciones/",
      {
      method: "POST",
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'authorization': `Token ${global.SampleVar}`, 
      },
         body: JSON.stringify(data)
       }
      );
       
     } catch (errors) {
       alert(errors);
      } 
    
  }
  valorar4 = () =>
  {
    this.setState({liked: !this.state.liked})
    this.setState({liked1: !this.state.liked1})
    this.setState({liked2: !this.state.liked2})
    this.setState({liked3: !this.state.liked3})
    this.setState({liked4: !this.state.liked4})
    Alert.alert('Ha valorado el evento con 5')
    this.setState({liked: !this.state.liked})
    var data = {
      valoracion:'5.0',
  };
  try {
      let response = fetch(
      "https://rijhn09.pythonanywhere.com/valoraciones/",
      {
      method: "POST",
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'authorization': `Token ${global.SampleVar}`, 
      },
         body: JSON.stringify(data)
       }
      );
     } catch (errors) {
       alert(errors);
      } 

      
    
  }

  render(){

    const { nombre }=this.props.route.params;
    let nom=JSON.stringify(nombre);
    global.nombre=nom


    const { hora }=this.props.route.params;
    let hor=JSON.stringify(hora);
    global.hora=hor

    const { fecha }=this.props.route.params;
    let fech=JSON.stringify(fecha);
    global.fecha = fech;

    const { lugar }=this.props.route.params;
    let luga=JSON.stringify(lugar);
    global.lugar = lugar

    const { organizadores }=this.props.route.params;
    let organi=JSON.stringify(organizadores);
    global.organizadores = organi;

    const { imagen }=this.props.route.params;
    let image=JSON.stringify(imagen);

    const { id }=this.props.route.params;
    let ide=JSON.stringify(id);

    const { user }=this.props.route.params;
    let us=JSON.stringify(user);


    const likeIcon=this.state.liked ?
    <Icon name="md-star" size={37} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />

    const likeIcon1=this.state.liked1  ?
    <Icon name="md-star" size={37} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />

    const likeIcon2=this.state.liked2 ?
    <Icon name="md-star" size={37} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />

    const likeIcon3=this.state.liked3 ?
    <Icon name="md-star" size={37} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />

    const likeIcon4=this.state.liked4 ?
    <Icon name="md-star" size={37} color="yellow" />:
    <Icon name="md-star-outline" size={31} color="grey" />
   
    return(

      <View style={styles.contenedor}>
         
      
      <Image style={styles.image} source={{uri: 'data:image/jpeg;base64,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'}}/>
      
      <View style={styles.artistBox}>
        <View style={styles.info}>
          <View>
          <Text style={styles.name}>Nombre:</Text>
    <Text style={styles.descripcion}>{nom}{id}{us}</Text>
          </View>

          <View>
          <Text style={styles.name}>Organizadores:</Text>
          <Text style={styles.descripcion}>{organi}</Text>
          </View>
        
          <View>
          <Text style={styles.name}>Fecha:</Text>
          <Text style={styles.descripcion}>{fech}</Text>
          </View>

          <View>
          <Text style={styles.name}>Hora:</Text>
          <Text style={styles.descripcion}> {hor}</Text>
          </View>

          <View>
          <Text style={styles.name}>Lugar:</Text>
          <Text style={styles.descripcion}>{luga}</Text>
          </View>

          <TouchableOpacity onPress={() =>this.props.navigation.navigate('pagos')}>          
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:19,color:'white',borderRadius:5,backgroundColor:'#39FF14',width:100,textAlign:'center'}}>Asistir</Text>
          </View>
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


            <View >

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
            <Text style={{margin:10, fontSize:15,color:'blue'}}>Valorar Evento</Text>

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

              
      </View>

      
    
  );
  } 
}

const styles= StyleSheet.create({
  artistBox:{
    //backgroundColor: '#134379',
    flexDirection:'row-reverse',
    marginTop:7
  },
  image:{
    width:350,
    height:150
  },
  info:{
    flex:1,
    justifyContent:'center',
    margin:9,
    fontFamily:'Times New Roman'
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
  },
  name:{
    fontWeight:'bold',
    fontFamily:'Times New Roman',
    fontSize:17
  },
  descripcion:{
    marginLeft:31,
    fontFamily:'Times New Roman'
  }

})