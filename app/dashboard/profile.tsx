import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

export default function Profile() {

return (

<ScrollView style={styles.container}>

<Text style={styles.title}>Profile</Text>

{/* User Profile Card */}

<View style={styles.profileCard}>

<Ionicons name="person-circle" size={70} color="#16a34a" />

<View style={{marginLeft:15}}>
<Text style={styles.name}>Vighnesh Khondre</Text>
<Text style={styles.role}>Solar Plant Owner</Text>
<Text style={styles.info}>📧 vighnesh@email.com</Text>
<Text style={styles.info}>📞 +91 9876543210</Text>
</View>

</View>

{/* My Plants */}

<Text style={styles.section}>My Plants</Text>

<View style={styles.grid}>

<View style={styles.plantCard}>
<Ionicons name="flash" size={28} color="#16a34a"/>
<Text style={styles.plantName}>Rooftop Solar</Text>
<Text style={styles.plantMeta}>5 kW</Text>
<Text style={styles.plantMeta}>Pune</Text>
</View>

<View style={styles.plantCard}>
<Ionicons name="flash" size={28} color="#16a34a"/>
<Text style={styles.plantName}>Factory Solar</Text>
<Text style={styles.plantMeta}>25 kW</Text>
<Text style={styles.plantMeta}>Mumbai</Text>
</View>

</View>

{/* Plant Information */}

<View style={styles.card}>

<Text style={styles.cardTitle}>Plant Information</Text>

<View style={styles.row}>
<Ionicons name="business" size={18} color="#16a34a"/>
<Text style={styles.rowText}>Plant Name: Rooftop Solar</Text>
</View>

<View style={styles.row}>
<Ionicons name="flash" size={18} color="#16a34a"/>
<Text style={styles.rowText}>Capacity: 5 kW</Text>
</View>

<View style={styles.row}>
<Ionicons name="location" size={18} color="#16a34a"/>
<Text style={styles.rowText}>Location: Pune, Maharashtra</Text>
</View>

<View style={styles.row}>
<Ionicons name="calendar" size={18} color="#16a34a"/>
<Text style={styles.rowText}>Installed: Jan 2025</Text>
</View>

</View>

{/* System Details */}

<View style={styles.card}>

<Text style={styles.cardTitle}>System Details</Text>

<View style={styles.row}>
<MaterialCommunityIcons name="solar-panel" size={18} color="#16a34a"/>
<Text style={styles.rowText}>Panels: 12 × 450W</Text>
</View>

<View style={styles.row}>
<MaterialCommunityIcons name="flash" size={18} color="#16a34a"/>
<Text style={styles.rowText}>Inverter: Growatt 5kW</Text>
</View>

<View style={styles.row}>
<MaterialCommunityIcons name="transmission-tower" size={18} color="#16a34a"/>
<Text style={styles.rowText}>Grid Type: Net Metering</Text>
</View>

<View style={styles.row}>
<MaterialCommunityIcons name="home-roof" size={18} color="#16a34a"/>
<Text style={styles.rowText}>Mount Type: Rooftop</Text>
</View>

</View>

{/* Location Map */}

{/* <View style={styles.card}>

<Text style={styles.cardTitle}>Plant Location</Text>

<MapView
style={styles.map}
initialRegion={{
latitude: 18.5204,
longitude: 73.8567,
latitudeDelta: 0.01,
longitudeDelta: 0.01
}}
>

<Marker
coordinate={{
latitude: 18.5204,
longitude: 73.8567
}}
title="Solar Plant"
description="Rooftop Solar Plant"
/>

</MapView>

</View> */}

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
fontSize:24,
fontWeight:"bold",
marginBottom:20
},

section:{
fontSize:18,
fontWeight:"bold",
marginBottom:10
},

profileCard:{
backgroundColor:"#fff",
padding:20,
borderRadius:15,
flexDirection:"row",
alignItems:"center",
marginBottom:20,
elevation:3
},

name:{
fontSize:18,
fontWeight:"bold"
},

role:{
color:"#6b7280"
},

info:{
fontSize:13,
color:"#6b7280"
},

grid:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

plantCard:{
width:"48%",
backgroundColor:"#fff",
padding:15,
borderRadius:15,
alignItems:"center",
elevation:3
},

plantName:{
fontWeight:"bold",
marginTop:5
},

plantMeta:{
fontSize:12,
color:"#6b7280"
},

card:{
backgroundColor:"#fff",
padding:16,
borderRadius:15,
marginBottom:18,
elevation:3
},

cardTitle:{
fontWeight:"bold",
fontSize:16,
marginBottom:12
},

row:{
flexDirection:"row",
alignItems:"center",
marginBottom:8
},

rowText:{
marginLeft:8
},

map:{
height:180,
borderRadius:12
}

});