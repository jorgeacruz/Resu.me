import { Stack } from "expo-router"; 

export default function Layout() {
 return (
   <Stack screenOptions={{
    headerShown:false,
    headerBackTitle:'voltar',
    headerBackButtonDisplayMode:'minimal',
    headerStyle: {
      backgroundColor: '#252525',
    },
    headerTintColor:'#fff',
    
    }}>
      <Stack.Screen name="(stack)/index" 
        options={{ 
          headerShown:true, 
          title:'Crie sua conta',
           
        }}
      />
      <Stack.Screen name="(stack)/login" options={{ headerShown:false}}/>
      <Stack.Screen name="(stack)/lostPass" options={{ headerShown:false}}/>
   </Stack>
  );
}