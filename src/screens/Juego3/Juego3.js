import CustomBtnScreen from './CustomBtnScreen'
import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import {LinearGradient} from 'expo-linear-gradient'
import GlobalStyles from '../../styles/GlobalStyles'



export default  function Juego3(props) {

  const{route}=props;
  const{usuario}=route.params;
  console.log(usuario);
    return (          
        <CustomBtnScreen />
      
    )
}

const styles = StyleSheet.create({
  container:{
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  }
})