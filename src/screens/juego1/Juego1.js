import { Text, View,SafeAreaView,TouchableOpacity ,StyleSheet,Image} from 'react-native'
import React, {useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles';
import {LinearGradient} from 'expo-linear-gradient';

export default function Juego1() {
    const[buenas,setBuenas]=useState(0);
    let colores=["azul","negro","rojo","verde","violeta"]
    let coloresValor=["#03F5FD","#000000","#FF0000","#00FF66","#D300FD"]
    

    const[palabra1,setPalabra1]=useState("azul");
    const[palabra2,setPalabra2]=useState("verde");

    const[palabra1Color,setPalabra1Color]=useState("#0022FF");
    const[palabra2Color,setPalabra2Color]=useState("#00FF66");


    const  sumar=()=>{
      setBuenas(buenas+1)
      console.log(buenas);
    }

    const igual=() =>{
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
           
              <Text style={[styles.palabras,{color:palabra1Color,marginTop:140}]}> {palabra1}</Text>
              <Text style={[styles.palabras,{color:palabra2Color,marginBottom:80}]}> {palabra2}</Text>
            
           
            <View style={styles.botones}>
              <TouchableOpacity style={styles.boton} onPress={()=>diferente()}>
                <Text style={{color:"#FAFAFA",paddingTop:"6%"}}> Falso</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={()=>igual()}>
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

