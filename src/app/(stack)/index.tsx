import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, TextInput, ImageBackground, Alert } from 'react-native';
import { styles } from '../styles';
import { router } from 'expo-router';
import AppLoading from 'expo-app-loading';
import { supabase } from '@/libs/supabase';

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

  async function handleSignup() {

    //record email / password
    const { data, error} = await supabase.auth.signUp({
      email:email,
      password:password,
        options:{
          data:{
            name:name
          }
        }
    })

    if(error) {
      Alert.alert(error.message);
      return;
    }
    
    // replace to home
    router.push('/(stack)/login');
  }

 return (
   <View style={{flex:1}}>
    <ImageBackground source={require('@/app/images/Job1.png')} style={{width: '100%', height: '100%'}} resizeMode='cover'>
    <View style={styles.ViewLogo}>
        <Image source={require('@/app/images/logo.png')} style={styles.logo} />
    </View>
    <View style={styles.Slogan}>
        <Text style={styles.textBold}>O mercado de trabalho te espera.</Text>
        <Text style={styles.textLight}>Cadastre suas habilidades profissionais.</Text>
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