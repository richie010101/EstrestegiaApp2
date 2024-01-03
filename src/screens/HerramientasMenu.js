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
              <Text style={styles.videoText}> {titulos[0]} </Text>
              <Text style={styles.videoText2}> {canales[0]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>viajar('x0Ig8XNc8d8',sinopsis[1],titulos[1],canales[1])}
            style={styles.video}>
            <Image style={styles.imagen} source={require('./Herramientas/images/Meditacion.webp')}/>  
            <View style={styles.videoT}>
              <Text style={styles.videoText}> {titulos[1]} </Text>
              <Text style={styles.videoText2}> {canales[1]}  </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('2orNd9UZpFo',sinopsis[2],titulos[2],canales[2])}
            style={styles.video}>
            <Image style={styles.imagen} source={require('./Herramientas/images/video5.webp')}/>  
            <View style={styles.videoT}>
              <Text style={styles.videoText}> {titulos[2]} </Text>
              <Text style={styles.videoText2}> {canales[2]}  </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('YTgeSnYz8c4',sinopsis[3],titulos[3],canales[3])}
            style={styles.video}>
            <Image style={styles.imagen} source={require('./Herramientas/images/video6.webp')}/>  
            <View style={styles.videoT}>
              <Text style={styles.videoText}> {titulos[3]} </Text>
              <Text style={styles.videoText2}> {canales[3]}  </Text>
            </View>
        </TouchableOpacity>
        
          <Text style={styles.titulos}>BurnOut</Text>
          <TouchableOpacity 
            onPress={()=>viajar('nrkXgRWYiiI',sinopsis[4],titulos[4],canales[4])}
            style={styles.video}>
            <Image style={styles.imagen} source={require('./Herramientas/images/BurnOut.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[4]} </Text>
                <Text style={styles.videoText2}> {canales[4]}  </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('IYq35hem4ZU',sinopsis[5],titulos[5],canales[5])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/Video4.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[5]} </Text>
                <Text style={styles.videoText2}> {canales[5]}  </Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('G6bqMASijK8',sinopsis[6],titulos[6],canales[6])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/video7.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[6]} </Text>
                <Text style={styles.videoText2}> {canales[6]}  </Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('nKI03ncN374',sinopsis[7],titulos[7],canales[7])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/video8.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[7]} </Text>
                <Text style={styles.videoText2}> {canales[7]}  </Text>
              </View>
        </TouchableOpacity>


        <Text style={styles.titulos}>Mas videos que podrian ayudar...</Text>

        <TouchableOpacity 
            onPress={()=>viajar('kehJ5b45OE4',sinopsis[8],titulos[8],canales[8])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/video9.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[8]} </Text>
                <Text style={styles.videoText2}> {canales[8]}  </Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('ihLiNXyaHoM',sinopsis[9],titulos[9],canales[9])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/video10.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[9]} </Text>
                <Text style={styles.videoText2}> {canales[9]}  </Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('iEdv9X8JbsA',sinopsis[10],titulos[10],canales[10])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/video11.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[10]} </Text>
                <Text style={styles.videoText2}> {canales[10]}  </Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('x44EQym4Xpo',sinopsis[11],titulos[11],canales[11])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/video12.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[11]} </Text>
                <Text style={styles.videoText2}> {canales[11]}  </Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>viajar('1eZepcg6aC0',sinopsis[12],titulos[12],canales[12])}
            style={styles.video}>
              <Image style={styles.imagen} source={require('./Herramientas/images/video13.webp')}/> 
              <View style={styles.videoT}>
                <Text style={styles.videoText}> {titulos[12]} </Text>
                <Text style={styles.videoText2}> {canales[12]}  </Text>
              </View>
        </TouchableOpacity>

        <Text style={styles.videoText4}> cada video obtenido de Youtube en la plataforma 'Estrestegia' 
                                                se origina en fuentes confiables con el propósito de brindar a los 
                                                usuarios información que les permita llevar una vida más saludable e 
                                                informada.</Text>
        
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
  fontSize: 17, 
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
},
videoText4:{
  color:"#FAFAFA",
  fontFamily: "NextBro2",
  fontSize: 11, 
  textAlign:'center',
  marginLeft:"2%",
  width:"96%",
  marginBottom:"5%",
  
},


})