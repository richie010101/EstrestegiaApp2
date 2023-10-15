import { Text, StyleSheet, View,SafeAreaView,Image, Touchable, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import EspacioJ from './EspacioJ';
import Casilla from './Casilla';

var sudoku=new Array(9);
for(var i = 0;i<sudoku.length;i++){
  sudoku[i]= new Array(3);
}

for(var i = 0;i<sudoku.length;i++){
  for(var j = 0;j<3;j++){
    sudoku[i][j]= new Array(3);
  }
}

export default function Juego1()  {
  const[valor,SetValor]=useState();
  
 



  let [fontsLoaded]= useFonts({
    "prueba2" :require("../../fonts/NextBro.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  const cambiar=(nuevo) => {
    SetValor(nuevo)
  }

  LogBox.ignoreLogs(["expo-app-loading is deprecated"]);

  const ver=(posicion,posicionY,posicionX,valor)=>{
    console.log("( Casilla: " + posicion +", X: " +posicionX+ ", Y:" + posicionY +")");
    sudoku[posicion][posicionX][posicionY]=valor
    

    console.log("---------------------");


    console.log(sudoku)
  }


  
    return (
      <SafeAreaView style={[GlobalStyles.androidSafeArea,{alignItems:'center',alignContent:'center'}]}>

          <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
              <View style={GlobalStyles.logo}>
                 <Image style={GlobalStyles.logo2} 
                     source={require("../../images/logo2.png")} />
              </View>
              <Text style={{marginTop:30,  fontSize: 40,fontFamily:"prueba2"}}> Sudoku </Text>

            
              <EspacioJ   valor={valor} ver={ver} />

            

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
    width:"98%",
    height:"49.5%",
    backgroundColor:"#80D6E4",
    marginTop:30,
    alignContent:'center',
    
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