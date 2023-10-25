import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import React, { Component, useState } from 'react'
import CustomBtn from './CustomBtn'

const CustomBtnScreen = () => {

    const [initPositions, SetInitPositions] = useState ([8,2,3,7,5,null,4,1,6]);
    const [positions, SetPositions] = useState ([8,2,3,7,5,null,4,1,6]);
    const [toggle, setToggle] = useState(false);


    const switchPosition = (position, index) => {

        if(index===0){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===1 || index2===3)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===1){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===0 || index2===2 || index2===4)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===2){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===1 || index2===5)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===3){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===0 || index2===4 || index2===6)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===4){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===1 || index2===3 || index2===5 || index2===7)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===5){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===2 || index2===4 || index2===8)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===6){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===3 || index2===7)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===7){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===4 || index2===6 || index2===8)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    if(index===8){

        positions.map((position2, index2) => {

            if((position2===null) && (index2===5 || index2===7)){
                
                let auxPositions = positions;
                auxPositions[index] = position2;
                auxPositions[index2] = position;
                SetPositions(auxPositions);
                setToggle(!toggle);
            } 
          

        })
    }

    console.log(position)
    console.log(index)
    console.log('///////')

    }
 

      return (

        <ImageBackground style={styles.puzzleContainer}>
            {positions.map((position, index) => (
                <CustomBtn key = {index} label = {position} myFun = {() => switchPosition(position,index)} />
            )
            )}

        </ImageBackground>
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