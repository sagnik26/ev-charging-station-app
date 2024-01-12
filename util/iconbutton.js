import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Iconbutton = ({ name, size = 24, color = "white", action }) => {
  return (
    <View style={styles.container}>
      <AntDesign name={name} size={size} color={color} onPress={action} />
    </View>
  )
}

export default Iconbutton

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 14
    }
});

