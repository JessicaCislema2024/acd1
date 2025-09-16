import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Masa() {

const [altura, setaltura] = useState(0)
const [peso, setpeso] = useState(0)

function imc(){
  let imc = (peso/(altura*altura))
  Alert.alert ("Mensaje!!","Su masa muscular es de: "+ imc)
}

  return (
    <ImageBackground
    style = {styles.container}
    source={{uri:"https://4kwallpapers.com/images/walls/thumbs_3t/4921.jpg"}}>
      <Text
      style = {styles.txt}> CALCULADORA DE MASA MUSCULAR </Text>
      
      <TextInput
      style = {styles.txtinput}
      placeholder = "Ingrese su altura"
      onChangeText={setaltura}/>

      <TextInput
      style= {styles.txtinput}
      placeholder = "Ingrese su peso"
      onChangeText= {setpeso}/>

      <Button title='CALCULAR' onPress={imc}></Button>
    </ImageBackground>

  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    gap: 50
  },
  txt:{
    fontSize: 40,
    fontFamily: 'monospace',
    color: 'white',
    alignSelf: 'center'
    },
  txtinput:{
    fontSize: 30,
    padding: 20,
    borderRadius: 40,
    color: 'white',
    alignSelf: 'center'
    },
  txt2:{
    fontSize: 50,
    color: 'white',
    alignSelf: 'center',
    fontStyle: 'italic',
    fontFamily: 'string',
  }
})
