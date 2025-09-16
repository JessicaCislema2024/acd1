import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import fiebre from '../assets/image/fiebre.png'

export default function Calculadora() {
  const [celcius, setcelcius] = useState(0)

  function celafarenheti() {
    let decaf = ((celcius)*(9/5)+32)
    Alert.alert("Mensaje!","Los ° " +celcius +" Celcius\nEquivalen \n a ° " + decaf + " Farenheit")
  }
  return (
    <View>
      <Text style={{fontSize:40, color:'red'}}>Calculadora!!!!!!</Text>
    <Image 
    style = {styles.img}
    source={{uri:"https://cdn-icons-png.flaticon.com/512/2100/2100100.png"}}/>
    <TextInput
    style ={styles.input}
    placeholder='Ingresar temperatura'
    onChangeText={setcelcius}></TextInput>
    <TouchableOpacity
      style = {styles.btn}
      onPress={celafarenheti}>
        <Text>CALCULAR</Text>
        <Image 
        style={styles.img2}
        source={fiebre}/>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{ 
    backgroundColor: '#27bdeeff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width:300,
  },
  img2:{
    width:100,
    height:100
  },
  input:{
    fontSize:20,
  },
    img:{
    width:70,
    height:70,
    alignSelf:'center'
    }
})