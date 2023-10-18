import { Text, StyleSheet, View,SafeAreaView,Image, Touchable, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import Casilla from './Casilla';

export default function EspacioJ (props) {
 
    const{valor,ver,bloqueados,sudoku}=props;

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
            <View style={[styles.lineaH,{marginLeft:"33%",marginRight:"-32.8%"}]}></View>
            <View style={[styles.lineaH,{marginLeft:"66.7%",marginRight:"-66.5%"}]}></View>
            <View style={[styles.lineaV,{marginTop:"33%"}]}></View>
            <View style={[styles.lineaV,{marginTop:"67.5%"}]}></View>


            <View style={styles.fila}>
                <Casilla valor={valor} Casilla={Casilla1} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/>
                <View style={{marginLeft:"1.5%"}}></View>
                <Casilla valor={valor} Casilla={Casilla2} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/>
                <View style={{marginLeft:"1%"}}></View>
                <Casilla valor={valor} Casilla={Casilla3} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/>
            </View>
            <View style={{marginTop:"-24%"}}></View>
            <View style={styles.fila}>
                <Casilla valor={valor} Casilla={Casilla4} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/> 
                <View style={{marginLeft:"1.5%"}}></View>
                <Casilla valor={valor} Casilla={Casilla5} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/>
                <View style={{marginLeft:"1%"}}></View>
                <Casilla valor={valor} Casilla={Casilla6} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/>
            </View>
            <View style={{marginTop:"-23.1%"}}></View>
            <View style={styles.fila}>
                <Casilla valor={valor} Casilla={Casilla7} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/>
                <View style={{marginLeft:"1.5%"}}></View>
                <Casilla valor={valor} Casilla={Casilla8} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/>
                <View style={{marginLeft:"1%"}}></View>
                <Casilla valor={valor} Casilla={Casilla9} ver={ver} bloqueados={bloqueados} sudoku={sudoku}/>
            </View>

            <View style={[styles.lineaV2,{marginTop:"10.9%"}]}></View>
            <View style={[styles.lineaV2,{marginTop:"22.1%"}]}></View>
            <View style={[styles.lineaV2,{marginTop:"44.4%"}]}></View>
            <View style={[styles.lineaV2,{marginTop:"55.5%"}]}></View>
            <View style={[styles.lineaV2,{marginTop:"79%"}]}></View>
            <View style={[styles.lineaV2,{marginTop:"90%"}]}></View>





            <View style={[styles.lineaH2,{marginLeft:"10.5%",marginRight:"-10.48%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"21.5%",marginRight:"-21.52%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"44.4%",marginRight:"-44.38%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"55.6%",marginRight:"-55.62%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"78%",marginRight:"-78.02%"}]}></View>
            <View style={[styles.lineaH2,{marginLeft:"89%",marginRight:"-89.02%"}]}></View>
  

        
        </View>
    )
}

const styles = StyleSheet.create({
    juego:{
      width:"98%",
      height:"49%",
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
      width:0.5,
      height:"100%",
      backgroundColor:"#000000",
      
    },
    lineaV2:{
      position:'absolute',
      width:"100%",
      height:0.5,
      backgroundColor:"#000000",
    },
    fila:{
        flexDirection:'row'

    },
  })