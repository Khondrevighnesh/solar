import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
KeyboardAvoidingView,
ScrollView,
Platform
} from "react-native";

import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function PaidLogin(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [showPassword,setShowPassword] = useState(false);

const handleLogin = () => {

const demoEmail = "client@solar.com";
const demoPassword = "solar123";

if(email === demoEmail && password === demoPassword){
router.replace("/dashboard");
}else{
alert("Invalid email or password");
}

};

return(

<KeyboardAvoidingView
style={{flex:1}}
behavior={Platform.OS === "ios" ? "padding" : "height"}
>

<ScrollView
contentContainerStyle={{flexGrow:1, justifyContent:"center"}}
keyboardShouldPersistTaps="handled"
>

<View style={styles.container}>

<Text style={styles.logo}>☀ Solar Client</Text>

<View style={styles.card}>

<Text style={styles.title}>Client Login</Text>

<View style={styles.inputBox}>

<Ionicons name="mail-outline" size={20} color="#6b7280"/>

<TextInput
placeholder="Email"
style={styles.input}
value={email}
onChangeText={setEmail}
autoCapitalize="none"
/>

</View>

<View style={styles.inputBox}>

<Ionicons name="lock-closed-outline" size={20} color="#6b7280"/>

<TextInput
placeholder="Password"
secureTextEntry={!showPassword}
style={styles.input}
value={password}
onChangeText={setPassword}
/>

<TouchableOpacity
onPress={()=>setShowPassword(!showPassword)}
>

<Ionicons
name={showPassword ? "eye-off" : "eye"}
size={20}
color="#6b7280"
/>

</TouchableOpacity>

</View>

<TouchableOpacity
style={styles.button}
onPress={handleLogin}
>

<Ionicons name="log-in-outline" size={20} color="#fff"/>

<Text style={styles.buttonText}>Login</Text>

</TouchableOpacity>

<Text style={styles.demo}>
Demo: client@solar.com / solar123
</Text>

</View>

</View>

</ScrollView>

</KeyboardAvoidingView>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
backgroundColor:"#f6f7fb",
padding:20
},

logo:{
fontSize:28,
fontWeight:"bold",
textAlign:"center",
marginBottom:20,
color:"#16a34a"
},

card:{
backgroundColor:"#fff",
padding:25,
borderRadius:18,
elevation:4
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:20,
textAlign:"center"
},

inputBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#f3f4f6",
padding:12,
borderRadius:10,
marginBottom:15
},

input:{
flex:1,
marginLeft:10
},

button:{
flexDirection:"row",
backgroundColor:"#16a34a",
padding:14,
borderRadius:10,
justifyContent:"center",
alignItems:"center",
marginTop:10
},

buttonText:{
color:"#fff",
fontWeight:"bold",
marginLeft:8
},

demo:{
marginTop:15,
textAlign:"center",
color:"#6b7280"
}

});