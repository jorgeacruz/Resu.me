import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs 
      screenOptions={{ 
      headerShown: false,    
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#fb0',
        borderTopColor: '#ccc',
        borderTopWidth: 1,
      },
      
     }}>
      <Tabs.Screen name="HomeApp"  />
      <Tabs.Screen 
      name="QrCode" 
      options={{ tabBarLabel: 'QR Code', title: 'QR Code' }}
      
      />
    </Tabs>
  );
}