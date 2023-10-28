import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import React, {useState} from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { Dimensions} from 'react-native'

const screenDimensions = Dimensions.get('screen').height;

export default function Apoyo() {






  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>

        <View style={GlobalStyles.logo}>
                  <Image style={GlobalStyles.logo2} 
                  source={require('../images/logo2.png')} />
        </View>


        </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    info:{
        height:"100%",
        backgroundColor:"#000000",
        position:'absolute',
        bottom:"0%",
        width:"100%",
        opacity:0.8,
        
    },
      videoText:{
        color:"#FAFAFA",
        fontFamily: "NextBro2",
        fontSize: 21, 
      },
      videoText2:{
        color:"#FAFAFA",
        fontFamily: "NextBro2",
        fontSize: 18, 
      },
      videoText3:{
        color:"#FAFAFA",
        fontFamily: "NextBro2",
        fontSize: 14, 
        textAlign:'justify',
      },
      videoText4:{
        bottom:"6%",
        color:"#FAFAFA",
        fontFamily: "NextBro2",
        fontSize: 11, 
        textAlign:'center',
        position:'absolute',
        marginLeft:"2%",
        width:"96%",
        
      },
      caja:{
        justifyContent:'center',
        marginTop:5,
        marginLeft:"2%",
        marginRight:"2%",
        width:"96%",
      },
})