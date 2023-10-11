import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';



export default function BotonJuego (props) {
    const {nombre,viajar,nombre2}=props

    return (
        <TouchableOpacity 
            onPress={() => viajar(nombre2)}
            style={styles.juego}>
            <View style={styles.content}>
                <Image style={styles.imagen} source={require('../images/juego1/Inicio.png')} />
            </View>
            <View style={styles.titulo} >
                <Text style={{color:"#000000", fontSize:16, marginTop:15}}>{nombre} </Text>
            </View>
        </TouchableOpacity>
    )
}

export function BotonJuego2(props){
    const {nombre,viajar,nombre2}=props

    return (
        <TouchableOpacity 
            onPress={() => viajar(nombre2)}
            style={styles.juego}>
            <View style={styles.content}>
                <Image style={styles.imagen} source={require('../images/juego1/Inicio.png')} />
            </View>
            <View style={styles.titulo} >
                <Text style={{color:"#000000", fontSize:16, marginTop:15}}>{nombre} </Text>
            </View>
        </TouchableOpacity>
    )
}

export function BotonJuego3(props){
    const {nombre,viajar,nombre2}=props

    return (
        <TouchableOpacity 
            onPress={() => viajar(nombre2)}
            style={styles.juego}>
            <View style={styles.content}>
                <Image style={styles.imagen} source={require('../images/juego2/puzzle.png')} />
            </View>
            <View style={styles.titulo} >
                <Text style={{color:"#000000", fontSize:16, marginTop:15}}>{nombre} </Text>
            </View>
        </TouchableOpacity>
    )
}

export function BotonJuego4(props){
    const {nombre,viajar,nombre2}=props

    return (
        <TouchableOpacity 
            onPress={() => viajar(nombre2)}
            style={styles.juego}>
            <View style={styles.content}>
                <Image style={styles.imagen} source={require('../images/juego1/Inicio.png')} />
            </View>
            <View style={styles.titulo} >
                <Text style={{color:"#000000", fontSize:16, marginTop:15}}>{nombre} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content:{
        height:"70%",
        width:"100%",
       
    },
    imagen:{
        bottom:0,
        height:"100%",
        width:"100%",
        zIndex:-1,
        borderRadius: 10,
        resizeMode:'contain'
    },
    juego:{
        margin:5,
        marginTop:15,
        width:"40%",
        height:190,
        backgroundColor:"#FAFFD0",
        borderRadius:10,
        alignContent:'center',
        alignItems:'center',
      },
      titulo:{
        alignContent:'center',
        alignItems:'center',
        position:'absolute',
        backgroundColor:"#C3E12D",
        height:"30%",
        width:"100%",
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10,
        bottom:-6
      }
})

