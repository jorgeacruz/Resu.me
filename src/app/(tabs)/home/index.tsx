import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from './styles'
import { router } from "expo-router";
import { supabase } from "@/libs/supabase";

import HeaderHome from '@/app/components/headerHome'

export default function HomeApp() {

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    router.replace('/(stack)/login')
  }

  return(
    <View style={styles.container}>
      <HeaderHome/>
      <Text>Home do App</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}
