import { Text, Image, StyleSheet, View, ImageBackground, SafeAreaView, TouchableOpacity, Alert, Modal } from 'react-native'
import React, { Component, useState } from 'react'
import CustomBtn from './CustomBtn'
import GlobalStyles from '../../styles/GlobalStyles'
import gameBg from '../../images/juego3/descargam.png'
import startbtn from '../../images/juego3/margen.png'
import {LinearGradient} from 'expo-linear-gradient'
import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import SimpleModal from './SimpleModal'



const CustomBtnScreen = () => {

    const [positions, SetPositions] = useState ([1,2,3,4,5,6,7,8,null]);
    const [intPositions, setInitPositions] = useState ([1,2,3,4,5,6,7,8,null]);
    const [toggle, setToggle] = useState(false);
    const [start, setStart] = useState(false);
   

   
    

    const msg = () => {

        if(start){
            var counter = 0;
           

            for(let i=0; i<positions.length; i++){
                if(positions[i] !== intPositions[i]){
                    counter++;
                }
            }

            if(counter === 0){
                Alert.alert("Felicidades, completaste el puzzle");
            }
        }
    }


    const switchPosition = (position, index) => {

        if(index===0){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===1 || index2===3)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===1){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===0 || index2===2 || index2===4)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===2){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===1 || index2===5)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===3){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===0 || index2===4 || index2===6)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===4){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===1 || index2===3 || index2===5 || index2===7)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===5){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===2 || index2===4 || index2===8)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===6){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===3 || index2===7)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===7){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===4 || index2===6 || index2===8)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===8){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===5 || index2===7)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
                
            } 
          

        })

        if(position === 6 || position === 8){
            msg();
        }
    }

    console.log(position)
    console.log(index)
    console.log('///////')

    }

    
  
    

    LogBox.ignoreLogs(["expo-app-loading is deprecated"]);

    let [fontsLoaded]= useFonts({
      "prueba2" :require("../../fonts/NextBro.ttf"),
    });
  
    if (!fontsLoaded) {
      return <AppLoading/>;
    }
 

      return (
        
        <SafeAreaView style={[GlobalStyles.androidSafeArea2,{alignItems:'center',alignContent:'center'}]}>
            <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
            <View style={GlobalStyles.logo}>
            <Image style={GlobalStyles.logo2} 
                source={require("../../images/logo2.png")} />
            </View>
            <Text style={{marginTop:30,  fontSize: 40,fontFamily:"prueba2"}}> Rompecabezas </Text>

            <View style={[styles.apoyo,{opacity: ayuda, zIndex: zindex1}]}> 
                <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
                  <Text style={{fontFamily:"prueba2",marginTop:"3%"}}> ¿Como se juega?</Text>
                  <Text style={{fontFamily:"prueba2", width:"75%",marginTop:"15%"}}> Sudoku es un juego de lógica donde tienes una cuadrícula de 9x9 celdas dividida en bloques de 3x3. Debes rellenar la cuadrícula con los números del 1 al 9, asegurándote de que no se repitan los números en ninguna fila, columna o bloque de 3x3. Comienzas con algunas celdas ya completadas y debes llenar el resto aplicando la lógica para evitar repeticiones.</Text>
                  <TouchableOpacity onPress={()=>cerrar()}>
                    <Text style={{fontFamily:"prueba2", width:"75%",marginTop:"15%"}}> Cerrar</Text>
                  </TouchableOpacity>
                </LinearGradient>
            </View>
            
               

             
        <View>

        <ImageBackground 
        style={styles.puzzleContainer}
        source={gameBg}
        resizeMode='stretch'>
            <View style={styles.puzzleSeeds}>
            {positions.map((position, index) => (
                <CustomBtn key = {index} label = {position} myFun = {() => switchPosition(position,index)} />
            )
            )}
        </View>
        </ImageBackground>


    
     
       <TouchableOpacity style={styles.start}


       
       onPress={()=> {
        
       
         
        SetPositions(() => [8,2,3,7,5,null,4,1,6]);
        setToggle(!toggle);
        setStart(true);
    
    }}
        >
           

       </TouchableOpacity>

      
         

        </View>
        </LinearGradient>
        </SafeAreaView>
      ) 
}





const styles = StyleSheet.create(
{
    puzzleContainer:{
        marginTop: 90,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        height: 380,
        width: 380,
        alignItems: "center",
        paddingLeft: 40
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
    puzzleSeeds:{
        marginTop: 70,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        height: 380,
        width: 380,
        alignItems: "center",
    },
    start:{
        backgroundColor: "#8e2525",
        flex: 0.5,
        height: 100,
        width: 150,
        position:'absolute',
        left: 120, 
        bottom:170,

    }
}
);

export default CustomBtnScreen;