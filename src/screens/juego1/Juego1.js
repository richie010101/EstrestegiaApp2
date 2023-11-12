import { Text, View,SafeAreaView,TouchableOpacity ,StyleSheet,Image} from 'react-native'
import React, {useState, useEffect } from 'react'
import { collection, addDoc,doc } from "firebase/firestore";
import GlobalStyles from '../../styles/GlobalStyles';
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import { firebaseConfig } from '../../components/firebase';
import {initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import BackgroundTimer from 'react-native-background-timer';







export default function Juego1(props) {


  
    const firebase= initializeApp(firebaseConfig);
    database=getFirestore();

    const { startingMinutes = 0, startingSeconds = 30 } = props;
    const [mins, setMinutes] = useState(startingMinutes);
    const [secs, setSeconds] = useState(startingSeconds);
    const [termino2,setTermino2]=useState(0);
    const [bloqueo,setBloqueo]=useState(false);
    const [subido,setSubido]=useState(false);

    const[diff,setDiff]=useState(null)
    const[initial,setInitial]=useState(null)

    const empezar=() =>{
      const terminar=setInterval(cronometro,30000);
    }
    

    function cronometro (){
     // clearInterval(sampleInterval);
      setTermino2(1);
      setBloqueo(true);
      if(!subido){
        subir();
        setSubido(true);
      }
    }

    const{route}=props;
    const{usuario}=route.params;
    const[resultado,setBuenas]=useState({
      numero:0,
      user:usuario,
    });



    let colores=["azul","negro","rojo","verde","violeta"]
    let coloresValor=["#03F5FD","#000000","#FF0000","#00FF66","#D300FD"]
    

    const[palabra1,setPalabra1]=useState("azul");
    const[palabra2,setPalabra2]=useState("verde");

    const[palabra1Color,setPalabra1Color]=useState("#0022FF");
    const[palabra2Color,setPalabra2Color]=useState("#00FF66");




    const  sumar=()=>{
      if (resultado.numero===0){
        empezar();
      }
      
      resultado.numero=resultado.numero + 1;
      console.log(resultado.numero);


  
    }

    const subir= async() =>{
        await addDoc(collection(database, usuario + '-Juego1',), resultado);
    }

    const igual=() =>{
      console.log(usuario );
        if(palabra1===colores[0]){
          if(palabra2Color===coloresValor[0]){
            sumar()
          }
        }
        if(palabra1===colores[1]){
          if(palabra2Color===coloresValor[1]){
            sumar()
          }
        }
        if(palabra1===colores[2]){
          if(palabra2Color===coloresValor[2]){
            sumar()
          }
        }
        if(palabra1===colores[3]){
          if(palabra2Color===coloresValor[3]){
            sumar()
          }
        }
        if(palabra1===colores[4]){
          if(palabra2Color===coloresValor[4]){
            sumar()
          }
        }
        cambiar()
    }

    const diferente=() =>{
      console.log("hola");
      if(palabra1===colores[0]){
        if(palabra2Color!==coloresValor[0]){
          sumar()
        }
      }
      if(palabra1===colores[1]){
        if(palabra2Color!==coloresValor[1]){
          sumar()
        }
      }
      if(palabra1===colores[2]){
        if(palabra2Color!==coloresValor[2]){
          sumar()
        }
      }
      if(palabra1===colores[3]){
        if(palabra2Color!==coloresValor[3]){
          sumar()
        }
      }
      if(palabra1===colores[4]){
        if(palabra2Color!==coloresValor[4]){
          sumar()
        }
      }
      cambiar()
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const cambiar=() =>{
      if(0===getRandomInt(2)){
          var iguales=getRandomInt(4)
          setPalabra1(colores[iguales])
          setPalabra2(colores[getRandomInt(4)])
          setPalabra1Color(coloresValor[getRandomInt(4)])
          setPalabra2Color(coloresValor[iguales])
      }
      else{
        setPalabra1(colores[getRandomInt(4)])
        setPalabra2(colores[getRandomInt(4)])
        setPalabra1Color(coloresValor[getRandomInt(4)])
        setPalabra2Color(coloresValor[getRandomInt(4)])
      }

    }

    LogBox.ignoreLogs(["expo-app-loading is deprecated"]);

    let [fontsLoaded]= useFonts({
      "prueba2" :require("../../fonts/NextBro.ttf"),
    });
  
    if (!fontsLoaded) {
      return <AppLoading/>;
    }

    

    return (
      <SafeAreaView style={[GlobalStyles.androidSafeArea,{alignItems:'center',alignContent:'center'}]}>

          <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
            <View style={GlobalStyles.logo}>
            <Image style={GlobalStyles.logo2} 
                source={require("../../images/logo2.png")} />
            </View>

            <View style={styles.container}>
            <Text style={{color:"#000000",fontSize:13,textAlign:'justify' }}>Explicacion: si la palabra de arriba dice el color de la plabra de abajo Selecciona Verdadero, de lo contrario selecciona Falso</Text>
            
            </View>

            <View style={[styles.final,{opacity:termino2,zIndex:2}]}>
            <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
              <Text style={{fontFamily:"prueba2",marginTop:"20%",fontSize:30}}> ¡Felicidades! lograste  </Text>
              <Text style={{fontFamily:"prueba2",marginTop:"20%",fontSize:50}}> {resultado.numero}   </Text>
              <Text style={{fontFamily:"prueba2",marginTop:"20%",fontSize:30}}> respuestas correctas   </Text>
              <TouchableOpacity >
                    <Text style={{paddingTop:10,marginTop:"80%",fontFamily:"prueba2", marginTop:"15%",borderWidth:2,fontSize:20}}> Ver mis estadisticas</Text>
                  </TouchableOpacity>
              </LinearGradient>
              
            </View>
           
              <Text style={[styles.palabras,{color:palabra1Color,marginTop:140}]}> {palabra1}</Text>
              <Text style={[styles.palabras,{color:palabra2Color,marginBottom:80}]}> {palabra2}</Text>


              
            <View style={styles.botones}>
              
              <TouchableOpacity style={styles.boton} onPress={()=>diferente()} disabled={bloqueo}>
                <Text style={{color:"#FAFAFA",paddingTop:"6%"}}> Falso</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={()=>igual()} disabled={bloqueo} >
                <Text style={{color:"#FAFAFA",paddingTop:"6%"}}> Verdadero</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
      </SafeAreaView>
    )
}

const styles =StyleSheet.create({
  boton:{
    width:"47%",
    margin:5,
    height:50,
    alignContent:'center',
    alignItems:'center',
    backgroundColor:"#0D0D0E",
    borderRadius:0,
    opacity:.9,
  },
  botones:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    width:"100%",
    paddingLeft:5,
    
  },
  final:{
    position:'absolute',
    width:"85%",
    height:"70%",
    textAlign:'center',
    backgroundColor:"#FAFAFA",
    marginTop:"30%",
  },

  palabras:{
    borderRadius:15,
    fontSize:60,
    backgroundColor:"#FAFAFA",
    width:"70%",
    textAlign:'center',
    paddingRight:"4.5%",
    margin:10,
    height:110,
    paddingTop:"1.5%"
  },container:{
    marginTop:20,
    alignContent:'center',
    alignItems:'center',
    width:"70%",
  },

 
})

