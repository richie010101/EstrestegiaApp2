import { Text, StyleSheet, View,SafeAreaView,Image, Touchable, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';

export default function Casilla (props) {
    const {valor,Casilla,ver}=props;

    nuevo=undefined
    nuevo1=undefined
    nuevo2=undefined
    nuevo3=undefined
    if(Casilla===1){
        nuevo=5
    }
    if(Casilla===6){
        nuevo1=3
    }
    if(Casilla===2){
        nuevo2=9
    }
    if(Casilla===8){
        nuevo3=8
    }

 


    const[espacio00,Set00]=useState(nuevo)
    const[espacio01,Set01]=useState()
    const[espacio02,Set02]=useState(nuevo2)
    const[espacio10,Set10]=useState()
    const[espacio11,Set11]=useState(nuevo1)
    const[espacio12,Set12]=useState()
    const[espacio20,Set20]=useState()
    const[espacio21,Set21]=useState(nuevo3)
    const[espacio22,Set22]=useState()
    

    const poner=(lugar,fil,col) =>{
        
        if(lugar===1){
            Set00(valor)
        }
        if (lugar==2){
            Set01(valor)
        }
        if(lugar===3){
            Set02(valor)
        }
        if (lugar==4){
            Set10(valor)
        }
        if(lugar===5){
            Set11(valor)
        }
        if (lugar==6){
            Set12(valor)
        }
        if (lugar==7){
            Set20(valor)
        }
        if(lugar===8){
            Set21(valor)
        }
        if (lugar==9){
            Set22(valor)
        }
        
        ver(Casilla,fil,col,valor)
        
        
    }

    return (
        <View >
            <View style={styles.fila}>
                <View style={styles.columna}>
                    <TouchableOpacity style={styles.boton} onPress={()=>poner(1,0,0)}>
                        <Text style={styles.letraB}>{espacio00}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>poner(2,0,1)} style={[styles.boton, {marginTop:14}]} >
                        <Text style={styles.letraB}>{espacio01}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>poner(3,0,2)} style={[styles.boton, {marginTop:14}]}>
                        <Text style={styles.letraB}>{espacio02}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.columna,{marginLeft:4}]}>
                    <TouchableOpacity onPress={()=>poner(4,1,0)} style={styles.boton}>
                        <Text style={styles.letraB}>{espacio10}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>poner(5,1,1)} style={[styles.boton, {marginTop:14}]}>
                        <Text style={styles.letraB}>{espacio11}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>poner(6,1,2)} style={[styles.boton, {marginTop:14}]}>
                        <Text style={styles.letraB}> {espacio12}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.columna]}>
                    <TouchableOpacity onPress={()=>poner(7,2,0)} style={styles.boton}>
                        <Text style={styles.letraB}> {espacio20} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>poner(8,2,1)} style={[styles.boton, {marginTop:14}]}>
                        <Text style={styles.letraB}> {espacio21}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>poner(9,2,2)} style={[styles.boton, {marginTop:14}]}>
                        <Text style={styles.letraB}> {espacio22}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    casilla:{
      marginLeft:"2%",
      marginTop:10,
      flexDirection:'row',
      alignContent:'center',
      alignItems:'center',
    },
    boton:{
      width: 30,
      height: 30,
      marginTop:9,
      marginLeft:6,
      marginRight:5,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      borderRadius: 100,
      opacity:1
    },
    letraB:{
      color:"#000000",fontSize:14,bottom:1
    },
    fila:{
        flexDirection:'row'
    },
    columna:{

    }
  })