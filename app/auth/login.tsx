import { View, TextInput, Button } from "react-native"
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { router } from "expo-router"

export default function Login(){

const { login } = useAuth()

const [email,setEmail] = useState("")

const handleLogin = () => {

login(email,"password")

router.replace("/(tabs)")

}

return(

<View className="flex-1 justify-center p-6">

<TextInput
placeholder="Email"
className="border p-3 mb-4"
onChangeText={setEmail}
/>

<Button
title="Login"
onPress={handleLogin}
/>

</View>

)

}