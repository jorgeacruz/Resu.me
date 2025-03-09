import { Stack } from "expo-router"; 

export default function Layout() {
 return (
   <Stack screenOptions={{
    headerShown:false
   }}>
      <Stack.Screen name="(stack)/index" options={{ headerShown:true, title:'Create Account'}}/>
      <Stack.Screen name="(stack)/login" options={{ headerShown:false}}/>
      <Stack.Screen name="(stack)/lostPass" options={{ headerShown:false}}/>
   </Stack>
  );
}