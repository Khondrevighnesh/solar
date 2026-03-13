import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function LivePowerCard(){

return(

<LinearGradient
colors={["#16a34a","#22c55e","#4ade80"]}
style={styles.card}
>

<View style={styles.row}>

<View>
<Text style={styles.title}>Live Power</Text>
<Text style={styles.power}>3.2 kW</Text>

<View style={styles.trendRow}>
<Ionicons name="trending-up" size={16} color="#fff"/>
<Text style={styles.trendText}> +12% Today</Text>
</View>
</View>

<Ionicons name="flash" size={60} color="rgba(255,255,255,0.4)"/>

</View>

<View style={styles.bottomRow}>

<View>
<Text style={styles.label}>Today Generation</Text>
<Text style={styles.value}>24 kWh</Text>
</View>

<View>
<Text style={styles.label}>Savings</Text>
<Text style={styles.value}>₹320</Text>
</View>

<View>
<Text style={styles.label}>Efficiency</Text>
<Text style={styles.value}>91%</Text>
</View>

</View>

</LinearGradient>

);
}

const styles = StyleSheet.create({

card:{
padding:20,
borderRadius:24,
marginBottom:20
},

row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

title:{
color:"#fff",
fontSize:16,
opacity:0.9
},

power:{
color:"#fff",
fontSize:40,
fontWeight:"bold",
marginVertical:5
},

trendRow:{
flexDirection:"row",
alignItems:"center"
},

trendText:{
color:"#fff",
marginLeft:4
},

bottomRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:20
},

label:{
color:"#fff",
fontSize:12,
opacity:0.9
},

value:{
color:"#fff",
fontSize:16,
fontWeight:"bold"
}
    
});