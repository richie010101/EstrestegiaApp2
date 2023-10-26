import { Text, StyleSheet, View, ImageBackground, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { Component, useState } from 'react'
import CustomBtn from './CustomBtn'
import GlobalStyles from '../../styles/GlobalStyles'
import gameBg from '../../images/juego3/puzzeback.jpeg'
import startbtn from '../../images/juego3/margen.png'



const CustomBtnScreen = () => {

    const [positions, SetPositions] = useState ([1,2,3,4,5,6,7,8,null]);
    const [intPositions, setInitPositions] = useState ([1,2,3,4,5,6,7,8,null]);
    const [toggle, setToggle] = useState(false);
    const [start, setStart] = useState(false);

    const msg = () => {

        if(start){
            var counter = 0;

            for(let i=0; i<positions.length; i++){
                if(positions[i] !== intPositions[i]){
                    counter++;
                }
            }

            if(counter === 0){
                Alert.alert("Felicidades, completaste el puzzle");
            }
        }
    }


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

        if(position === 6 || position === 8){
            msg();
        }
    }

    console.log(position)
    console.log(index)
    console.log('///////')

    }
 

      return (

        <SafeAreaView style={[GlobalStyles.androidSafeArea,{alignItems:'center',alignContent:'center'}]}>
             
        <View>

        <ImageBackground 
        style={styles.puzzleContainer}
        source={gameBg}
        resizeMode='stretch'>
            <View style={styles.puzzleSeeds}>
            {positions.map((position, index) => (
                <CustomBtn key = {index} label = {position} myFun = {() => switchPosition(position,index)} />
            )
            )}
        </View>
        </ImageBackground>

       <TouchableOpacity style={styles.start}
       
       onPress={()=>{
        SetPositions(() => [8,2,3,7,5,null,4,1,6]);
        setToggle(!toggle);
        setStart(true);
    
    }}
        >
            <ImageBackground 
           
            style={styles.start}
            source={startbtn}>
              
            </ImageBackground>

       </TouchableOpacity>


        </View>
        
        </SafeAreaView>
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
        width: 380,
        alignItems: "center",
        paddingLeft: 33
    },
    puzzleSeeds:{
        marginTop: 60,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        height: 380,
        width: 380,
        alignItems: "center"
    },
    start:{
        height: 80,
        width: 100,
        backgroundColor: "#8e2525",
        marginTop: 600
        
    }
}
);

export default CustomBtnScreen;