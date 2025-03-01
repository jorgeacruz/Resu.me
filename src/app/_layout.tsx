import { Stack } from "expo-router";

export default function Layout() {
 return (
   <Stack screenOptions={
    {
      headerShown: false,
    }
   }>
        <Stack.Screen 
            name="Home"
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Login"
                options={{
                    headerShown: true,
                    title: 'Faça seu login',
                }}
        />
   </Stack>
  );
}