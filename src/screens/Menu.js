import { Text, StyleSheet, View ,SafeAreaView,Image} from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JuegosMenu from './JuegosMenu';
import HerramientasMenu from './HerramientasMenu';
import Apoyo from './Apoyo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




const Tab = createBottomTabNavigator();



export default class Menu extends Component {
  render() {

    return (
            <Tab.Navigator>
                <Tab.Screen name="Juegos" component={JuegosMenu} 
                      options={{ 
                        headerShown: false, 
                        tabBarIcon:({color,size})=>(<MaterialCommunityIcons name='shield' color={color} size={size}/>)
                        }}/>
                <Tab.Screen name="Herramientas" component={HerramientasMenu} 
                      options={{
                         headerShown: false ,
                         tabBarIcon:({color,size})=>(<MaterialCommunityIcons name='lungs' color={color} size={size}/>)
                      }} />
                <Tab.Screen name="Apoyo" component={Apoyo} 
                      options={{
                         headerShown: false ,
                         tabBarIcon:({color,size})=>(<MaterialCommunityIcons name='heart-pulse' color={color} size={size}/>)
                      }} />
            </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
    respuesta:{
        margin:10,
        fontWeight:"bold",
        fontSize:15,
        color:"#FAFAFA",
        width:"50%",
        textAlign:'center',
      },
      fondo:{
          height:'100%',
          zIndex:-1,
      },
      logo:{
          
          marginTop:'10%',
          alignItems:'center',
      },
      logo2:{
        height:200,
        width:200,
      },
      input:{
          backgroundColor:"#FFF",
          height:50,
          width:"70%",
          borderRadius:4,
          color:'#000000',
          margin:10,
          
      },
      viewI:{
          marginTop:80,
          justifyContent: "center",
          alignItems:'center',
      },
      botones:{
          
          margin:3,
          width:"60%",
          justifyContent:'center',
          alignContent:'center',
          alignItems:'center',
          backgroundColor:"#252525",
          height:50,
          borderRadius:17,
      }
})