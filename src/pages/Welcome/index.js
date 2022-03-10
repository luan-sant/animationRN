import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image
          source={require('../../img/logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Monitore e organize seus gastos de qualquer lugar.</Text>
        <Text style={styles.text}>Faça o login para começar.</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Acessar</Text>
        </TouchableOpacity>

      </View>



    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b5de5'
  },

  logo: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    flex: 2,

  }
})