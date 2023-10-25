import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useState } from 'react'
import CustomBtn from './CustomBtn'

const CustomBtnScreen = () => {

    const [positions, SetPositions] = useState ([1,2,3,4,5,6,7,8,null]);
      return (

        <View style={styles.puzzleContainer}>
            <CustomBtn label="1" myFun =""/>
            <CustomBtn label="2"/>
            <CustomBtn label="3"/>
            <CustomBtn label="4"/>
            <CustomBtn label="5"/>
            <CustomBtn label="6"/>
            <CustomBtn label="7"/>
            <CustomBtn label="8"/>
            <CustomBtn label=""/>

        </View>
      ) 
}

const styles = StyleSheet.create(
{
    puzzleContainer:{
        marginTop: 100,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        height: 380,
        width: 380




    }
}
);

export default CustomBtnScreen;