import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Register(){

const router = useRouter();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleRegister = () => {

if(!name || !email || !password){
alert("Fill all fields");
return;
}

router.replace("/(tabs)");
};

return(

<View style={styles.container}>

<Text style={styles.title}>Create Account</Text>

<TextInput
placeholder="Full Name"
style={styles.input}
value={name}
onChangeText={setName}
/>

<TextInput
placeholder="Email"
style={styles.input}
value={email}
onChangeText={setEmail}
/>

<TextInput
placeholder="Password"
secureTextEntry
style={styles.input}
value={password}
onChangeText={setPassword}
/>

<TouchableOpacity style={styles.button} onPress={handleRegister}>
<Text style={styles.buttonText}>Register</Text>
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
fontWeight:"bold",
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
}

});