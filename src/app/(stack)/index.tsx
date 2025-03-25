import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, TextInput, ImageBackground, ScrollView } from 'react-native';
import { styles } from '../styles';
import { router } from 'expo-router';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

export default function  Index() {

  const [name, setName] = useState('')
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

  function handleSignup() {
    alert('Cadastrado com sucesso');
    console.log(
      name,
      email,
      password
    )
   // router.push('/(tabs)/home');
  }

 return (
   <View style={{flex:1}}>
    <ImageBackground source={require('@/app/images/Job1.png')} style={{width: '100%', height: '100%'}} resizeMode='cover'>
    <View style={styles.logo}>
        <Image source={require('@/app/images/logo.png')} style={{width:300, height:60 }} />
    </View>
    <View style={styles.Slogan}>
        <Text style={styles.textBold}>O mercado de trabalho te espera</Text>
        <Text style={styles.textLight}>Cadastre suas habilidades proficionais</Text>
    </View>

    <View style={styles.form}>
        <TextInput 
          value={name}
          style={styles.input} 
          placeholder="Digite seu nome" 
          placeholderTextColor={'#FFBB00'}
          onChangeText={setName}
        />
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
        <TouchableOpacity style={styles.cta} onPress={handleSignup}>
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push('/login')} >
        <Text style={{color:'#fff', paddingTop:20, textAlign:'center'}}>Já tenho cadastro</Text>
      </TouchableOpacity>
    </ImageBackground>

    <StatusBar barStyle="light-content" hidden={true} />
   </View>
  
  );
}  