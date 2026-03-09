import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function FAQItem({question,answer}:any){

const [open,setOpen] = useState(false);

return(

<View style={styles.box}>

<TouchableOpacity onPress={()=>setOpen(!open)}>
<Text style={styles.question}>{question}</Text>
</TouchableOpacity>

{open && (
<Text style={styles.answer}>{answer}</Text>
)}

</View>

);
}

const styles = StyleSheet.create({

box:{
backgroundColor:"#f9fafb",
padding:15,
borderRadius:12,
marginBottom:10
},

question:{
fontWeight:"bold",
fontSize:16
},

answer:{
marginTop:8,
color:"#555"
}

});