import { Text, View ,SafeAreaView,TextInput,TouchableOpacity, StyleSheet,Image, Alert} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp } from 'firebase/app';
import { firebaseConfig } from '../components/firebase';
import Footer from '../components/Footer';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';





export default function CrearCuenta() {


    LogBox.ignoreLogs(["@firebase/auth: Auth"])
  
    const navigation=useNavigation();
    
    
    const [correo,setCorreo] = useState('');
    const [contrasena,setContrasena] = useState('');
    const [contrasena2,setContrasena2] = useState('');
    const app= initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [error1,setError] = useState('');


    const crear = () => {
        if(contrasena===contrasena2){
            createUserWithEmailAndPassword(auth,correo,contrasena)
            .then((userCredential) => {
              console.log('Cuenta Creada')
              const user = userCredential.user;
              console.log(user);
              navigation.navigate("Login");
              Alert.alert("Cuenta Creada, por favor continua iniciando sesion");
            })
            .catch(error => {
              console.log("error");
              errores(error.message);
            })
        }
        else{
            setError("Las contraseñas no coinciden, intente de nuevo")
        }

      }


      const errores=(text) => {
    
        console.log("eror:" + text);
        if("Firebase: Error (auth/email-already-in-use)." == text){
          setError('Email ya en uso, inicia sesion o utiliza otro correo');
        }
        else if("Firebase: Password should be at least 6 characters (auth/weak-password)." == text){
          setError('Contraseña demasiado corta, usa al menos 8 caracteres');
        }
        else if("Firebase: Error (auth/invalid-login-credentials)." == text){
          setError('Correo o contraseña incorrectos, intenta de nuevo');
        }
        else if("Firebase: Error (auth/invalid-email)." ==text){
          setError('Correo invalido, por favor ingrese un correo valido en el espacio Correo');
        }
        else if("Firebase: Error (auth/missing-email)." ==text){
          setError('Correo no ingresado, por favor ingrese un correo valido en el espacio Correo');
        }
        else if("Firebase: Error (auth/missing-password)." == text){
          setError("Escriba la contraseña");
        }
        else if("Firebase: Error (auth/network-request-failed)." == text){
          setError("Conexion fallida, intente de nuevo mas tarde")
        }
        else{
          setError(text);
        }
      }
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
    <LinearGradient colors={['#00FFEB','#285EE8']} style={estilos.fondo}>
    
        <View style={estilos.logo}>
            <Image style={estilos.logo2} 
            source={require('../images/logo.png')} />
        
        </View>

        <View style={estilos.viewI}>
            <Text style={estilos.respuesta2}> Correo</Text>
            <TextInput
                placeholder="Correo" 
                placeholderTextColor='#606060'
                
                onChangeText={(text) => setCorreo(text)}
                style={estilos.input}
                
            />
            <Text style={estilos.respuesta2}> Contraseña</Text>
            <TextInput 
                placeholder="Contraseña"
                placeholderTextColor='#606060'
                secureTextEntry={true}
                onChangeText={(text) => setContrasena(text)}
                style={estilos.input}
            />
            <Text style={estilos.respuesta2}> Confirmar Contraseña</Text>
            <TextInput 
                placeholder="Contraseña"
                placeholderTextColor='#606060'
                secureTextEntry={true}
                onChangeText={(text) => setContrasena2(text)}
                style={estilos.input}
            />
            <TouchableOpacity 
                onPress={crear}
                style={estilos.botones}>
                <Text style={{color:'#FAFAFA',}}> Crear Cuenta</Text>
            </TouchableOpacity >

            <Text style={estilos.respuesta}> {error1}</Text>
            
        </View>
        </LinearGradient>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
    respuesta:{
        margin:10,
        fontWeight:"bold",
        fontSize:15,
        color:"#FAFAFA",
        width:"50%",
        textAlign:'center',
      },
      respuesta2:{
        margin:0,
        fontWeight:"bold",
        fontSize:15,
        color:"#FAFAFA",
        textAlign:'center',
      },
      fondo:{
          height:'100%',
          zIndex:-1,
      },
      logo:{
          
          marginTop:'5%',
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
          marginTop:"3%",
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