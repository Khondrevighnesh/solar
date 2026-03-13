import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../../components/Screen";

export default function Support(){

return(

<Screen>

<Text style={styles.title}>Help & Support</Text>

<View style={styles.card}>

<TouchableOpacity
style={styles.row}
onPress={()=>Linking.openURL("tel:+919999999999")}
>
<Ionicons name="call-outline" size={22} color="#16a34a"/>
<Text style={styles.text}>Call Support</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.row}
onPress={()=>Linking.openURL("mailto:support@solar.com")}
>
<Ionicons name="mail-outline" size={22} color="#16a34a"/>
<Text style={styles.text}>Email Support</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.row}
onPress={()=>Linking.openURL("https://wa.me/918010633866")}
>
<Ionicons name="logo-whatsapp" size={22} color="#16a34a"/>
<Text style={styles.text}>WhatsApp Chat</Text>
</TouchableOpacity>

</View>

<View style={styles.infoCard}>
<Text style={styles.infoTitle}>Service Hours</Text>
<Text style={styles.infoText}>Mon - Sat : 9 AM to 6 PM</Text>
<Text style={styles.infoText}>Emergency Support 24x7</Text>
</View>

</Screen>

);
}

const styles = StyleSheet.create({

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:15
},

card:{
backgroundColor:"#fff",
borderRadius:16,
padding:5,
elevation:3
},

row:{
flexDirection:"row",
alignItems:"center",
gap:10,
padding:16,
borderBottomWidth:1,
borderBottomColor:"#eee"
},

text:{
fontSize:16,
fontWeight:"500"
},

infoCard:{
backgroundColor:"#f3f4f6",
padding:18,
borderRadius:16,
marginTop:20,
alignItems:"center"
},

infoTitle:{
fontWeight:"bold",
fontSize:16
},

infoText:{
color:"#6b7280"
}

});