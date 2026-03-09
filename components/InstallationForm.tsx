import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";

export default function InstallationForm(){

const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [city,setCity] = useState("");
const [bill,setBill] = useState("");

const submit = () => {
Alert.alert("Request Sent","Our solar team will contact you soon.");
};

return(

<View style={styles.form}>

<TextInput
style={styles.input}
placeholder="Full Name"
value={name}
onChangeText={setName}
/>

<TextInput
style={styles.input}
placeholder="Phone Number"
keyboardType="numeric"
value={phone}
onChangeText={setPhone}
/>

<TextInput
style={styles.input}
placeholder="City"
value={city}
onChangeText={setCity}
/>

<TextInput
style={styles.input}
placeholder="Monthly Electricity Bill"
keyboardType="numeric"
value={bill}
onChangeText={setBill}
/>

<TouchableOpacity style={styles.button} onPress={submit}>
<Text style={styles.buttonText}>Request Solar Installation</Text>
</TouchableOpacity>

</View>

);
}

const styles = StyleSheet.create({

form:{
backgroundColor:"#f9fafb",
padding:20,
borderRadius:14,
marginBottom:25
},

input:{
borderWidth:1,
borderColor:"#ddd",
padding:10,
borderRadius:10,
marginBottom:10
},

button:{
backgroundColor:"#16a34a",
padding:12,
borderRadius:10,
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold"
}

});