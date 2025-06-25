import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, TextInput, ImageBackground, Alert } from 'react-native';
import { styles } from '../styles'
import { router, Link} from 'expo-router';
import AppLoading from 'expo-app-loading';
import { supabase } from '@/libs/supabase';
// import fonts
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

export default function LostPassword() {


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
// load fonts
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

 
  return (
    <View style={{backgroundColor:'#0000'}}>
     <ImageBackground source={require('../images/Job2.png')} style={{width: '100%', height: '100%'}}>
     <View style={styles.ViewLogo}>
         <Image source={require('../images/logo.png')} style={styles.logo} />
     </View>
     <View style={styles.Slogan}>
         <Text style={styles.textBold}>O mercado de trabalho precisa te conhecer.</Text>
         <Text style={styles.textLight}>Divulgue seu trabalhos aos recrutadores.</Text>
     </View>
 
     <View style={styles.form}>
         
        <TextInput
          value={name} 
          style={styles.input} 
          placeholder="Digite seu nome" 
          placeholderTextColor={'#FFBB00'}
          onChangeText={setName} 
          secureTextEntry={true}
        />
         <TextInput 
           value={email}
           style={styles.input} 
           placeholder="Qual email cadastrado?" 
           placeholderTextColor={'#FFBB00'}
           onChangeText={setEmail} 
           autoCapitalize='none'
         />
         <TouchableOpacity style={styles.cta} onPress={() => alert('Clichou')} >
           <Text 
           style={styles.text}>Recuparar senha</Text>
         </TouchableOpacity>
       </View>
       <TouchableOpacity onPress={() => router.replace('/(stack)/login')} >
         <Text style={{color:'#fff', paddingTop:20, textAlign:'center'}}>Voltar para Login</Text>
       </TouchableOpacity>
       
     </ImageBackground>
 
     <StatusBar barStyle="light-content" hidden={true} />
    </View>
   );
}

