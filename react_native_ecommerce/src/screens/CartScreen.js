import { View, Text } from 'react-native'
import React from 'react'

export default function CartScreen() {
  return (
    <View style = { { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center" 
    } }>
      <Text style = { { fontSize : 30} }>Cart Screen</Text>
    </View>
  )
}