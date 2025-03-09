import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown:false, title:'Home'}} />
      <Tabs.Screen name="qrcode_page" options={{headerShown:false, title:'QR'}}  />
      <Tabs.Screen name="perfil" options={{headerShown:false, title:'Perfil'}}  />
    </Tabs>
  );
}