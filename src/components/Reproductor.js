import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { Dimensions} from 'react-native'

const screenDimensions = Dimensions.get('screen').height;

export default function Reproductor({route}) {

    console.log(route);
    const{idV}=route.params;
    const{sinopsis}=route.params;
    console.log(sinopsis);
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
            


            <View style={styles.info}>
            <View style={{marginTop:"0.5%"}}>
            <YoutubePlayer
            height={screenDimensions*0.26}
            width={"100%"}
            videoId={idV}
            />
            </View>

            <Text style={styles.videoText}> {sinopsis}</Text>

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
        fontSize: 18, 
        marginTop:"0.5%", 
        marginLeft:"2%",
      },
})