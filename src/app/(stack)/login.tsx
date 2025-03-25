import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, TextInput, ImageBackground, Alert } from 'react-native';
import { styles } from '../styles'
import { router, Link} from 'expo-router';
import AppLoading from 'expo-app-loading';
import { supabase } from '@/libs/supabase';

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

export default function  Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  async function handleSignin() {
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email:email,
      password:password
    })

    if(error) {
      Alert.alert('Erro ao logar');
      return;
    }
    router.replace('/(tabs)/home')
  }
 

 return (
   <View style={{backgroundColor:'#0000'}}>
    <ImageBackground source={require('../images/Job2.png')} style={{width: '100%', height: '100%'}}>
    <View style={styles.logo}>
        <Image source={require('../images/logo.png')} style={{width:300, height:60 }} />
    </View>
    <View style={styles.Slogan}>
        <Text style={styles.textBold}>O mercado de trabalho precisa te conhecer</Text>
        <Text style={styles.textLight}>Divulgue seu CV aos recrutadores</Text>
    </View>

    <View style={styles.form}>
        
        <TextInput 
          value={email}
          style={styles.input} 
          placeholder="Digite seu email" 
          placeholderTextColor={'#FFBB00'}
          onChangeText={setEmail} 
          autoCapitalize='none'
        />
        <TextInput
          value={password} 
          style={styles.input} 
          placeholder="Digite sua senha" 
          placeholderTextColor={'#FFBB00'}
          onChangeText={setPassword} 
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.cta} onPress={handleSignin} >
          <Text 
          style={styles.text}>Logar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.replace('/')} >
        <Text style={{color:'#fff', paddingTop:20, textAlign:'center'}}>Esqueci minha senha</Text>
      </TouchableOpacity>
      
    </ImageBackground>

    <StatusBar barStyle="light-content" hidden={true} />
   </View>
  );
}  