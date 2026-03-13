import {
View,
Text,
StyleSheet,
TouchableOpacity,
Modal,
TextInput,
Alert,
ScrollView
} from "react-native";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Screen from "../../components/Screen";

export default function Maintenance(){

const [visible,setVisible] = useState(false);
const [visitType,setVisitType] = useState("Cleaning");
const [message,setMessage] = useState("");

const completedCleanings = 10;
const totalCleanings = 24;
const progress = (completedCleanings / totalCleanings) * 100;

const alerts = [
{ id:1, type:"warning", message:"Low inverter efficiency", time:"2h ago"},
{ id:2, type:"fault", message:"Grid voltage fluctuation", time:"5h ago"},
{ id:3, type:"info", message:"Cleaning scheduled tomorrow", time:"1d ago"}
];

return(

<Screen>

<ScrollView showsVerticalScrollIndicator={false}>

<Text style={styles.title}>Maintenance</Text>

{/* STATUS CARD */}
<View style={styles.statusCard}>
<View>
<Text style={styles.statusLabel}>Plant Status</Text>
<Text style={styles.statusValue}>System Online</Text>
</View>

<View style={styles.liveBadge}>
<Text style={{color:"#fff",fontWeight:"bold"}}>LIVE</Text>
</View>
</View>

{/* PROGRESS */}
<View style={styles.card}>
<Text style={styles.cardTitle}>Cleaning Cycle</Text>

<View style={styles.progressBg}>
<View style={[styles.progressFill,{width:`${progress}%`}]} />
</View>

<Text style={styles.smallText}>
{completedCleanings} of {totalCleanings} Cleanings Done
</Text>
</View>

{/* NEXT VISIT */}
<View style={styles.cardRow}>
<View style={styles.smallCard}>
<MaterialIcons name="event" size={24} color="#16a34a"/>
<Text style={styles.smallTitle}>Next Visit</Text>
<Text style={styles.smallValue}>12 Apr 2026</Text>
</View>

<View style={styles.smallCard}>
<Ionicons name="shield-checkmark" size={24} color="#16a34a"/>
<Text style={styles.smallTitle}>AMC</Text>
<Text style={styles.smallValue}>Valid</Text>
</View>
</View>

{/* ALERTS */}
<View style={styles.card}>
<Text style={styles.cardTitle}>Active Alerts</Text>

{alerts.map((a)=>(
<View key={a.id} style={styles.alertBox}>

<View style={[
styles.alertIcon,
{backgroundColor:
a.type==="fault"
? "#fee2e2"
: a.type==="warning"
? "#fef3c7"
: "#dbeafe"}
]}>

<Ionicons
name={
a.type==="fault"
? "warning"
: a.type==="warning"
? "alert-circle"
: "information-circle"
}
size={18}
color={
a.type==="fault"
? "#ef4444"
: a.type==="warning"
? "#f59e0b"
: "#3b82f6"
}
/>

</View>

<View style={{flex:1}}>
<Text style={styles.alertMsg}>{a.message}</Text>
<Text style={styles.alertTime}>{a.time}</Text>
</View>

</View>
))}
</View>

<View style={{height:100}}/>

</ScrollView>

{/* FLOATING BUTTON */}
<TouchableOpacity
style={styles.fab}
onPress={()=>setVisible(true)}
>
<Ionicons name="construct" size={22} color="#fff"/>
<Text style={styles.fabText}>Request Service</Text>
</TouchableOpacity>

{/* MODAL */}
<Modal visible={visible} animationType="slide">

<View style={styles.modal}>

<Text style={styles.modalTitle}>Service Request</Text>

<View style={styles.typeRow}>

{["Cleaning","Inspection","Repair"].map((t)=>(
<TouchableOpacity
key={t}
style={[styles.typeBtn,visitType===t && styles.typeActive]}
onPress={()=>setVisitType(t)}
>
<Text>{t}</Text>
</TouchableOpacity>
))}

</View>

<TextInput
placeholder="Describe problem..."
multiline
style={styles.input}
value={message}
onChangeText={setMessage}
/>

<TouchableOpacity
style={styles.submit}
onPress={()=>{
setVisible(false);
Alert.alert("Success","Technician will contact you");
}}
>
<Text style={{color:"#fff",fontWeight:"bold"}}>Submit</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>setVisible(false)}>
<Text style={{textAlign:"center",marginTop:10}}>Cancel</Text>
</TouchableOpacity>

</View>

</Modal>

</Screen>
);
}

const styles = StyleSheet.create({

title:{fontSize:26,fontWeight:"bold",marginBottom:15},

statusCard:{
backgroundColor:"#111827",
padding:20,
borderRadius:20,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:15
},

statusLabel:{color:"#9ca3af"},
statusValue:{color:"#fff",fontSize:18,fontWeight:"bold"},

liveBadge:{
backgroundColor:"#16a34a",
paddingHorizontal:12,
paddingVertical:6,
borderRadius:20
},

card:{
backgroundColor:"#fff",
padding:18,
borderRadius:20,
marginBottom:15,
elevation:4
},

cardRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:15
},

smallCard:{
backgroundColor:"#fff",
width:"48%",
padding:18,
borderRadius:20,
elevation:3
},

smallTitle:{color:"#6b7280",marginTop:5},
smallValue:{fontWeight:"bold",marginTop:2},

cardTitle:{fontWeight:"bold",marginBottom:10,fontSize:16},

progressBg:{
height:10,
backgroundColor:"#e5e7eb",
borderRadius:20
},

progressFill:{
height:10,
backgroundColor:"#22c55e",
borderRadius:20
},

smallText:{marginTop:8,color:"#6b7280"},

alertBox:{
flexDirection:"row",
alignItems:"center",
marginBottom:12
},

alertIcon:{
width:34,
height:34,
borderRadius:10,
alignItems:"center",
justifyContent:"center",
marginRight:10
},

alertMsg:{fontWeight:"500"},
alertTime:{fontSize:12,color:"#6b7280"},

fab:{
position:"absolute",
bottom:30,
left:20,
right:20,
backgroundColor:"#16a34a",
padding:18,
borderRadius:20,
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
gap:10,
elevation:8
},

fabText:{color:"#fff",fontWeight:"bold"},

modal:{flex:1,padding:20,backgroundColor:"#fff"},
modalTitle:{fontSize:22,fontWeight:"bold",marginBottom:20},

typeRow:{flexDirection:"row",justifyContent:"space-between"},
typeBtn:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:12,
width:"30%",
alignItems:"center"
},

typeActive:{
backgroundColor:"#dcfce7",
borderColor:"#16a34a"
},

input:{
borderWidth:1,
borderColor:"#ddd",
borderRadius:12,
padding:12,
height:130,
marginTop:20,
textAlignVertical:"top"
},

submit:{
backgroundColor:"#16a34a",
padding:16,
borderRadius:14,
alignItems:"center",
marginTop:20
}

});