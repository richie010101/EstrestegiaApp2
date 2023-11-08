import { Text, StyleSheet, View,SafeAreaView,Image, Touchable, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import EspacioJ from './EspacioJ';
import  {crear} from './tableros';


var tableros
tableros=crear()
var sudoku=new Array(9);
var bloqueados= new Array(9);
var sudokuF=new Array(9);
for(var i = 0;i<sudoku.length;i++){
  sudoku[i]= new Array(3);
  sudokuF[i]= new Array(3);
  
  bloqueados[i]= new Array(3);
}

for(var i = 0;i<sudoku.length;i++){
  for(var j = 0;j<3;j++){
    sudoku[i][j]= new Array(3);
    sudokuF[i][j]= new Array(3);
    bloqueados[i][j]= new Array(3);
  }
}

var x = Math.floor(Math.random()*15);

for(var i = 0;i<sudoku.length;i++){
  for(var j = 0;j<3;j++){
    for(var k = 0;k<3;k++){

      
      sudokuF[i][j][k]= tableros[x][i][j][k]
      bloqueados[i][j][k]=false;
    }
  }
}

for (var i=0;i<41;i++){
  var uno = Math.floor(Math.random()*9);
  var dos = Math.floor(Math.random()*3);
  var tres = Math.floor(Math.random()*3);
  console.log(uno +","  + dos+"," + tres);
  if(bloqueados[uno][dos][tres]=== false)
  {
    bloqueados[uno][dos][tres]= true;
    sudoku[uno][dos][tres]=sudokuF[uno][dos][tres]
  }
  else{
    i--;
  }
}




export default function Juego1()  {
  const[valor,SetValor]=useState();
  const[ayuda,setAyuda]=useState(1);
  const[zindex1,setZindex]=useState(1);
  const[terminar,setTerminar]=useState("Jugando..");
  
 

  LogBox.ignoreLogs(["expo-app-loading is deprecated"]);

  let [fontsLoaded]= useFonts({
    "prueba2" :require("../../fonts/NextBro.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  const cambiar=(nuevo) => {
    SetValor(nuevo)
  }

  const cerrar=() => {
    setAyuda(0);
    setZindex(-1);
  }

  

  const ver=(posicion,posicionX,posicionY,valor)=>{
      console.log("( Casilla: " + posicion +", X: " +posicionX+ ", Y:" + posicionY +")");
      sudoku[posicion][posicionX][posicionY]=valor
      

      console.log("---------------------");
      console.log(sudoku)
      console.log(sudokuF)

      var iguales = true;
      for(var i = 0;i<sudoku.length;i++){
        for(var j = 0;j<3;j++){
          for(var k = 0;k<3;k++){
            if (sudokuF[i][j][k] !== sudoku[i][j][k]){
              iguales=false;
            }
          }
        }
      }

      if(iguales){
        console.log("Termino");
        setTerminar("Termino");
      }
  }


  
    return (
      <SafeAreaView style={[GlobalStyles.androidSafeArea,{alignItems:'center',alignContent:'center'}]}>

          <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
              <View style={GlobalStyles.logo}>
                 <Image style={GlobalStyles.logo2} 
                     source={require("../../images/logo2.png")} />
              </View>
              <Text style={{marginTop:30,  fontSize: 40,fontFamily:"prueba2"}}> Sudoku </Text>

              <Text> {terminar} </Text>
            <EspacioJ  styles={styles.juego} valor={valor} ver={ver} bloqueados={bloqueados} sudoku={sudoku}></EspacioJ>

            <View style={[styles.apoyo,{opacity: ayuda, zIndex: zindex1}]}> 
                <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
                  <Text style={{fontFamily:"prueba2",marginTop:"3%"}}> ¿Como se juega?</Text>
                  <Text style={{fontFamily:"prueba2", width:"75%",marginTop:"15%"}}> Sudoku es un juego de lógica donde tienes una cuadrícula de 9x9 celdas dividida en bloques de 3x3. Debes rellenar la cuadrícula con los números del 1 al 9, asegurándote de que no se repitan los números en ninguna fila, columna o bloque de 3x3. Comienzas con algunas celdas ya completadas y debes llenar el resto aplicando la lógica para evitar repeticiones.</Text>
                  <TouchableOpacity onPress={()=>cerrar()}>
                    <Text style={{fontFamily:"prueba2", width:"75%",marginTop:"15%"}}> Cerrar</Text>
                  </TouchableOpacity>
                </LinearGradient>
            </View>
            

            <View style={styles.botones}>
            <TouchableOpacity style={styles.boton} onPress={()=>cambiar(1)}>
                <Text style={styles.letraB}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boton}  onPress={()=>cambiar(2)}>
                <Text style={styles.letraB}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boton} onPress={()=>cambiar(3)}>
                <Text style={styles.letraB}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boton} onPress={()=>cambiar(4)}>
                <Text style={styles.letraB}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={()=>cambiar(5)}>
                <Text style={styles.letraB}>5</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.botones}>
            <TouchableOpacity style={styles.boton} onPress={()=>cambiar(6)}>
                <Text style={styles.letraB}>6</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boton} onPress={()=>cambiar(7)}>
                <Text style={styles.letraB}>7</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boton} onPress={()=>cambiar(8)}>
                <Text style={styles.letraB}>8</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boton} onPress={()=>cambiar(9)}>
                <Text style={styles.letraB}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={()=>cambiar()}>
                <Text style={styles.letraB}>X</Text>
              </TouchableOpacity>
            </View>

              
          </LinearGradient>


      </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
  juego:{
    width:"95%",
    height:"60%",
    backgroundColor:"#80D6E4",
    marginTop:0,
    alignContent:'center',
  },
  apoyo:{
    borderWidth:3,
    borderColor:"#840957",
    position: "absolute",
    marginTop:"25%",
    width:"85%",
    height:"75%",
    backgroundColor:"#FAFAFA",
  },
  botones:{
    marginLeft:"2%",
    marginTop:10,
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
  },
  boton:{
    width: 50,
    height: 50,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#665E5E",
  },
  letraB:{
    color:"#FAFAFA",fontSize:20,bottom:1
  },
})