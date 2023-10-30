import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const screenDimensions = Dimensions.get('screen').height;


export default function Telefono(props) {

    const{tel}=props;


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
        <View  style={styles.telefonos}>
        <MaterialCommunityIcons 
          name='phone'
          size={screenDimensions*0.036}
          color={"#000000"}
          
          />
          <Text style={[styles.text, {fontSize:20}]}>   {tel}</Text>
          </View>  
    )
}



const styles = StyleSheet.create({
    text:{
        fontFamily: "NextBro2", 
        marginTop:"0.3%",
        textAlign:'right',
        color:"#000000",
        width:"90%",
        //borderWidth:1
      },
    telefonos:{
        flexDirection:'row',
        alignContent:'center',
        borderWidth:1,
        width:screenDimensions* 0.42
      },
})