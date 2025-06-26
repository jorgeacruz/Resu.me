import { Tabs } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'#fb0',
        tabBarInactiveTintColor:'#fff',
        tabBarStyle:{
          backgroundColor:'#252525'
        }
      }}
    >
      <Tabs.Screen name="index" 
        options={{
          headerStyle:{
            backgroundColor:'#252525',
          },
          headerTintColor:'#fff',
          headerShown:true, 
          title:'Home',
          tabBarIcon:({color, size}) => (<Icon name='home' size={size} color={color}/>),
        }}
      />
      <Tabs.Screen name="perfil" 
      options={{
        headerStyle:{
          backgroundColor:'#252525',
        },
        headerShown:true,
        headerTintColor:'#fff', 
        title:'Seu perfil',
        tabBarIcon:({color, size}) => (<Icon name='user' size={size} color={color}/>),
      }} 
      />
      <Tabs.Screen name="qrcode_page" 
        options={{
          headerShown:true, 
          title:'QR',
          tabBarIcon:({color, size}) => (<Icon name='qrcode' size={size} color={color}/>),
        }} 
      />
    </Tabs>
  );
}