import { Text, StyleSheet, View,SafeAreaView,Button,  Alert ,Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { Component,useState, useCallback, useRef} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import GlobalStyles from '../styles/GlobalStyles';
import YoutubePlayer from "react-native-youtube-iframe";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';



export default function HerramientasMenu (){

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


        <View style={styles.logo}>
                  <Image style={styles.logo2} 
                  source={require('../images/logo2.png')} />
          </View>

        <ScrollView style={styles.scroll}>
        
        
        


          <Text style={styles.titulos}>Aprendiendo a respirar</Text>
          <TouchableOpacity style={styles.video}></TouchableOpacity>
          <Text style={styles.titulos}>Tratando con el estres</Text>
          <TouchableOpacity style={styles.video}></TouchableOpacity>
          <Text style={styles.titulos}>Aprendiendo a respirar</Text>
          <TouchableOpacity style={styles.video}></TouchableOpacity>



         
          
         
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
    width:"90%",
    height:300,
    borderWidth:1,
    borderColor:"#FF4D32 ",
    marginLeft:"5%",
    marginBottom:"3%",
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
  alignContent:'center',
},
titulos:{
  fontFamily: "Letra",
  fontSize: 15, 
  marginTop:"8%", 
  marginLeft:"5%",
},


})