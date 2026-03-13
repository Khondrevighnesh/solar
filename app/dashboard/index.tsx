import { useState } from "react";
import {
View,
Text,
StyleSheet,
Dimensions,
TouchableOpacity,
ScrollView
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import Screen from "../../components/Screen";


const screenWidth = Dimensions.get("window").width;

export default function Dashboard(){

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

<Screen>

<View style={styles.header}>
<Text style={styles.headerTitle}>Solar Dashboard </Text>
<Text style={styles.headerSub}>Monitor your solar performance</Text>
</View>
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

{/* KPI CARDS */}

<View style={styles.grid}>

<View style={styles.card}>
<Ionicons name="flash" size={26} color="#16a34a"/>
<Text style={styles.metric}>{selectedPlant.generation}</Text>
<Text style={styles.label}>kWh Today</Text>
</View>

<View style={styles.card}>
<Ionicons name="speedometer" size={26} color="#16a34a"/>
<Text style={styles.metric}>{selectedPlant.power} kW</Text>
<Text style={styles.label}>Live Power</Text>
</View>

<View style={styles.card}>
<Ionicons name="analytics" size={26} color="#16a34a"/>
<Text style={styles.metric}>{selectedPlant.efficiency}%</Text>
<Text style={styles.label}>Efficiency</Text>
</View>

<View style={styles.card}>
<Ionicons name="cash" size={26} color="#16a34a"/>
<Text style={styles.metric}>₹{selectedPlant.savings}</Text>
<Text style={styles.label}>Savings</Text>
</View>

</View>

{/* WEATHER */}

<View style={styles.weatherCard}>
<Text style={styles.sectionTitle}>Weather</Text>

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

{/* SEGMENT FILTER */}

<View style={styles.segmentContainer}>

{["weekly","monthly","yearly"].map((item)=>(
<TouchableOpacity
key={item}
style={[
styles.segmentBtn,
chartFilter===item && styles.segmentActive
]}
onPress={()=>setChartFilter(item)}
>
<Text
style={[
styles.segmentText,
chartFilter===item && styles.segmentTextActive
]}
>
{item.toUpperCase()}
</Text>
</TouchableOpacity>
))}

</View>

{/* GRAPH */}

<View style={styles.chartWrapper}>

<View style={styles.chartHeader}>
<Text style={styles.chartTitle}>Energy Production</Text>
<Ionicons name="trending-up" size={22} color="#16a34a"/>
</View>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>

<LineChart
data={{
labels:currentData.labels,
datasets:[{data:currentData.data,strokeWidth:3}]
}}
width={
chartFilter==="yearly"
? screenWidth*1.6
: screenWidth-60
}
height={260}
chartConfig={{
backgroundGradientFrom:"#ffffff",
backgroundGradientTo:"#ffffff",
decimalPlaces:0,
color:(opacity=1)=>`rgba(22,163,74,${opacity})`,
labelColor:()=>"#6b7280",
propsForDots:{
r:"5",
strokeWidth:"2",
stroke:"#16a34a"
},
propsForBackgroundLines:{
stroke:"#e5e7eb",
strokeDasharray:"4"
}
}}
bezier
style={{borderRadius:16,marginVertical:8}}
/>

</ScrollView>

</View>

</Screen>

);
}

const styles = StyleSheet.create({

header:{
backgroundColor:"#16a34a",
padding:20,
borderRadius:20,
marginBottom:20
},

headerTitle:{ color:"#fff", fontSize:22, fontWeight:"bold" },
headerSub:{ color:"#e5e7eb" },

dropdown:{
backgroundColor:"#fff",
borderRadius:16,
marginBottom:20,
elevation:3
},

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
},

card:{
backgroundColor:"#fff",
width:"48%",
padding:20,
borderRadius:18,
alignItems:"center",
marginBottom:15,
elevation:3
},

metric:{
fontSize:22,
fontWeight:"bold",
marginTop:6
},

label:{
fontSize:13,
color:"#6b7280"
},

weatherCard:{
backgroundColor:"#fff",
padding:18,
borderRadius:18,
marginTop:10,
elevation:3
},

weatherRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:8
},

sectionTitle:{
fontSize:18,
fontWeight:"bold",
marginBottom:10
},

segmentContainer:{
flexDirection:"row",
backgroundColor:"#e5e7eb",
borderRadius:14,
padding:4,
marginTop:25
},

segmentBtn:{
flex:1,
paddingVertical:10,
borderRadius:12,
alignItems:"center"
},

segmentActive:{
backgroundColor:"#16a34a"
},

segmentText:{
fontWeight:"600",
color:"#374151"
},

segmentTextActive:{
color:"#fff"
},

chartWrapper:{
marginTop:20,
backgroundColor:"#fff",
padding:18,
borderRadius:20,
elevation:4
},

chartHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

chartTitle:{
fontSize:18,
fontWeight:"bold"
}

});