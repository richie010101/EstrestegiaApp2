import { Text, Image, StyleSheet, View, ImageBackground, SafeAreaView, TouchableOpacity, Alert, Modal } from 'react-native'
import React, { Component, useState } from 'react'
import CustomBtn from './CustomBtn'
import GlobalStyles from '../../styles/GlobalStyles'
import gameBg from '../../images/juego3/rompecocos0000.png'
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
    const[ayuda,setAyuda]=useState(1);
    const[zindex1,setZindex]=useState(1);
   

   
    const cerrar=() => {
        setAyuda(0);
        setZindex(-1);
      }

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
            <Text style={{marginTop:30,  fontSize: 40,fontFamily:"prueba2"}}> Klotski </Text>

            <View style={[styles.apoyo,{opacity: ayuda, zIndex: zindex1}]}> 
                <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
                  <Text style={{fontFamily:"prueba2",marginTop:"3%", fontSize: 30}}> ¿Como se juega?</Text>
                  <Text style={{fontFamily:"prueba2", width:"75%",marginTop:"15%", textAlign: 'justify', fontSize: 15}}> 
                  Klotski es un rompecabezas de piezas deslizantes, el cual está compuesto de 8 números para facilitar su manejo
                  el objetivo es colocar en orden todos los números utilizando movimientos de deslizamiento. {'\n'}
                  {'\n'}
                  Anímate y enfrentate a este desafío. {'\n'}
                  Inicialmente daremos clic en el botón inicio para que nos acomode el klotsi de manera aleatoria.</Text>
                  <Image  style={styles.esti} source={require("../../images/juego3/bt.png")} />
                  <Text style={{fontFamily:"prueba2", width:"75%",marginTop:"8%", textAlign: 'justify', fontSize: 15}}> 
                  Seguido de esto, daremos clic en el número que deseamos mover que este cerca de la casilla gris para que se pueda mover
                  de forma que se pueda acomodar el rompecabezas en su orden correcto.</Text>
                  <Image  style={styles.esti2} source={require("../../images/juego3/chek.png")} />


                  <TouchableOpacity onPress={()=>cerrar()}>
                    <Text style={{fontFamily:"prueba2", width:"75%",marginTop:"8%", borderWidth: 2, fontSize: 30}}> Cerrar</Text>
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
             
             <Text style={{fontFamily:"prueba2",marginTop:"12%", paddingLeft: 40, fontSize: 20, color: "#0b3b7d"}}> INICIO</Text>

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
        paddingLeft: 40,
    },
    apoyo:{
        borderWidth:3,
        borderColor:"black",
        position: "absolute",
        marginTop:"20%",
        width:"85%",
        height:"85%",
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
        backgroundColor: "#e6f1ff",
        flex: 0.5,
        height: 50,
        width: 150,
        position:'absolute',
        left: 120, 
        bottom:230,

    }, esti:{
        height: 40,
        width: 60,
        marginTop:"5%"
    },esti2:{
        height: 150,
        width: 150,
        marginTop: "4%"
    }
}
);

export default CustomBtnScreen;