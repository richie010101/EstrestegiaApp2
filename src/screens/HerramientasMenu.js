import { Text, StyleSheet, View,SafeAreaView,Button,  Alert ,Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import React, { Component,useState, useCallback, useRef} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import GlobalStyles from '../styles/GlobalStyles';
import YoutubePlayer from "react-native-youtube-iframe";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import BotonVideo,{BotonVideo2,BotonVideo3,BotonVideo4} from '../components/BotonVideo';
import { useNavigation } from '@react-navigation/native';
import { crearSinopsis,crearCanal,crearTitulos } from './Herramientas/sinopsis';


const screenDimensions = Dimensions.get('screen').height;

export default function HerramientasMenu (){

  const sinopsis=crearSinopsis();
  const titulos=crearTitulos();
  const canales=crearCanal();


  const navigation=useNavigation(); 
  const  viajar=(video,sinop,nombre,canal) =>{
    //console.log("viajando " + screen );
    navigation.navigate('Reproductor',{idV:video,sinopsis:sinop,titulo:nombre,canal:canal});
  }
  
  console.log(screenDimensions);

  LogBox.ignoreLogs(["expo-app-loading is deprecated"]);
        
  let [fontsLoaded] = useFonts({
    "NextBro": require("../fonts/NextBro.ttf"),
    "NextBro2": require("../fonts/Roboto-Black.ttf"),
    "Letra": require("../fonts/Letra.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

    return (
      <SafeAreaView style={GlobalStyles.androidSafeArea} >

        
        
        <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>


        <View style={GlobalStyles.logo}>
                  <Image style={GlobalStyles.logo2} 
                  source={require('../images/logo2.png')} />
        </View>

        <ScrollView style={styles.scroll}>
        
        
        
        <View style={{height: '100%'}}>
          <Text style={styles.titulos}>Aprendiendo a respirar</Text>
          <TouchableOpacity 
            onPress={()=>viajar('T96Bl1Md_Oc',sinopsis[0],titulos[0],canales[0])}
            style={styles.video}>     
            <Image style={styles.imagen} source={require('./Herramientas/images/respiracion.webp')}/>     
            <View style={styles.videoT}>
              <Text style={styles.videoText}> Técnica de Respiración Profunda </Text>
              <Text style={styles.videoText2}> Nicklaus Children's Hospital</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>viajar('x0Ig8XNc8d8',sinopsis[1],titulos[1],canales[1])}
            style={styles.video}>
            <Image style={styles.imagen} source={require('./Herramientas/images/Meditacion.webp')}/>  
            <View style={styles.videoT}>
              <Text style={styles.videoText}> Meditación Guiada: Técnica de Respiración Profunda </Text>
              <Text style={styles.videoText2}> Nicklaus Children's Hospital  </Text>
            </View>
        </TouchableOpacity>
          <Text style={styles.titulos}>Burn-Out</Text>
          <TouchableOpacity 
            onPress={()=>viajar('nrkXgRWYiiI',sinopsis[2],titulos[2],canales[2])}
            style={styles.video}>
            <Image style={styles.imagen} source={require('./Herramientas/images/BurnOut.webp')}/> 
              <View style={styles.videoT}>
              <Text style={styles.videoText}> Sindrome de Burnout </Text>
              <Text style={styles.videoText2}> Facultad de Medicina UNAM  </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('IYq35hem4ZU',sinopsis[3],titulos[3],canales[3])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/Video4.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> NO es FLOJERA, tienes BURNOUT </Text>
                <Text style={styles.videoText2}> Psicología Animada  </Text>
              </View>
        </TouchableOpacity>
        
        </View>


         
          
         
          </ScrollView>
          </LinearGradient>

         
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  screen:{
    height:"100%",
    width:"100%",
    //alignItems:'center',
  },
  video:{
    marginTop:"3%",
    paddingTop:"1%",
    width:"90%",
    height:screenDimensions*0.25,
    borderWidth:3,
    borderColor:"#FF4D32 ",
    marginLeft:"5%",
    marginBottom:"3%",
    paddingBottom:"1%",
    alignContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  logo:{ 
    marginTop:'10%',
    alignItems:'center',
},
logo2:{
  marginTop:-15,
  height:60,
  width:200,
},
scroll:{
  marginHorizontal: 0,
  width:"100%",
  height:"100%",
  alignContent:'center',
},
titulos:{
  fontFamily: "NextBro2",
  fontSize: 15, 
  marginTop:"0.5%", 
  marginLeft:"5%",
},
imagen:{
  width:"100%",
  height:"104%", 
  marginTop:"-1.2%" ,
  borderRadius:2
},
videoT:{
  backgroundColor:"#000000",
  position:'absolute',
  bottom:"0%",
  width:"100%",
  height:"40%",
  borderTopStartRadius:2,
  borderTopEndRadius:2,
  opacity:0.7
},
videoText:{
  color:"#FAFAFA",
  fontFamily: "NextBro2",
  fontSize: 18, 
  marginTop:"0.5%", 
  marginLeft:"2%",
},
videoText2:{
  color:"#FAFAFA",
  fontFamily: "NextBro2",
  fontSize: 11, 
  marginTop:"0.5%", 
  marginLeft:"2%",
}


})