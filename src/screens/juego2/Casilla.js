import { Text, StyleSheet, View, SafeAreaView, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';

export default function Casilla(props) {
    const { valor, Casilla, ver, bloqueados, sudoku } = props;
    //console.log(sudoku);

    nuevo = undefined
    nuevo1 = undefined
    nuevo2 = undefined
    nuevo3 = undefined
    nuevo4 = undefined
    nuevo5 = undefined
    nuevo6 = undefined
    nuevo7 = undefined
    nuevo8 = undefined

    if (Casilla === 0) {
        nuevo = sudoku[0][0][0]
        nuevo1 = sudoku[0][0][1]
        nuevo2 = sudoku[0][0][2]
        nuevo3 = sudoku[0][1][0]
        nuevo4 = sudoku[0][1][1]
        nuevo5 = sudoku[0][1][2]
        nuevo6 = sudoku[0][2][0]
        nuevo7 = sudoku[0][2][1]
        nuevo8 = sudoku[0][2][2]
    }
    if (Casilla === 1) {
        nuevo = sudoku[1][0][0]
        nuevo1 = sudoku[1][0][1]
        nuevo2 = sudoku[1][0][2]
        nuevo3 = sudoku[1][1][0]
        nuevo4 = sudoku[1][1][1]
        nuevo5 = sudoku[1][1][2]
        nuevo6 = sudoku[1][2][0]
        nuevo7 = sudoku[1][2][1]
        nuevo8 = sudoku[1][2][2]
    }
    if (Casilla === 2) {
        nuevo = sudoku[2][0][0]
        nuevo1 = sudoku[2][0][1]
        nuevo2 = sudoku[2][0][2]
        nuevo3 = sudoku[2][1][0]
        nuevo4 = sudoku[2][1][1]
        nuevo5 = sudoku[2][1][2]
        nuevo6 = sudoku[2][2][0]
        nuevo7 = sudoku[2][2][1]
        nuevo8 = sudoku[2][2][2]
    }
    if (Casilla === 3) {
        nuevo = sudoku[3][0][0]
        nuevo1 = sudoku[3][0][1]
        nuevo2 = sudoku[3][0][2]
        nuevo3 = sudoku[3][1][0]
        nuevo4 = sudoku[3][1][1]
        nuevo5 = sudoku[3][1][2]
        nuevo6 = sudoku[3][2][0]
        nuevo7 = sudoku[3][2][1]
        nuevo8 = sudoku[3][2][2]
    }
    if (Casilla === 4) {
        nuevo = sudoku[4][0][0]
        nuevo1 = sudoku[4][0][1]
        nuevo2 = sudoku[4][0][2]
        nuevo3 = sudoku[4][1][0]
        nuevo4 = sudoku[4][1][1]
        nuevo5 = sudoku[4][1][2]
        nuevo6 = sudoku[4][2][0]
        nuevo7 = sudoku[4][2][1]
        nuevo8 = sudoku[4][2][2]
    }
    if (Casilla === 5) {
        nuevo = sudoku[5][0][0]
        nuevo1 = sudoku[5][0][1]
        nuevo2 = sudoku[5][0][2]
        nuevo3 = sudoku[5][1][0]
        nuevo4 = sudoku[5][1][1]
        nuevo5 = sudoku[5][1][2]
        nuevo6 = sudoku[5][2][0]
        nuevo7 = sudoku[5][2][1]
        nuevo8 = sudoku[5][2][2]
    }
    if (Casilla === 6) {
        nuevo = sudoku[6][0][0]
        nuevo1 = sudoku[6][0][1]
        nuevo2 = sudoku[6][0][2]
        nuevo3 = sudoku[6][1][0]
        nuevo4 = sudoku[6][1][1]
        nuevo5 = sudoku[6][1][2]
        nuevo6 = sudoku[6][2][0]
        nuevo7 = sudoku[6][2][1]
        nuevo8 = sudoku[6][2][2]
    }
    if (Casilla === 7) {
        nuevo = sudoku[7][0][0]
        nuevo1 = sudoku[7][0][1]
        nuevo2 = sudoku[7][0][2]
        nuevo3 = sudoku[7][1][0]
        nuevo4 = sudoku[7][1][1]
        nuevo5 = sudoku[7][1][2]
        nuevo6 = sudoku[7][2][0]
        nuevo7 = sudoku[7][2][1]
        nuevo8 = sudoku[7][2][2]
    }
    if (Casilla === 8) {
        nuevo = sudoku[8][0][0]
        nuevo1 = sudoku[8][0][1]
        nuevo2 = sudoku[8][0][2]
        nuevo3 = sudoku[8][1][0]
        nuevo4 = sudoku[8][1][1]
        nuevo5 = sudoku[8][1][2]
        nuevo6 = sudoku[8][2][0]
        nuevo7 = sudoku[8][2][1]
        nuevo8 = sudoku[8][2][2]
    }




    const [espacio00, Set00] = useState(nuevo)
    const [espacio01, Set01] = useState(nuevo1)
    const [espacio02, Set02] = useState(nuevo2)
    const [espacio10, Set10] = useState(nuevo3)
    const [espacio11, Set11] = useState(nuevo4)
    const [espacio12, Set12] = useState(nuevo5)
    const [espacio20, Set20] = useState(nuevo6)
    const [espacio21, Set21] = useState(nuevo7)
    const [espacio22, Set22] = useState(nuevo8)


    const poner = (lugar, fil, col) => {

        if (bloqueados[Casilla][fil][col] === false) {
            console.log("fila:" + fil + "col" + col);
            if (lugar === 1) {
                Set00(valor)
            }
            if (lugar == 2) {
                Set01(valor)
            }
            if (lugar === 3) {
                Set02(valor)
            }
            if (lugar == 4) {
                Set10(valor)
            }
            if (lugar === 5) {
                Set11(valor)
            }
            if (lugar == 6) {
                Set12(valor)
            }
            if (lugar == 7) {
                Set20(valor)
            }
            if (lugar === 8) {
                Set21(valor)
            }
            if (lugar == 9) {
                Set22(valor)
            }

            ver(Casilla, fil, col, valor)
        }

    }

    return (

        <View style={styles.espacios}>
            <View style={styles.fila}>
                <TouchableOpacity style={[styles.boton]} onPress={() => poner(1, 0, 0)}>
                    <Text style={styles.letraB}>{espacio00}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => poner(2, 0, 1)} style={[styles.boton]} >
                    <Text style={styles.letraB}>{espacio01}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => poner(3, 0, 2)} style={[styles.boton]}>
                    <Text style={styles.letraB}>{espacio02}</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.fila, { marginLeft: 0 }]}>
                <TouchableOpacity onPress={() => poner(4, 1, 0)} style={[styles.boton]}>
                    <Text style={styles.letraB}>{espacio10}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => poner(5, 1, 1)} style={[styles.boton]}>
                    <Text style={styles.letraB}>{espacio11}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => poner(6, 1, 2)} style={[styles.boton]}>
                    <Text style={styles.letraB}> {espacio12}</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.fila]}>
                <TouchableOpacity onPress={() => poner(7, 2, 0)} style={[styles.boton]}>
                    <Text style={styles.letraB}> {espacio20} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => poner(8, 2, 1)} style={[styles.boton]}>
                    <Text style={styles.letraB}> {espacio21}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => poner(9, 2, 2)} style={[styles.boton]}>
                    <Text style={styles.letraB}> {espacio22}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boton: {
        width: "33%",
        height: "100%",
        borderRadius: 100,
        //backgroundColor:"#665E5E",
        //opacity:0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letraB: {
        color: "#000000", fontSize: 14, bottom: 1
    },
    fila: {
        flexDirection: 'row',
        height: "19%"
    },
    columna: {

    },
    espacios: {
        marginHorizontal: 0,

        width: "32.5%",
    }
})