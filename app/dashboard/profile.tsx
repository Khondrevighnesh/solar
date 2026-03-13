import {
View,
Text,
StyleSheet,
TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { router } from "expo-router";
import Screen from "../../components/Screen";
import { AuthContext } from "../../context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";

export default function Profile(){

const { logout } = useContext(AuthContext);

const handleLogout = () => {
logout();
router.replace("/");
};

return(

<Screen>

{/* ⭐ Profile Header */}
<LinearGradient
colors={["#16a34a","#22c55e","#4ade80"]}
style={styles.header}
>

<Ionicons name="person-circle" size={90} color="#fff"/>

<Text style={styles.name}>Solar Client</Text>
<Text style={styles.email}>client@solar.com</Text>

<View style={styles.badge}>
<Text style={styles.badgeText}>Plant Online</Text>
</View>

</LinearGradient>

{/* ⭐ Plant Info */}
<View style={styles.section}>
<Text style={styles.sectionTitle}>Plant Information</Text>

<View style={styles.grid}>

<View style={styles.box}>
<Text style={styles.label}>Capacity</Text>
<Text style={styles.value}>5 kW</Text>
</View>

<View style={styles.box}>
<Text style={styles.label}>Location</Text>
<Text style={styles.value}>Pune</Text>
</View>

<View style={styles.box}>
<Text style={styles.label}>Installation</Text>
<Text style={styles.value}>2023</Text>
</View>

<View style={styles.box}>
<Text style={styles.label}>Inverter</Text>
<Text style={styles.value}>Growatt</Text>
</View>

</View>

</View>

{/* ⭐ Performance */}
<View style={styles.section}>
<Text style={styles.sectionTitle}>Performance</Text>

<View style={styles.kpiRow}>

<View style={styles.kpiCard}>
<Ionicons name="flash" size={24} color="#16a34a"/>
<Text style={styles.kpiValue}>420</Text>
<Text style={styles.kpiLabel}>kWh</Text>
</View>

<View style={styles.kpiCard}>
<Ionicons name="cash" size={24} color="#16a34a"/>
<Text style={styles.kpiValue}>₹3200</Text>
<Text style={styles.kpiLabel}>Savings</Text>
</View>

<View style={styles.kpiCard}>
<Ionicons name="speedometer" size={24} color="#16a34a"/>
<Text style={styles.kpiValue}>91%</Text>
<Text style={styles.kpiLabel}>Efficiency</Text>
</View>

</View>

</View>

{/* ⭐ Menu */}
<View style={styles.section}>
<Text style={styles.sectionTitle}>Account</Text>

<MenuItem
title="Reports"
icon="document-text-outline"
screen="/dashboard/reports"
/>

<MenuItem
title="Documents"
icon="folder-outline"
screen="/dashboard/documents"
/>

<MenuItem
title="Support"
icon="call-outline"
screen="/dashboard/support"
/>

</View>

{/* ⭐ Logout */}
<TouchableOpacity
style={styles.logoutBtn}
onPress={handleLogout}
>
<Ionicons name="log-out-outline" size={22} color="#fff"/>
<Text style={styles.logoutText}>Logout</Text>
</TouchableOpacity>

</Screen>

);
}

function MenuItem({title,icon,screen}){
return(
<TouchableOpacity
style={styles.menuItem}
onPress={()=>router.push(screen)}
>
<View style={styles.menuRow}>
<Ionicons name={icon} size={22} color="#16a34a"/>
<Text style={styles.menuText}>{title}</Text>
</View>
<Ionicons name="chevron-forward" size={20} color="#9ca3af"/>
</TouchableOpacity>
);
}

const styles = StyleSheet.create({

header:{
padding:25,
borderRadius:24,
alignItems:"center",
marginBottom:15
},

name:{
color:"#fff",
fontSize:22,
fontWeight:"bold",
marginTop:8
},

email:{
color:"#ecfdf5"
},

badge:{
marginTop:10,
backgroundColor:"#dcfce7",
paddingHorizontal:12,
paddingVertical:4,
borderRadius:20
},

badgeText:{
color:"#166534",
fontWeight:"bold"
},

section:{
backgroundColor:"#fff",
padding:18,
borderRadius:18,
marginBottom:15,
elevation:3
},

sectionTitle:{
fontSize:18,
fontWeight:"bold",
marginBottom:10
},

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
},

box:{
backgroundColor:"#f3f4f6",
width:"48%",
padding:14,
borderRadius:12,
marginTop:10
},

label:{
color:"#6b7280"
},

value:{
fontWeight:"bold",
fontSize:16
},

kpiRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:10
},

kpiCard:{
backgroundColor:"#f3f4f6",
width:"30%",
padding:14,
borderRadius:14,
alignItems:"center"
},

kpiValue:{
fontSize:18,
fontWeight:"bold"
},

kpiLabel:{
color:"#6b7280"
},

menuItem:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
backgroundColor:"#fff",
padding:16,
borderRadius:14,
marginTop:10,
elevation:2
},

menuRow:{
flexDirection:"row",
alignItems:"center",
gap:10
},

menuText:{
fontWeight:"600"
},

logoutBtn:{
flexDirection:"row",
backgroundColor:"#ef4444",
padding:16,
borderRadius:14,
justifyContent:"center",
alignItems:"center",
marginTop:10,
marginBottom:40,
gap:6
},

logoutText:{
color:"#fff",
fontWeight:"bold"
}

});