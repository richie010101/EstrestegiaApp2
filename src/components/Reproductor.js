import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import React, {useState} from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { Dimensions} from 'react-native'

const screenDimensions = Dimensions.get('screen').height;

export default function Reproductor({route}) {


    const [mostrar,setMostrar]=useState(1)
    console.log(route);
    const{idV}=route.params;
    const{sinopsis}=route.params;
    const{titulo}=route.params;
    const{canal}=route.params;
    console.log(sinopsis);


    const muestra = () => {
      if(mostrar===1){
        setMostrar(100);
      }
      else{
        setMostrar(1);
      }
      
    };
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>

            <View style={styles.info}>

            <View style={{marginTop:0}}>
            <YoutubePlayer
            height={screenDimensions*0.26}
            width={"100%"}
            videoId={idV}
            />
            </View>
            <View style={styles.caja}>
              <Text style={styles.videoText}> {titulo}</Text>
              <Text style={styles.videoText2}> {canal}</Text>
              <Text numberOfLines={mostrar} style={styles.videoText3} onPress={()=>muestra()}> {sinopsis}</Text>
            </View>
              <Text style={styles.videoText4}> cada videos alojado en la plataforma 'Estrestegia' 
                                                se origina en fuentes confiables con el propósito de brindar a los 
                                                usuarios información que les permita llevar una vida más saludable e 
                                                informada.</Text>
              </View>
            <View style={[GlobalStyles.logo3,{bottom:"-94%"}]}>
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
        width:"96%",
      },
})