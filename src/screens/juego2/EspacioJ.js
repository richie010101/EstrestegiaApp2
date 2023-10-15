import { Text, StyleSheet, View,SafeAreaView,Image, Touchable, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import Casilla from './Casilla';

export default function EspacioJ (props) {
 
    const{valor,ver}=props;

    const Casilla1=0;
    const Casilla2=1;
    const Casilla3=2;
    const Casilla4=3;
    const Casilla5=4;
    const Casilla6=5;
    const Casilla7=6;
    const Casilla8=7;
    const Casilla9=8;


    return (
        <View style={styles.juego}>
            <View style={[styles.lineaH,{marginLeft:"32.5%",marginRight:"66.9%"}]}></View>
            <View style={[styles.lineaH,{marginLeft:"66.9%",marginRight:"32.5%"}]}></View>
            <View style={[styles.lineaV,{marginTop:"33%",marginBottom:"66.9%"}]}></View>
            <View style={[styles.lineaV,{marginTop:"68.5%"}]}></View>


            <View style={styles.fila}>
                <Casilla valor={valor} Casilla={Casilla1} ver={ver} />
                <View style={{marginLeft:8}}/>  
                <Casilla valor={valor} Casilla={Casilla2} ver={ver}/>
                <View style={{marginLeft:8}}/>
                <Casilla valor={valor} Casilla={Casilla3} ver={ver}/>
            </View>
                <View style={{marginTop:12}} />
            <View style={styles.fila}>
                <Casilla valor={valor} Casilla={Casilla4} ver={ver}/>
                <View style={{marginLeft:8}} />  
                <Casilla valor={valor} Casilla={Casilla5} ver={ver}/>
                <View style={{marginLeft:8}}/>
                <Casilla valor={valor} Casilla={Casilla6} ver={ver}/>
            </View>
            <View style={{marginTop:12}}/>
            <View style={styles.fila}>
                <Casilla valor={valor} Casilla={Casilla7} ver={ver}/>
                <View style={{marginLeft:8}} />  
                <Casilla valor={valor} Casilla={Casilla8} ver={ver}/>
                <View style={{marginLeft:8}}  />
                <Casilla valor={valor} Casilla={Casilla9} ver={ver}/>
            </View>

            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.3%",marginLeft:10}]}></View>
            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.3%",marginLeft:54.6}]}></View>
            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.3%",marginLeft:99.5}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:10}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:54.6}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:99.5}]}></View>

            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-45.9%",marginLeft:10}]}></View>
            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-45.9%",marginLeft:54.6}]}></View>
            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-45.9%",marginLeft:99.5}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-56.1%",marginLeft:10}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-56.1%",marginLeft:54.6}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-56.1%",marginLeft:99.5}]}></View>

            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-79.9%",marginLeft:10}]}></View>
            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-79.9%",marginLeft:54.6}]}></View>
            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-79.9%",marginLeft:99.5}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-90.4%",marginLeft:10}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-90.4%",marginLeft:54.6}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-90.4%",marginLeft:99.5}]}></View>



            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.3%",marginLeft:145}]}></View>
            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.3%",marginLeft:191}]}></View>
            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.3%",marginLeft:235}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:145}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:191}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:235}]}></View>

            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-45.9%",marginLeft:145}]}></View>
            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-45.9%",marginLeft:191}]}></View>
            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-45.9%",marginLeft:235}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-56.1%",marginLeft:145}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-56.1%",marginLeft:191}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-56.1%",marginLeft:235}]}></View>

            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-79.9%",marginLeft:145}]}></View>
            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-79.9%",marginLeft:191}]}></View>
            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-79.9%",marginLeft:235}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-90.4%",marginLeft:145}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-90.4%",marginLeft:191}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-90.4%",marginLeft:235}]}></View>

            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.3%",marginLeft:281}]}></View>
            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.4%",marginLeft:324}]}></View>
            <View style={[styles.lineaV2,{marginTop:"11.2%",marginBottom:"-11.7%",marginLeft:368}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:281}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:324}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.4%",marginBottom:"-22.4%",marginLeft:368}]}></View>

            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-46%",marginLeft:281}]}></View>
            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-46.1%",marginLeft:324}]}></View>
            <View style={[styles.lineaV2,{marginTop:"45.8%",marginBottom:"-46.9%",marginLeft:368}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-56.2%",marginLeft:281}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-56.3%",marginLeft:324}]}></View>
            <View style={[styles.lineaV2,{marginTop:"56%",marginBottom:"-57%",marginLeft:368}]}></View>

            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-79.9%",marginLeft:281}]}></View>
            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-80%",marginLeft:324}]}></View>
            <View style={[styles.lineaV2,{marginTop:"79.8%",marginBottom:"-80.9%",marginLeft:368}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-90.5%",marginLeft:281}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-90.6%",marginLeft:324}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90.3%",marginBottom:"-91.5%",marginLeft:368}]}></View>

                
            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"4%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"4%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"4%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"4%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"4%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"4%"}]}></View>

            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"14%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"14%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"14%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"14%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"14%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"14%"}]}></View>

            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"25%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"25%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"25%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"25%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"25%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"25%"}]}></View>


            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"38%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"38%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"38%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"38%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"38%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"38%"}]}></View>

            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"48%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"48%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"48%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"48%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"48%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"48%"}]}></View>

            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"59.5%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"59.5%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"59.5%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"59.5%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"59.5%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"59.5%"}]}></View>

            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"72%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"72%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"72%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"72%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"72%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"72%"}]}></View>

            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"82%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"82%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"82%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"82%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"82%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"82%"}]}></View>

            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"89.3%",marginTop:"93%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"78.3%",marginTop:"93%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.5%",marginRight:"55.3%",marginTop:"93%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.5%",marginRight:"44.3%",marginTop:"93%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"77.5%",marginRight:"22.3%",marginTop:"93%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"88.5%",marginRight:"11.4%",marginTop:"93%"}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    juego:{
      width:"98%",
      height:"49.5%",
      backgroundColor:"#80D6E4",
      marginTop:20,
      alignContent:'center',
      
    },
    lineaH:{
      position:'absolute',
      width:2,
      height:"100%",
      backgroundColor:"#000000",
      
    },
    lineaV:{
      position:'absolute',
      width:"100%",
      height: 2,
      backgroundColor:"#000000",
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
    lineaH2:{
      position:'absolute',
      width:1,
      height:"5%",
      backgroundColor:"#000000",
      
    },
    lineaV2:{
      position:'absolute',
      width:20,
      height:1,
      backgroundColor:"#000000",
    },
    fila:{
        flexDirection:'row'
    }
  })