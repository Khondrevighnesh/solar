import { useState } from "react";
import {
View,
Text,
StyleSheet,
ScrollView,
Dimensions,
TouchableOpacity
} from "react-native";

import { LineChart, BarChart, PieChart } from "react-native-chart-kit";
import { Picker } from "@react-native-picker/picker";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Screen";

const screenWidth = Dimensions.get("window").width;

export default function Analytics() {

const [filter,setFilter] = useState("weekly");
const [plant,setPlant] = useState("Plant 1");

const chartData = {

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
data:[420,520,610,580,690,720,750,730,680,640,600,560]
}

};

const monthlyBarData = {
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[{ data:[420,520,610,580,690,720] }]
};

const lossData = [
{ name:"Shading", population:3, color:"#f59e0b", legendFontColor:"#333", legendFontSize:12 },
{ name:"Temperature", population:4, color:"#ef4444", legendFontColor:"#333", legendFontSize:12 },
{ name:"Inverter", population:2, color:"#3b82f6", legendFontColor:"#333", legendFontSize:12 },
{ name:"Cable", population:1, color:"#10b981", legendFontColor:"#333", legendFontSize:12 }
];

const currentData = chartData[filter];

return (
<Screen>

{/* Header */}
<View style={styles.header}>
<Text style={styles.headerTitle}>Solar Analytics</Text>
<Text style={styles.headerSub}>Monitor your solar performance</Text>
</View>

{/* Plant Selector */}
<View style={styles.card}>
<Text style={styles.cardTitle}>Select Plant</Text>
<Picker selectedValue={plant} onValueChange={(v)=>setPlant(v)}>
<Picker.Item label="Plant 1 - Rooftop" value="Plant 1"/>
<Picker.Item label="Plant 2 - Factory" value="Plant 2"/>
<Picker.Item label="Plant 3 - Farm" value="Plant 3"/>
</Picker>
</View>

{/* Stats */}
<View style={styles.statsRow}>
<View style={styles.statCard}>
<Ionicons name="flash" size={22} color="#16a34a"/>
<Text style={styles.statValue}>620</Text>
<Text style={styles.statLabel}>kWh</Text>
</View>

<View style={styles.statCard}>
<Ionicons name="speedometer" size={22} color="#16a34a"/>
<Text style={styles.statValue}>21</Text>
<Text style={styles.statLabel}>Avg/day</Text>
</View>

<View style={styles.statCard}>
<Ionicons name="trending-up" size={22} color="#16a34a"/>
<Text style={styles.statValue}>32</Text>
<Text style={styles.statLabel}>Peak</Text>
</View>
</View>

{/* Filter */}
<View style={styles.filterRow}>
{["weekly","monthly","yearly"].map(item=>(
<TouchableOpacity
key={item}
style={[styles.filterBtn,filter===item && styles.activeFilter]}
onPress={()=>setFilter(item)}
>
<Text style={filter===item ? styles.activeText : styles.filterText}>
{item.toUpperCase()}
</Text>
</TouchableOpacity>
))}
</View>

{/* ⭐ Production Line Graph */}
<View style={styles.chartCardModern}>

<View style={styles.chartHeader}>
<Text style={styles.cardTitle}>Energy Production</Text>
<Ionicons name="trending-up" size={20} color="#16a34a"/>
</View>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
<LineChart
data={{
labels:currentData.labels,
datasets:[{ data:currentData.data, strokeWidth:3 }]
}}
width={filter==="yearly" ? screenWidth*1.6 : screenWidth-60}
height={260}
chartConfig={chartConfig}
bezier
style={{borderRadius:16}}
/>
</ScrollView>

</View>

{/* ⭐ Monthly Bar Graph */}
<View style={styles.chartCardModern}>

<View style={styles.chartHeader}>
<Text style={styles.cardTitle}>Monthly Generation</Text>
<Ionicons name="bar-chart" size={20} color="#16a34a"/>
</View>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
<BarChart
data={monthlyBarData}
width={screenWidth*1.4}
height={260}
chartConfig={chartConfig}
verticalLabelRotation={25}
style={{borderRadius:16}}
/>
</ScrollView>

</View>

{/* ⭐ Pie Chart */}
<View style={styles.chartCardModern}>

<View style={styles.chartHeader}>
<Text style={styles.cardTitle}>System Loss Analysis</Text>
<Ionicons name="pie-chart" size={20} color="#16a34a"/>
</View>

<PieChart
data={lossData}
width={screenWidth-40}
height={240}
chartConfig={chartConfig}
accessor={"population"}
backgroundColor={"transparent"}
paddingLeft={"10"}
absolute
/>

</View>

{/* Weather */}
<Text style={styles.sectionTitle}>Weather Conditions</Text>

<View style={styles.weatherRow}>
<View style={styles.weatherCard}>
<MaterialCommunityIcons name="thermometer" size={24} color="#16a34a"/>
<Text style={styles.weatherValue}>32°C</Text>
<Text>Temperature</Text>
</View>

<View style={styles.weatherCard}>
<MaterialCommunityIcons name="weather-cloudy" size={24} color="#16a34a"/>
<Text style={styles.weatherValue}>20%</Text>
<Text>Cloud</Text>
</View>

<View style={styles.weatherCard}>
<MaterialCommunityIcons name="weather-sunny" size={24} color="#16a34a"/>
<Text style={styles.weatherValue}>5.4</Text>
<Text>Irradiance</Text>
</View>
</View>

</Screen>
);
}

const chartConfig = {
backgroundGradientFrom:"#fff",
backgroundGradientTo:"#fff",
decimalPlaces:0,
color:(opacity=1)=>`rgba(22,163,74,${opacity})`,
labelColor:()=>"#6b7280",
propsForDots:{ r:"5", strokeWidth:"2", stroke:"#16a34a" },
propsForBackgroundLines:{ stroke:"#e5e7eb", strokeDasharray:"4" }
};

const styles = StyleSheet.create({

header:{
backgroundColor:"#16a34a",
padding:20,
borderRadius:20,
marginBottom:20
},

headerTitle:{ color:"#fff", fontSize:22, fontWeight:"bold" },
headerSub:{ color:"#e5e7eb" },

statsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

statCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:14,
width:"30%",
alignItems:"center",
elevation:3
},

statValue:{ fontSize:20, fontWeight:"bold", marginTop:5 },
statLabel:{ color:"#6b7280" },

filterRow:{
flexDirection:"row",
justifyContent:"space-around",
marginBottom:15
},

filterBtn:{
paddingVertical:8,
paddingHorizontal:16,
borderRadius:20,
backgroundColor:"#e5e7eb"
},

activeFilter:{ backgroundColor:"#16a34a" },
filterText:{ color:"#333" },
activeText:{ color:"#fff" },

chartCardModern:{
backgroundColor:"#fff",
padding:18,
borderRadius:20,
marginBottom:20,
elevation:4
},

chartHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:8
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
marginBottom:10
},

sectionTitle:{
fontSize:18,
fontWeight:"600",
marginBottom:10
},

weatherRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

weatherCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
alignItems:"center",
width:"30%",
elevation:3
},

weatherValue:{
fontWeight:"bold",
fontSize:18,
marginTop:5
}

});