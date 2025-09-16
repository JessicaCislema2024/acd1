import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import datos from '../assets/dataa/menu.json'

export default function Menu() {
    const menu = datos
    console.log(menu);

  return (
    <View>
      <Text
      style={styles.txt}>Menuu</Text>
    <FlatList 
    data= {menu}
    renderItem= { ( {item} ) => 
        <TouchableOpacity     style = {styles.container}>
            <Text> {item.strCategory} </Text>
            <Image 
            style = {styles.img}
            source = {{uri: item.strCategoryThumb}}
            />
        </TouchableOpacity>
    }
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "green",
        margin: 10,
        padding: 20,
        gap: 50
    },
    img:{
        width: 90,
        height: 90,
        alignSelf: 'center'
    },
    txt:{
        fontSize:50,
        alignItems: 'center'
    }
})