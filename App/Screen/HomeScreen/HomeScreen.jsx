import React from 'react'
import { View, Text } from 'react-native'
import AppMapView from './AppMapView'

const HomeScreen = () => {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AppMapView />
    </View>
  )
}

export default HomeScreen
