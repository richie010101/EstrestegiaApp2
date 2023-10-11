import { Text, StyleSheet, View,SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import GlobalStyles from '../styles/GlobalStyles';





export default class HerramientasMenu extends Component {
  render() {

    return (
      <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <LinearGradient colors={['#00FFEB','#285EE8']} style={styles.screen}>
        <Text style={{color:"#000000"}}>Herramientas  </Text>
        </LinearGradient>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  screen:{
    height:"100%",
    width:"100%",
  }
})