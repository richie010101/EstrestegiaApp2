import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';



export default function BotonJuego (props) {
    const {nombre,viajar,nombre2}=props

    return (
        <TouchableOpacity 
            onPress={() => viajar(nombre2)}
            style={styles.final}>
            <View >
                <Image style={{width:"100%", height:"85%" , borderRadius:7}} source={require('../images/juego1/ejemplo2.png')} />
            </View>
            
            <View style={styles.titulo} >
                <Text style={{marginLeft:"10%",width:"80%",color:"#000000", fontFamily: "NextBro", fontSize:16, marginTop:15,textAlign:'center'}}>{nombre} </Text>
             </View> 
        </TouchableOpacity>
    )
}

export function BotonJuego2(props){
    const {nombre,viajar,nombre2}=props

    return (
        <TouchableOpacity 
            onPress={() => viajar(nombre2)}
            style={styles.final}>
            <View style={styles.content}>
                <Image style={{width:"100%", height:"80%" , marginTop:"-2.8%", borderRadius:10}} source={require('../images/juego1/sBueno.png')} />
            </View>
            <View style={styles.titulo} >
                <Text style={{color:"#000000", fontFamily: "NextBro", fontSize:16, marginTop:15,textAlign:'center'}}>{nombre} </Text>
            </View>
        </TouchableOpacity>
    )
}

export function BotonJuego3(props){
    const {nombre,viajar,nombre2}=props

    return (
        <TouchableOpacity 
            onPress={() => viajar(nombre2)}
            style={styles.final}>
            <View style={styles.content}>
                <Image style={styles.imagen} source={require('../images/juego2/puzzle.png')} />
            </View>
            <View style={styles.titulo} >
                <Text style={{color:"#000000", fontFamily: "NextBro", fontSize:16, marginTop:15,textAlign:'center'}}>{nombre} </Text>
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
                <Text style={{color:"#000000", fontFamily: "NextBro", fontSize:16, marginTop:15,textAlign:'center'}}>{nombre} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content:{
        height:"100%",
        width:"100%",
       
    },
    final:{borderColor:"#000000", height:"100%", width:"47%", marginRight:"3%", marginLeft:"3%", borderWidth:1, borderRadius:7},
    imagen:{
        height:"100%",
        width:"100%",
        zIndex:-1,
        resizeMode:'contain'
    },
    juego:{
        //marginTop:"-8%",
        borderWidth:1,
        width:"40%",
        height:"80%",
        backgroundColor:"#FAFFD0",
        borderRadius:1,
        alignContent:'center',
        alignItems:'center',
      },
      titulo:{
       // alignContent:'center',
       // alignItems:'center',
        position:'absolute',
        backgroundColor:"#C3E12D",
        height:"30%",
        width:"100%",
        borderBottomEndRadius:7,
        borderBottomLeftRadius:7,
        bottom:0
      }
})

