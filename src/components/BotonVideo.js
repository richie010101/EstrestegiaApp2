import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';



export default function BotonVideo () {
    return (
        <TouchableOpacity 
            
            style={styles.video}>
        </TouchableOpacity>
    )
}

export function BotonVideo2(){
    return (
        <TouchableOpacity 
            style={styles.video}>
        </TouchableOpacity>
    )
}

export function BotonVideo3(){
    return (
        <TouchableOpacity 
            style={styles.video}>
        </TouchableOpacity>
    )
}

export function BotonVideo4(){
    return (
        <TouchableOpacity 
            style={styles.video}>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    video:{
        
        paddingTop:"10%",
        marginTop:"1%",
        width:"90%",
        height:"50%",
        borderWidth:5,
        borderColor:"#FF4D32 ",
        marginLeft:"5%",
        marginBottom:"3%",
      },
})

