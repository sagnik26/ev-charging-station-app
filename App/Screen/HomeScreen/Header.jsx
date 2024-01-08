import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

const Header = () => {
  const {user} = useUser()
  return (
    <View style={styles.container}>  
      <Image 
        source={{ uri: user?.imageUrl }} 
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>EV Station</Text>
      <FontAwesome name="filter" size={30} color="black" style={{ marginTop: 10, marginRight: 5 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE_TRANSP,
    borderRadius: 20
  },
  textStyle: {
    marginVertical: 'auto', 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: 'green'
  },
  imageStyle: {
    width: 45, 
    height: 45, 
    borderRadius: 99
  }
})

export default Header
