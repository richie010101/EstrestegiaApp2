import CustomBtnScreen from './CustomBtnScreen'
import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import {LinearGradient} from 'expo-linear-gradient'
import GlobalStyles from '../../styles/GlobalStyles'



export default class Juego3 extends Component {
  render() {
    return (
      <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
         <View style={GlobalStyles.logo}>
            <Image style={GlobalStyles.logo2} 
                source={require("../../images/logo2.png")} />
            </View>
      <View>


        <CustomBtnScreen />
      
      

        <StatusBar style="auto"/>
      </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})