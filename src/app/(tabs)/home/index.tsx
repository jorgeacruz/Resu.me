import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from './styles'
import { router } from "expo-router";

import HeaderHome from '@/app/components/headerHome'

export default function HomeApp() {
  return(
    <View style={styles.container}>
      <HeaderHome/>
      <Text>Home do App</Text>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}
