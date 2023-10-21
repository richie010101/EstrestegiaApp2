import { Text, StyleSheet, View,Image ,SafeAreaView,TouchableOpacity, Platform} from 'react-native'
import React, { Component } from 'react'
import GlobalStyles from '../styles/GlobalStyles';
import {LinearGradient} from 'expo-linear-gradient';
import BotonJuego, {BotonJuego3,BotonJuego2,BotonJuego4} from '../components/BotonJuego';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';


export default function JuegosMenu() {
  LogBox.ignoreLogs(["expo-app-loading is deprecated","React has detected a change in the order of Hooks"]);
        
  let [fontsLoaded] = useFonts({
    "NextBro": require("../fonts/NextBro.ttf"),
    "NextBro2": require("../fonts/Roboto-Black.ttf"),
    "Letra": require("../fonts/Letra.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const navigation=useNavigation(); 
  const  viajar=(screen) =>{
    console.log("viajando " + screen );
    navigation.navigate(screen);
  }

    return (
        <SafeAreaView style={[styles.screen,GlobalStyles.androidSafeArea]}>
        <LinearGradient colors={['#00FFEB','#285EE8']} style={GlobalStyles.screen}>
           
            <View style={GlobalStyles.logo}>
                <Image style={GlobalStyles.logo2} 
                source={require('../images/logo2.png')} />

            </View>
            <Text style={[styles.letra]}>Celebra tus logros,Incluso los pequeños..</Text>
            <Text style={styles.letra}>es importante.</Text>
            <View style={[styles.games,{marginTop:30}]}>
              <BotonJuego nombre={"Memoria"} viajar={viajar} nombre2={'Juego1'} direccion={"../images/juego1/Inicio.png"} />
              <BotonJuego2 nombre={"Aprendiendo"} viajar={viajar} nombre2={'Juego2'} direccion={"../images/juego1/Inicio.png"} />
            </View>
            <View style={styles.games}>
              <BotonJuego3 nombre={"Cambiando"} viajar={viajar} nombre2={'Juego3'} direccion={"../images/juego1/Inicio.png"} />
              <BotonJuego4 nombre={"Buscando"} viajar={viajar} nombre2={'Juego2'} direccion={"../images/juego1/Inicio.png"}/>
            </View>
            


            </LinearGradient>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    letra:{
        color:"#000000",
        fontFamily: "NextBro2",
        fontSize:15,
    },
    juego:{
      margin:15,
      width:"40%",
      height:180,
      backgroundColor:"#FAFFD0",
      borderRadius:20,
      alignContent:'center',
      alignItems:'center',
    },
    games:{
      flexDirection:'row',
      alignContent:'center',
      alignItems:'center'
    }
})