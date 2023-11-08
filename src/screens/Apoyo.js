import { StyleSheet, Text, View ,SafeAreaView,Image,ScrollView} from 'react-native'
import React, {useState} from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Telefono from '../components/Telefono';

const screenDimensions = Dimensions.get('screen').height;

export default function Apoyo() {


    LogBox.ignoreLogs(["expo-app-loading is deprecated"]);
        
    let [fontsLoaded] = useFonts({
      "NextBro": require("../fonts/NextBro.ttf"),
      "NextBro2": require("../fonts/Roboto-Black.ttf"),
      "Letra": require("../fonts/Letra.ttf"),
    });
    if (!fontsLoaded) {
      return <AppLoading />;
    }






  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <LinearGradient colors={['#97FFF8','#7CFFF7']} style={GlobalStyles.screen}>

        

        <View style={GlobalStyles.logo}>
                  <Image style={GlobalStyles.logo2} 
                  source={require('../images/logo2.png')} />    
        </View>

        <ScrollView style={styles.scroll} alignItems={'center'}>

        <View style={styles.caja}>
            <Text style={styles.text}>El burnout es una situación muy difícil y agotadora.</Text>

            <Text style={styles.text}>Queríamos tomarnos un momento para decirte que reconocemos lo agotador 
                                      que puede ser enfrentar el burnout, y queremos que sepas que no estás 
                                      sol@ en esto. {'\n'}</Text>

            <Text style={styles.text}>Tambien queremos compartir contigo algunas formas que podría ayudarte a 
                                      desconectar y encontrar apoyo de una manera diferente: a través de videos 
                                      y juegos. {'\n'}</Text>                 

            <Text style={styles.text}>Sumergirse en videos que transmiten mensajes informativos 
                                      sobre el bienestar mental puede brindar claridad y consuelo. Además, los 
                                      juegos pueden ser una excelente forma de desconectar y relajarse. "Estres-tegia"
                                      brinda una serie de videos y juegos que puedes usar como apoyo en este proceso
                                      {'\n'}</Text>
                                      
            <Text style={styles.text}>Sin embargo, ademas de esto, es importante que te cuides a ti mism@ y que 
                                      busques apoyo. No tienes que cargar con esto todo sol@. Puede ser útil 
                                      hablar con un profesional para entender mejor lo que estás experimentando 
                                      y encontrar estrategias para superar este momento difícil.
                                      {'\n'}</Text>

            <Text style={styles.text}>Por eso, ademas de los videos y juegos que se encuentran en nuestra 
                                      plataforma, te brindamos mas recursos de apoyo que podrian servirte, recuerda, 
                                      tu salud mental es importante.
                                      {'\n'}</Text>

            <Text style={styles.text2}>Apoyo local ITM</Text>
            <Telefono tel={"4431687259"} />
            <Text style={[styles.text, styles.sub ]}>La psicóloga Cecilia Ekaterina Cornejo García, ofrece atención gratuita a los
                                                    estudiantes del Instituto Tecnológico de Morelia y brindar apoyo en las situaciones 
                                                    que se encuentren. </Text>                          
    
            <Text style={styles.text2}>Consejería SAPTEL</Text>
            <Telefono tel={"55 5259 8121"} />
            <Text style={[styles.text, styles.sub ]}>El Sistema Nacional de Apoyo, Consejo Psicológico e Intervención en 
                                      Crisis por Teléfono, ofrece un servicio de terapia psicológica gratuita 
                                      facilitada por psicólogos certificados.</Text>
            <Text style={styles.text2}>Vivetel Salud Mental</Text>
            <Telefono tel={"800 232 8432"}/>
            <Text style={[styles.text, styles.sub ]}>Servicio de atención psicológica gratuita vía telefónica, 
                                                     los psicólogos que la atienden se especializan en brindar 
                                                     intervención en crisis y orientar acerca de la prevención del 
                                                     suicidio.</Text>
            <Text style={styles.text2}>IMMUJERIS</Text>
            <Telefono tel={"4432327000 AL 02"}/>
            <Text style={[styles.text, styles.sub ]}>Acompañamiento a mujeres en situación de crisis, terapia
                                                     individual y/o pareja, grupos terapéuticos, grupos de contención,
                                                     pláticas y talleres.
                                                     </Text>
            <Text style={styles.text2}>UNAM</Text>
            <Telefono tel={"55 5025 0855"}/>
            <Text style={[styles.text, styles.sub ]}>Línea de atención psicológica call center especializada en salud mental: 
                                                    ofrecen ayuda de primer contacto en temas como problemas de ansiedad, crisis, entre otros.
                                                     </Text>
            <Text style={styles.text2}>Centros de integración juvenil</Text>
            <Telefono tel={"5552121212"}/>
            <Text style={[styles.text, styles.sub ]}>Apoyo psicológico gratuito de lunes a domingo de 8:30 am a 10:00 pm.
                                                     </Text>

            <Text style={styles.text2}>Consejo ciudadano para la seguridad y justicia de la ciudad de México</Text>
            <Telefono tel={"55 5533 5533"}/>
            <Text style={[styles.text, styles.sub ]}>Se brindan primeros auxilios psicológicos las 24 horas todos los días.
                                                     </Text>

            <Text style={styles.text2}>Educatel SEP</Text>
            <Telefono tel={"55 3601 7599"}/>
            <Text style={[styles.text, styles.sub ]}>Servicio de atención psicológica que ofrece la SEP.
                                                     </Text>  

            <Text style={styles.text2}>Línea UAM</Text>
            <Telefono tel={"555 804 6444"}/>
            <Text style={[styles.text, styles.sub ]}>Su línea de asistencia psicológica gratuita ofrece orientación en problemas emocionales,
                                                    inició como un servicio dirigido a universitarios, pero actualmente atiende a la población general.
                                                     </Text>                                       








                 
        </View>
        
        </ScrollView>

        </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    sub:{
        marginBottom:"2%",
        fontSize:11
    },
    text:{
        fontFamily: "NextBro2", 
     //   marginTop:"2%",
        textAlign:'justify',
        color:"#000000",
    },
    text2:{
        fontSize:18,
        fontFamily:"NextBro2",
        color:"#000000",
    },
    caja:{
        marginTop:5,
        width:"92%",
        marginBottom:"2%",
    },
    scroll:{
        flex: 1,
        alignContent:'center',
        marginHorizontal: 0, 
        width:"100%",
    //    backgroundColor:"#4EFFF3",
    },
})