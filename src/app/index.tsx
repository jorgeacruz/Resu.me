import { View, Text, TouchableOpacity, Image, StatusBar, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';
import { router } from 'expo-router';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

export default function  Index() {

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function handleLogin() {
    alert('Cadastrado com sucesso');
    router.replace('/login');
  }

 return (
   <View >
    <ImageBackground source={require('../../assets/images/Job1.png')} style={{width: '100%', height: '100%'}}>
    <View style={styles.logo}>
        <Image source={require('../../assets/images/logo.png')} style={{width:300, height:60 }} />
    </View>
    <View style={styles.Slogan}>
        <Text style={styles.textBold}>O mercado de trabalho te espera</Text>
        <Text style={styles.textLight}>Cadastre suas habilidades proficionais</Text>
    </View>

    <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor={'#FFBB00'} />
        <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor={'#FFBB00'} autoCapitalize='none'/>
        <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor={'#FFBB00'} secureTextEntry={true}/>
        <TouchableOpacity style={styles.cta} onPress={handleLogin}>
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