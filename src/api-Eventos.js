
const URL='https://rijhn09.pythonanywhere.com/evento/mostrar/?format=json'

function getEven(){
   return fetch(URL)
   .then(response=>response.json())
   .then(eventos=>eventos.map(data=>{
    return{
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

}

export {getEven}