import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

const CustomBtn = (props) =>{

  const Container = styled.View `
  height: 100px;
  width: 100px;
  font-size: 200px;
  border-color: #555;  
  align-items: center;
  justify-content: center; 
  border-radius: 3px;
  margin: 0.3px;
  margin-left: 0.3px;
  background-color: ${props.label? "#b4cded" : "#444" }; 


  `

  return (
    <TouchableOpacity onPress={props.myFun}>
    <Container>
      <Text style={{fontSize:20}}>

        {props.label}
      </Text>
    </Container>
    </TouchableOpacity>
  )
}

export default CustomBtn;