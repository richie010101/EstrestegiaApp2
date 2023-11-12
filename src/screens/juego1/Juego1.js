import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, addDoc, doc, onSnapshot, orderBy, query, QuerySnapshot, limit } from "firebase/firestore";
import GlobalStyles from '../../styles/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebaseConfig } from '../../components/firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as RN from 'react-native';






export function Puntuacion({
  id,
  numero,
  user,
  cadena,
  actual,
  cadena2
}) {


  /*return <Text style={{ margin: 15, fontFamily: "prueba2", fontSize: 18 }}>Puntaje.............................................{numero}</Text>
  setMayor(numero)*/
  //console.log(numero + actual)
  if (actual === numero && cadena === cadena2) {
    return <Text style={{ margin: 15, fontFamily: "prueba2", fontSize: 18, backgroundColor: "#FAFAFA", width: "80%", height: "4%", textAlign: 'center', textAlignVertical: 'center', paddingTop: "1%", borderRadius: 3 }}>Puntaje.............................................{numero}</Text>
  }
  return <Text style={{ margin: 15, fontFamily: "prueba2", fontSize: 18 }}>Puntaje.............................................{numero}</Text>
}


export default function Juego1(props) {
  const firebase = initializeApp(firebaseConfig);
  database = getFirestore();
  const [ayuda, setAyuda] = useState(1);
  const [zindex1, setZindex] = useState(5);

  const generateRandomString =
    () => {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result1 = ' ';
      const charactersLength = characters.length;
      for (let i = 0; i < 10; i++) {
        result1 +=
          characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result1;
    }






  const { startingMinutes = 0, startingSeconds = 30 } = props;
  const [termino2, setTermino2] = useState(0);
  const [termino3, setTermino3] = useState(0);
  const [bloqueo, setBloqueo] = useState(true);
  const [acerto, setAcerto] = useState(0)
  const [fallo, setFallo] = useState(0)
  const [mayor, setMayor] = useState(0)
  const [subido, setSubido] = useState(false);
  const { route } = props;
  const { usuario } = route.params;
  const [resultado, setBuenas] = useState({
    numero: 0,
    user: usuario,
    cadena: ''
  });
  let colores = ["azul", "negro", "rojo", "verde", "violeta"]
  let coloresValor = ["#03F5FD", "#000000", "#FF0000", "#00FF66", "#D300FD"]


  const [palabra1, setPalabra1] = useState("azul");
  const [palabra2, setPalabra2] = useState("verde");

  const [palabra1Color, setPalabra1Color] = useState("#0022FF");
  const [palabra2Color, setPalabra2Color] = useState("#00FF66");

  const empezar = () => {
    const terminar = setTimeout(cronometro, 45000);
  }

  function cronometro() {
    setTermino2(1);
    setBloqueo(true);
    if (!subido) {
      subir();
      setSubido(true);
    }
  }

  const sumar = () => {
    setAcerto(1)
    setFallo(0)

    resultado.numero = resultado.numero + 1;
    //console.log(resultado.numero);
  }

  const subir = async () => {
    resultado.cadena = generateRandomString()
    console.log(resultado);
    await addDoc(collection(database, usuario + '-Juego1',), resultado);
  }

  const [puntajes, setPuntajes] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, usuario + '-Juego1');
    const q = query(collectionRef, orderBy('numero', 'desc'), limit(5));

    const unsuscribe = onSnapshot(q, querySnapshot => {
      setPuntajes(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          numero: doc.data().numero,
          user: doc.data().user,
          cadena: doc.data().cadena
        })
        )
      )
    })
    return unsuscribe;
  }, [])

  const igual = () => {
    var fallo = 1;
    console.log(usuario);
    if (palabra1 === colores[0]) {
      if (palabra2Color === coloresValor[0]) {
        sumar()
        fallo = 0;
      }
    }
    if (palabra1 === colores[1]) {
      if (palabra2Color === coloresValor[1]) {
        sumar()
        fallo = 0;
      }
    }
    if (palabra1 === colores[2]) {
      if (palabra2Color === coloresValor[2]) {
        sumar()
        fallo = 0;
      }
    }
    if (palabra1 === colores[3]) {
      if (palabra2Color === coloresValor[3]) {
        sumar()
        fallo = 0;
      }
    }
    if (palabra1 === colores[4]) {
      if (palabra2Color === coloresValor[4]) {
        sumar()
        fallo = 0;
      }
    }
    if (fallo === 1) {
      setAcerto(0)
      setFallo(1)
    }
    cambiar()
  }
  const mPuntaje = () => {
    setTermino3(3);
  }

  const diferente = () => {
    var fallo = 1;
    console.log("hola");
    if (palabra1 === colores[0]) {
      if (palabra2Color !== coloresValor[0]) {
        sumar()
        fallo = 0;
      }
    }
    else if (palabra1 === colores[1]) {
      if (palabra2Color !== coloresValor[1]) {
        sumar()
        fallo = 0;
      }
    }
    else if (palabra1 === colores[2]) {
      if (palabra2Color !== coloresValor[2]) {
        sumar()
        fallo = 0;
      }
    }
    else if (palabra1 === colores[3]) {
      if (palabra2Color !== coloresValor[3]) {
        sumar()
        fallo = 0;
      }
    }
    else if (palabra1 === colores[4]) {
      if (palabra2Color !== coloresValor[4]) {
        sumar()
        fallo = 0;
      }
    }
    else { }

    if (fallo === 1) {
      setAcerto(0)
      setFallo(1)
    }
    cambiar()
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const cambiar = () => {
    if (0 === getRandomInt(2)) {
      var iguales = getRandomInt(4)
      setPalabra1(colores[iguales])
      setPalabra2(colores[getRandomInt(4)])
      setPalabra1Color(coloresValor[getRandomInt(4)])
      setPalabra2Color(coloresValor[iguales])
    }
    else {
      setPalabra1(colores[getRandomInt(4)])
      setPalabra2(colores[getRandomInt(4)])
      setPalabra1Color(coloresValor[getRandomInt(4)])
      setPalabra2Color(coloresValor[getRandomInt(4)])
    }

  }

  LogBox.ignoreLogs(["expo-app-loading is deprecated"]);

  let [fontsLoaded] = useFonts({
    "prueba2": require("../../fonts/NextBro.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  const estadisticasCerrar = () => {
    setTermino3(0);
  }

  const navigation = useNavigation();
  const salir = () => {
    navigation.navigate("Menu", { usuario: usuario });
  }



  const cerrar = () => {
    setBloqueo(false);
    setAyuda(0);
    setZindex(-1);
    cambiar();
    empezar();
  }


  return (
    <SafeAreaView style={[GlobalStyles.androidSafeArea, { alignItems: 'center', alignContent: 'center' }]}>

      <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>
        <View style={GlobalStyles.logo}>
          <Image style={GlobalStyles.logo2}
            source={require("../../images/logo2.png")} />
        </View>

        <View style={styles.container}>
          {/*} <Text style={{ color: "#000000", fontSize: 13, textAlign: 'justify' }}>Explicacion: si la palabra de arriba dice el color de la plabra de abajo Selecciona Verdadero, de lo contrario selecciona Falso</Text>
    {*/}
        </View>

        <View style={[styles.final, { opacity: termino2, zIndex: 2 }]}>
          <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>
            <Text style={{ fontFamily: "prueba2", marginTop: "20%", fontSize: 30 }}> ¡Felicidades! lograste  </Text>
            <Text style={{ fontFamily: "prueba2", marginTop: "20%", fontSize: 50 }}> {resultado.numero}   </Text>
            <Text style={{ fontFamily: "prueba2", marginTop: "20%", fontSize: 30 }}> respuestas correctas   </Text>
            <TouchableOpacity onPress={() => mPuntaje()} style={{ width: "75%" }} >
              <Text style={{ paddingTop: 10, marginTop: "80%", fontFamily: "prueba2", marginTop: "15%", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Ver mis estadisticas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => salir()} style={{ width: "75%" }} >
              <Text style={{ paddingTop: 10, marginTop: "80%", fontFamily: "prueba2", marginTop: "15%", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Ver mas juegos</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={[styles.apoyo, { opacity: ayuda, zIndex: zindex1 }]}>
          <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>
            <Text style={{ fontFamily: "prueba2", marginTop: "02%" }}> ¿Como se juega?</Text>
            <Text style={{ fontFamily: "prueba2", width: "90%", marginTop: "5%", textAlign: 'justify' }}>Dominio de Colores es un juego que ayuda a mejorar la flexibilidad al desafiar tus respuestas automáticas.  </Text>
            <Text style={styles.apoyo2}>¿cuando presionar verdadero? </Text>
            <Text style={styles.apoyo3}>cuando el significado de la primera palabra coincida con el color de la segunda palabra
              presiona verdadero </Text>
            <Image style={styles.imagenApoyo}
              source={require("./ejemplo2.png")} />
            <Text style={styles.apoyo2}>¿cuando presionar falso? </Text>
            <Text style={styles.apoyo3}>cuando el significado de la primera palabra no coincida con el color de la segunda palabra
              presiona verdadero </Text>
            <Image style={styles.imagenApoyo}
              source={require("./ejemplo1.png")} />
            <TouchableOpacity onPress={() => cerrar()} style={{ width: "75%" }}>
              <Text style={{ paddingTop: 10, marginTop: "80%", fontFamily: "prueba2", marginTop: "3%", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Comenzar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={[styles.final, { opacity: termino3, zIndex: termino3 }]}>
          <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>
            <Text style={{ marginTop: "5%", marginBottom: "12%", fontSize: 30, fontFamily: "prueba2" }} > Mejores Puntuaciones</Text>
            {puntajes.map(puntaje => <Puntuacion key={puntaje.id} {...puntaje} actual={resultado.numero} cadena2={resultado.cadena} />)}
            <TouchableOpacity onPress={() => estadisticasCerrar()} style={{ width: "75%" }}>
              <Text style={{ paddingTop: 10, marginTop: "80%", fontFamily: "prueba2", marginTop: "15%", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Cerrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => salir()} style={{ width: "75%" }}>
              <Text style={{ paddingTop: 10, marginTop: "80%", fontFamily: "prueba2", marginTop: "15%", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Ver mas juegos</Text>
            </TouchableOpacity>
          </LinearGradient>

        </View>

        <Text style={[styles.palabras, { color: palabra1Color, marginTop: "40%", fontFamily: "prueba2", paddingTop: "5%" }]}> {palabra1}</Text>
        <Text style={[styles.palabras, { color: palabra2Color, fontFamily: "prueba2", paddingTop: "5%" }]}> {palabra2}</Text>



        <AntDesign style={[styles.aciertos, { opacity: acerto }]} name="checkcircle" size={80} color="green" />
        <Entypo style={[styles.aciertos, { opacity: fallo }]} name="circle-with-cross" size={90} color="red" />


        <View style={styles.botones}>

          <TouchableOpacity style={styles.boton} onPress={() => diferente()} disabled={bloqueo}>
            <Text style={{ color: "#FAFAFA", paddingTop: "6%" }}> Falso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => igual()} disabled={bloqueo} >
            <Text style={{ color: "#FAFAFA", paddingTop: "6%" }}> Verdadero</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  aciertos: {
    position: 'absolute',
    bottom: "17%"

  },
  apoyo2: { fontFamily: "prueba2", width: "90%", marginTop: "3%", textAlign: 'center', borderWidth: 0 },
  apoyo3: { fontFamily: "prueba2", width: "90%", marginTop: "3%", textAlign: 'justify', borderWidth: 0 },
  imagenApoyo: {
    marginTop: "1%",
    width: "50%",
    height: "25%"
  },
  boton: {
    width: "47%",
    margin: 5,
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0D0D0E",
    borderRadius: 0,
    opacity: .9,
  },
  botones: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingLeft: 5,
  },
  final: {
    position: 'absolute',
    width: "85%",
    height: "70%",
    textAlign: 'center',
    backgroundColor: "#FAFAFA",
    marginTop: "30%",
    borderWidth: 2,
  },

  palabras: {
    borderRadius: 15,
    fontSize: 60,
    backgroundColor: "#FAFAFA",
    width: "70%",
    textAlign: 'center',
    paddingRight: "4.5%",
    margin: 10,
    height: 110,
    paddingTop: "1.5%",
    marginTop: 15,
  }, container: {
    marginTop: 20,
    alignContent: 'center',
    alignItems: 'center',
    width: "70%",
  },
  apoyo: {
    borderWidth: 3,
    borderColor: "#840957",
    position: "absolute",
    marginTop: "15%",
    width: "85%",
    height: "85%",
    backgroundColor: "#FAFAFA",
  },
  scroll: {
    height: "100%"
    //   flex: 1,
    // alignContent: 'center',
    //marginHorizontal: 0,
    //   width: "100%",
    //    backgroundColor:"#4EFFF3",
  },

})

