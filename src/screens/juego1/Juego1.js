import { Text, View,SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'

export class Juego1 extends Component {
  render() {
    return (
      <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <Text style={{color:"#000000"}}>Juego1</Text>
      </SafeAreaView>
    )
  }
}

export default Juego1