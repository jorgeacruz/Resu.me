import { Tabs } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'#fb0',
        tabBarInactiveTintColor:'#fff',
        tabBarStyle:{
          backgroundColor:'#000'
        }
      }}
    >
      <Tabs.Screen name="index" 
        options={{
          headerShown:false, 
          title:'Home',
          tabBarIcon:({color, size}) => (<Icon name='home' size={size} color={color}/>),
        }}
      />
      <Tabs.Screen name="qrcode_page" 
        options={{
          headerShown:false, 
          title:'QR',
          tabBarIcon:({color, size}) => (<Icon name='qrcode' size={size} color={color}/>),
        }} 
      />
      <Tabs.Screen name="perfil" 
      options={{
        headerShown:false, 
        title:'Perfil',
        tabBarIcon:({color, size}) => (<Icon name='user' size={size} color={color}/>),
        }} 
      />
    </Tabs>
  );
}