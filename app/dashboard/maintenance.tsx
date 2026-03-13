import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function Maintenance() {

const completedCleanings = 10;
const totalCleanings = 24;
const progress = (completedCleanings / totalCleanings) * 100;

const alerts = [
{ id:1, type:"warning", message:"Low inverter efficiency", time:"2 hours ago"},
{ id:2, type:"fault", message:"Grid voltage fluctuation", time:"5 hours ago"},
{ id:3, type:"info", message:"Scheduled cleaning tomorrow", time:"1 day ago"}
];

return (

<ScrollView style={styles.container}>

<Text style={styles.title}>Maintenance & Alerts</Text>

{/* Plant Status */}

<View style={styles.statusCard}>

<Ionicons name="flash" size={28} color="#16a34a" />

<View>
<Text style={styles.statusTitle}>Plant Status</Text>
<Text style={styles.statusOnline}>System Online</Text>
</View>

</View>

{/* Maintenance Progress */}

<View style={styles.card}>

<Text style={styles.cardTitle}>Cleaning Cycle Progress</Text>

<View style={styles.progressBar}>
<View style={[styles.progressFill,{width:`${progress}%`}]} />
</View>

<Text>{completedCleanings} / {totalCleanings} Cleanings Completed</Text>

</View>

{/* Next Maintenance */}

<View style={styles.card}>

<Text style={styles.cardTitle}>Next Scheduled Cleaning</Text>

<View style={styles.row}>
<MaterialIcons name="event" size={20} color="#16a34a"/>
<Text style={styles.rowText}>12 April 2026</Text>
</View>

</View>

{/* Maintenance History */}

<View style={styles.card}>

<Text style={styles.cardTitle}>Recent Maintenance</Text>

<View style={styles.listItem}>
<Text>Cleaning Completed</Text>
<Text style={styles.date}>05 Mar 2026</Text>
</View>

<View style={styles.listItem}>
<Text>Inverter Inspection</Text>
<Text style={styles.date}>12 Feb 2026</Text>
</View>

<View style={styles.listItem}>
<Text>Panel Cleaning</Text>
<Text style={styles.date}>20 Jan 2026</Text>
</View>

</View>

{/* Alerts */}

<View style={styles.card}>

<Text style={styles.cardTitle}>Active Alerts</Text>

{alerts.map((alert)=>(
<View key={alert.id} style={styles.alertRow}>

<Ionicons
name={
alert.type === "fault"
? "warning"
: alert.type === "warning"
? "alert-circle"
: "information-circle"
}
size={20}
color={
alert.type === "fault"
? "#ef4444"
: alert.type === "warning"
? "#f59e0b"
: "#3b82f6"
}
/>

<View style={{marginLeft:10}}>
<Text>{alert.message}</Text>
<Text style={styles.alertTime}>{alert.time}</Text>
</View>

</View>
))}

</View>

</ScrollView>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#f6f7fb"
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:20
},

statusCard:{
backgroundColor:"#e6f9ee",
padding:15,
borderRadius:12,
flexDirection:"row",
alignItems:"center",
marginBottom:20
},

statusTitle:{
fontWeight:"bold"
},

statusOnline:{
color:"#16a34a"
},

card:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
marginBottom:15,
elevation:2
},

cardTitle:{
fontWeight:"bold",
marginBottom:10
},

progressBar:{
height:8,
backgroundColor:"#e5e7eb",
borderRadius:10,
marginBottom:10
},

progressFill:{
height:8,
backgroundColor:"#16a34a",
borderRadius:10
},

row:{
flexDirection:"row",
alignItems:"center"
},

rowText:{
marginLeft:10
},

listItem:{
flexDirection:"row",
justifyContent:"space-between",
paddingVertical:6
},

date:{
color:"#6b7280"
},

alertRow:{
flexDirection:"row",
alignItems:"center",
paddingVertical:10,
borderBottomWidth:1,
borderBottomColor:"#eee"
},

alertTime:{
fontSize:12,
color:"#6b7280"
}

});