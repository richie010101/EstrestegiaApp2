import CustomBtnScreen from './CustomBtnScreen'
import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import {LinearGradient} from 'expo-linear-gradient'
import GlobalStyles from '../../styles/GlobalStyles'



export default class Juego3 extends Component {
  render() {
    return (
      
        <View style={styles.container}>
          
            
        <CustomBtnScreen />
      
      
      
        <StatusBar style="auto"/>
        
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})