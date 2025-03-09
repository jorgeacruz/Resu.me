import React from "react";
import { View, Text } from "react-native"
import { styles } from './styles'
import HeaderHome from '@/app/components/headerHome'

export default function HomeApp() {
  return(
    <View style={styles.container}>
      <HeaderHome/>
      <Text>Home do App</Text>
    </View>
  )
}
