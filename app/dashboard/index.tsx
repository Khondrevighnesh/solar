import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {

const plants = [
  {
    id:"1",
    name:"Home Solar",
    capacity:"5 kW",
    location:"Pune",
    generation:24,
    power:3.2,
    efficiency:91,
    savings:3200
  },
  {
    id:"2",
    name:"Factory Solar",
    capacity:"50 kW",
    location:"Mumbai",
    generation:210,
    power:18.6,
    efficiency:93,
    savings:28000
  }
];

const [selectedPlant,setSelectedPlant] = useState(plants[0]);
const [chartFilter,setChartFilter] = useState("weekly");

const chartDataSets = {

weekly:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
data:[18,22,25,21,27,30,24]
},

monthly:{
labels:["W1","W2","W3","W4"],
data:[120,140,130,160]
},

yearly:{
labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
data:[420,480,510,530,600,640,700,690,620,580,540,500]
}

};

const currentData = chartDataSets[chartFilter];

return(

<ScrollView style={styles.container}>

<Text style={styles.title}>Solar Dashboard</Text>

{/* Plant Selector */}

<View style={styles.dropdown}>

<Picker
selectedValue={selectedPlant.id}
onValueChange={(value)=>{
const plant = plants.find(p=>p.id===value);
setSelectedPlant(plant);
}}
>

{plants.map((plant)=>(
<Picker.Item
key={plant.id}
label={`${plant.name} (${plant.capacity})`}
value={plant.id}
/>
))}

</Picker>

</View>

{/* Metrics */}

<View style={styles.grid}>

<View style={styles.card}>
<Ionicons name="flash" size={24} color="#16a34a"/>
<Text style={styles.metric}>{selectedPlant.generation}</Text>
<Text style={styles.label}>kWh Today</Text>
</View>

<View style={styles.card}>
<Ionicons name="speedometer" size={24} color="#16a34a"/>
<Text style={styles.metric}>{selectedPlant.power} kW</Text>
<Text style={styles.label}>Live Power</Text>
</View>

<View style={styles.card}>
<Ionicons name="analytics" size={24} color="#16a34a"/>
<Text style={styles.metric}>{selectedPlant.efficiency}%</Text>
<Text style={styles.label}>Efficiency</Text>
</View>

<View style={styles.card}>
<Ionicons name="cash" size={24} color="#16a34a"/>
<Text style={styles.metric}>₹{selectedPlant.savings}</Text>
<Text style={styles.label}>Savings</Text>
</View>

</View>

{/* Weather Section */}

<View style={styles.weatherCard}>

<Text style={styles.sectionTitle}>Weather Conditions</Text>

<View style={styles.weatherRow}>
<Text>🌡 Temperature</Text>
<Text>32°C</Text>
</View>

<View style={styles.weatherRow}>
<Text>☁ Cloud Cover</Text>
<Text>20%</Text>
</View>

<View style={styles.weatherRow}>
<Text>☀ Irradiance</Text>
<Text>5.4 kWh/m²</Text>
</View>

</View>

{/* Chart Filters */}

<View style={styles.filterRow}>

<TouchableOpacity
style={[styles.filterBtn,chartFilter==="weekly" && styles.activeFilter]}
onPress={()=>setChartFilter("weekly")}
>
<Text>Weekly</Text>
</TouchableOpacity>

<TouchableOpacity
style={[styles.filterBtn,chartFilter==="monthly" && styles.activeFilter]}
onPress={()=>setChartFilter("monthly")}
>
<Text>Monthly</Text>
</TouchableOpacity>

<TouchableOpacity
style={[styles.filterBtn,chartFilter==="yearly" && styles.activeFilter]}
onPress={()=>setChartFilter("yearly")}
>
<Text>Yearly</Text>
</TouchableOpacity>

</View>

{/* Chart */}

<View style={styles.chartCard}>

<Text style={styles.sectionTitle}>Energy Production</Text>

<LineChart
data={{
labels:currentData.labels,
datasets:[{data:currentData.data}]
}}
width={screenWidth-40}
height={220}
chartConfig={{
backgroundGradientFrom:"#fff",
backgroundGradientTo:"#fff",
decimalPlaces:0,
color:(opacity=1)=>`rgba(22,163,74,${opacity})`,
labelColor:()=>"#555"
}}
bezier
style={{borderRadius:10}}
/>

</View>

</ScrollView>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f6f7fb",
padding:20
},

title:{
fontSize:26,
fontWeight:"bold",
marginBottom:10
},

dropdown:{
backgroundColor:"#fff",
borderRadius:12,
marginBottom:20,
elevation:2
},

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
},

card:{
backgroundColor:"#fff",
width:"48%",
padding:18,
borderRadius:12,
alignItems:"center",
marginBottom:14,
elevation:2
},

metric:{
fontSize:20,
fontWeight:"bold",
marginTop:6
},

label:{
fontSize:12,
color:"#666"
},

weatherCard:{
backgroundColor:"#fff",
padding:18,
borderRadius:12,
marginTop:10,
elevation:2
},

weatherRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:8
},

sectionTitle:{
fontSize:16,
fontWeight:"bold",
marginBottom:10
},

filterRow:{
flexDirection:"row",
justifyContent:"space-around",
marginTop:20
},

filterBtn:{
padding:10,
borderRadius:8,
backgroundColor:"#eee"
},

activeFilter:{
backgroundColor:"#bbf7d0"
},

chartCard:{
backgroundColor:"#fff",
padding:18,
borderRadius:12,
marginTop:10,
elevation:2
}

});