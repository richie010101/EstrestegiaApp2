import { Text, StyleSheet, View, Image, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import React, { Component } from 'react'
import GlobalStyles from '../styles/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import BotonJuego, { BotonJuego3, BotonJuego2, BotonJuego4 } from '../components/BotonJuego';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';


export default function JuegosMenu(props) {
  const { route } = props;
  const { usuario } = route.params;
  console.log("se obtiene " + usuario);
  LogBox.ignoreLogs(["expo-app-loading is deprecated", "React has detected a change in the order of Hooks"]);

  let [fontsLoaded] = useFonts({
    "NextBro": require("../fonts/NextBro.ttf"),
    "NextBro2": require("../fonts/Roboto-Black.ttf"),
    "Letra": require("../fonts/Letra.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const navigation = useNavigation();
  const viajar = (screen) => {
    console.log("viajando " + screen,);
    navigation.navigate(screen, { usuario: usuario });
  }

  return (
    <SafeAreaView style={[styles.screen, GlobalStyles.androidSafeArea]}>
      <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>

        <View style={GlobalStyles.logo}>
          <Image style={GlobalStyles.logo2}
            source={require('../images/logo2.png')} />

        </View>
        <Text style={[styles.letra]}>Celebra tus logros,Incluso los pequeños..</Text>
        <Text style={styles.letra}>es importante.</Text>
        <View style={[styles.games]}>
          <BotonJuego nombre={"Dominio de Colores"} viajar={viajar} nombre2={'Juego1'} direccion={"../images/juego1/Inicio.png"} />
          <BotonJuego2 nombre={"Sudoku"} viajar={viajar} nombre2={'Juego2'} direccion={"../images/juego1/Inicio.png"} />
        </View>
        <View style={styles.games}>
          <BotonJuego3 nombre={"Rompecabezas"} viajar={viajar} nombre2={'Juego3'} direccion={"../images/juego1/Inicio.png"} />
        </View>


      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  letra: {
    color: "#000000",
    fontFamily: "NextBro2",
    fontSize: 15,
  },
  games: {
    marginTop:"9%",
    height:"30%",
    width:"80%",
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth:0,
    borderRadius:3,
    
  }
})