import { Text, StyleSheet, View,SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'

export default class Juego2 extends Component {
  render() {
    return (
      <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <View style={{backgroundColor:"#000000"}}>
        <Text style={{color:"#FAFAFA"}}>Juego2</Text>
        </View>
        
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})