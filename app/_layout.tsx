import { Stack } from "expo-router";
import { AuthProvider, AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function Navigation(){

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Stack screenOptions={{ headerShown:false }}>

      {isLoggedIn ? (
        <Stack.Screen name="dashboard" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}

      <Stack.Screen name="paid-login" />

    </Stack>
  );
}

export default function RootLayout(){
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}