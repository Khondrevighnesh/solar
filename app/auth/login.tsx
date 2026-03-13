import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    if(!email || !password){
      alert("Enter email and password");
      return;
    }

    // later connect backend
   router.replace("/(tabs)");
  };

  return(

    <View style={styles.container}>

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>router.push("/(auth)/register")}>
        <Text style={styles.register}>Create Account</Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:25
},

title:{
fontSize:28,
fontWeight:"bold"
},

subtitle:{
color:"#666",
marginBottom:30
},

input:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:10,
marginBottom:15
},

button:{
backgroundColor:"#16a34a",
padding:15,
borderRadius:10,
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold"
},

register:{
marginTop:20,
textAlign:"center",
color:"#16a34a"
}

});