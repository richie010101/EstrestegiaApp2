import CustomBtnScreen from './CustomBtnScreen'
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'



export default class Juego3 extends Component {
  render() {
    return (
      <View>


        <CustomBtnScreen />
      
      

        <StatusBar style="auto"/>
      </View>
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