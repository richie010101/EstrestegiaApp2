import { Text, StyleSheet, View, SafeAreaView, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import EspacioJ from './EspacioJ';
import { firebaseConfig } from '../../components/firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { crear } from './tableros';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, doc, onSnapshot, orderBy, query, QuerySnapshot, limit, OrderByDirection } from "firebase/firestore";

export function Puntuacion({
  id,
  cadena,
  min,
  sec,
  user,
  cadena2
}) {
  if (cadena === cadena2) {
    return <Text style={{ alignContent: 'center', margin: 15, fontFamily: "prueba2", fontSize: 18, backgroundColor: "#FAFAFA", textAlign: 'center', textAlignVertical: 'center', paddingTop: "1%", borderRadius: 3 }}>Puntaje.....................................{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</Text>
  }
  return <Text style={{ margin: 15, fontFamily: "prueba2", fontSize: 18, textAlign: 'center' }}>Puntaje.....................................{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</Text>
}

var tableros
tableros = crear()
var sudoku = new Array(9);
var bloqueados = new Array(9);
var sudokuF = new Array(9);
for (var i = 0; i < sudoku.length; i++) {
  sudoku[i] = new Array(3);
  sudokuF[i] = new Array(3);

  bloqueados[i] = new Array(3);
}

for (var i = 0; i < sudoku.length; i++) {
  for (var j = 0; j < 3; j++) {
    sudoku[i][j] = new Array(3);
    sudokuF[i][j] = new Array(3);
    bloqueados[i][j] = new Array(3);
  }
}

var x = Math.floor(Math.random() * 15);

for (var i = 0; i < sudoku.length; i++) {
  for (var j = 0; j < 3; j++) {
    for (var k = 0; k < 3; k++) {


      sudokuF[i][j][k] = tableros[x][i][j][k]
      bloqueados[i][j][k] = false;
    }
  }
}


for (var i = 0; i < 50; i++) {
  var uno = Math.floor(Math.random() * 9);
  var dos = Math.floor(Math.random() * 3);
  var tres = Math.floor(Math.random() * 3);
  console.log(uno + "," + dos + "," + tres);
  if (bloqueados[uno][dos][tres] === false) {
    bloqueados[uno][dos][tres] = true;
    sudoku[uno][dos][tres] = sudokuF[uno][dos][tres]
  }
  else {
    i--;
  }
}




export default function Juego1(props) {

  const firebase = initializeApp(firebaseConfig);
  database = getFirestore();

  const { route } = props;
  const { usuario } = route.params;
  const [termino3, setTermino3] = useState(-1);
  // console.log(usuario);
  const [resultado, setBuenas] = useState({
    min: 0,
    sec: 0,
    user: usuario,
    cadena: ''
  });
  const [valor, SetValor] = useState();
  const [ayuda, setAyuda] = useState(1);
  const [zindex1, setZindex] = useState(1);
  const [terminar, setTerminar] = useState("Jugando..");
  const [acabar, setAcabar] = useState(false);

  //console.log(resultado);

  const [termino2, setTermino2] = useState(0);
  const [index, setIndex] = useState(-1);


  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);

  const [minsF, setMinutesF] = useState(0);
  const [secsF, setSecondsF] = useState(0);

  const [puntajes, setPuntajes] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, usuario + '-Juego2');
    const q = query(collectionRef, orderBy("min"))

    const unsuscribe = onSnapshot(q, querySnapshot => {
      setPuntajes(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          cadena: doc.data().cadena,
          min: doc.data().min,
          sec: doc.data().sec,
          user: doc.data().user

        })
        )
      )
    })
    return unsuscribe;
  }, [])
  //  console.log(acabar);

  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs < 59) {
        setSeconds(secs + 1);
      }
      if (secs === 59) {
        setMinutes(mins + 1);
        setSeconds(0);
      }
      if (acabar) {
        clearInterval(sampleInterval);
        // console.log("acabando");

      }
    }, 900);
    return () => {
      clearInterval(sampleInterval);
    };
  });

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
      console.log(result1);

      return result1;
    }
  // console.log(acabar);


  LogBox.ignoreLogs(["expo-app-loading is deprecated"]);

  let [fontsLoaded] = useFonts({
    "prueba2": require("../../fonts/NextBro.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const cambiar = (nuevo) => {
    SetValor(nuevo)
  }

  //console.log(resultado);
  const cerrar = () => {
    setAyuda(0);
    setZindex(-1);
  }

  const navigation = useNavigation();
  const salir = () => {
    navigation.navigate("Menu", { usuario: usuario });
  }



  const ver = (posicion, posicionX, posicionY, valor) => {
    console.log("( Casilla: " + posicion + ", X: " + posicionX + ", Y:" + posicionY + ")");
    sudoku[posicion][posicionX][posicionY] = valor


    console.log("---------------------");
    console.log(sudoku)
    console.log(sudokuF)

    var iguales = true;
    for (var i = 0; i < sudoku.length; i++) {
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
          if (sudokuF[i][j][k] !== sudoku[i][j][k]) {
            iguales = false;
          }
        }
      }
    }


    if (iguales && !acabar) {
      setMinutesF(mins);
      setSecondsF(secs);
      setTermino2(1);
      setIndex(2);
      setAcabar(true);
      subir();

    }
  }
  const mPuntaje = () => {
    setTermino3(3);
  }

  const estadisticasCerrar = () => {
    setTermino3(0);
  }

  const subir = async () => {
    resultado.min = mins;
    resultado.sec = secs;
    cadenaB = generateRandomString();
    resultado.cadena = cadenaB;
    console.log(resultado);
    await addDoc(collection(database, usuario + '-Juego2',), resultado);
  }





  return (
    <SafeAreaView style={[GlobalStyles.androidSafeArea, { alignItems: 'center', alignContent: 'center' }]}>




      <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>
        <View style={[styles.final, { opacity: termino2, zIndex: index }]}>
          <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>
            <Text style={{ fontFamily: "prueba2", marginTop: "20%", fontSize: 25 }}> ¡Felicidades! terminaste en  </Text>
            <Text style={{ fontFamily: "prueba2", marginTop: "20%", fontSize: 50 }}>{minsF < 10 ? `0${minsF}` : minsF}:{secsF < 10 ? `0${secsF}` : secsF}</Text>
            <Text style={{ fontFamily: "prueba2", marginTop: "20%", fontSize: 30 }}>  </Text>
            <TouchableOpacity onPress={() => mPuntaje()} s style={{ width: "75%" }} >
              <Text style={{ paddingTop: 10, marginTop: "80%", fontFamily: "prueba2", marginTop: "15%", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Ver mis estadisticas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => salir()} style={{ width: "75%" }} >
              <Text style={{ paddingTop: 10, marginTop: "80%", fontFamily: "prueba2", marginTop: "15%", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Ver mas juegos</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={GlobalStyles.logo}>
          <Image style={GlobalStyles.logo2}
            source={require("../../images/logo2.png")} />
        </View>
        <Text style={{ marginTop: 30, fontSize: 40, fontFamily: "prueba2" }}> Sudoku </Text>

        <Text> {" "}
          {mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}</Text>
        <EspacioJ styles={styles.juego} valor={valor} ver={ver} bloqueados={bloqueados} sudoku={sudoku}></EspacioJ>

        <View style={[styles.apoyo, { opacity: ayuda, zIndex: zindex1 }]}>
          <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>
            <Text style={{ fontFamily: "prueba2", marginTop: "3%" }}> ¿Como se juega?</Text>
            <Text style={{ fontFamily: "prueba2", width: "75%", marginTop: "15%", textAlign: 'justify' }}>Sudoku es un juego de lógica donde tienes una cuadrícula de 9x9 celdas dividida en bloques de 3x3. Debes rellenar la cuadrícula con los números del 1 al 9, asegurándote de que no se repitan los números en ninguna fila, columna o bloque de 3x3. Comienzas con algunas celdas ya completadas y debes llenar el resto aplicando la lógica para evitar repeticiones.</Text>
            <TouchableOpacity onPress={() => cerrar()} style={{ width: "75%" }}>
              <Text style={{ paddingTop: 10, marginTop: "80%", fontFamily: "prueba2", marginTop: "3%", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Cerrar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>


        <View style={styles.botones}>
          <TouchableOpacity style={styles.boton} onPress={() => cambiar(1)}>
            <Text style={styles.letraB}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={() => cambiar(2)}>
            <Text style={styles.letraB}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={() => cambiar(3)}>
            <Text style={styles.letraB}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={() => cambiar(4)}>
            <Text style={styles.letraB}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => cambiar(5)}>
            <Text style={styles.letraB}>5</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.botones}>
          <TouchableOpacity style={styles.boton} onPress={() => cambiar(6)}>
            <Text style={styles.letraB}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={() => cambiar(7)}>
            <Text style={styles.letraB}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={() => cambiar(8)}>
            <Text style={styles.letraB}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={() => cambiar(9)}>
            <Text style={styles.letraB}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => cambiar()}>
            <Text style={styles.letraB}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.final, { opacity: termino3, zIndex: termino3, height: "80%" }]}>
          <LinearGradient colors={['#00FFEB', '#285EE8']} style={GlobalStyles.screen}>
            <Text style={{ marginTop: "5%", marginBottom: "6%", fontSize: 30, fontFamily: "prueba2" }} > Mejores Puntuaciones</Text>
            <View style={{ height:"60%", width: "100%" }}>
              <ScrollView style={{ marginLeft: "5.5%", width: "90%" }}>
                {puntajes.map(puntaje => <Puntuacion key={puntaje.id} {...puntaje} cadena2={resultado.cadena} />)}
              </ScrollView>
            </View>
            <TouchableOpacity onPress={() => estadisticasCerrar()} style={{ width: "75%", marginTop: "5%" }}>
              <Text style={{ paddingTop: "3%", fontFamily: "prueba2", borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Cerrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => salir()} style={{ marginTop: "7%", width: "75%" }}>
              <Text style={{ paddingTop: "3%", marginTop: 0, fontFamily: "prueba2", marginTop: 0, borderWidth: 2, fontSize: 20, textAlign: 'center' }}> Ver mas juegos</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>


      </LinearGradient>


    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  juego: {
    width: "95%",
    height: "60%",
    backgroundColor: "#80D6E4",
    marginTop: 0,
    alignContent: 'center',
  },
  final: {
    position: 'absolute',
    width: "85%",
    height: "80%",
    textAlign: 'center',
    backgroundColor: "#FAFAFA",
    marginTop: "25%",
    borderWidth: 2,
  },
  apoyo: {
    borderWidth: 3,
    borderColor: "#840957",
    position: "absolute",
    marginTop: "25%",
    width: "85%",
    height: "75%",
  },
  botones: {
    marginLeft: "2%",
    marginTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  boton: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#665E5E",
  },
  letraB: {
    color: "#FAFAFA", fontSize: 20, bottom: 1
  },
})