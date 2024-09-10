import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './BuyButtonStyles'

export default function BuyButton (){
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <AntDesign name="shoppingcart" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
    </View>
  )
}
