import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.viewFooter}>
        <Text style={styles.Text}> Created by Estres-tegia Team</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    viewFooter:{
      position: "absolute",
      bottom:0,
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
      marginBottom:10,
    },
    Text:{
      fontWeight:"bold",
      fontSize:9,
      color:"#FAFAFA",
    }
  })