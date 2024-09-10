import { View, TouchableOpacity, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './BuyButtonStyles'

export default function BuyButton (){
  const handleBuy = () => {
    console.log(`Compra realizada com sucesso\n Parabens!`)
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleBuy}>
            <AntDesign name="shoppingcart" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
    </View>
  )
}
