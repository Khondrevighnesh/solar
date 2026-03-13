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
labels:["Jan","Feb","Mar","Apr","May","Jun"],
data:[420,520,610,580,690,720]
}

};

const monthlyBarData = {
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[
{ data:[420,520,610,580,690,720] }
]
};

const lossData = [

{
name:"Shading",
population:3,
color:"#f59e0b",
legendFontColor:"#333",
legendFontSize:12
},

{
name:"Temperature",
population:4,
color:"#ef4444",
legendFontColor:"#333",
legendFontSize:12
},

{
name:"Inverter",
population:2,
color:"#3b82f6",
legendFontColor:"#333",
legendFontSize:12
},

{
name:"Cable",
population:1,
color:"#10b981",
legendFontColor:"#333",
legendFontSize:12
}

];

const currentData = chartData[filter];

return (

<ScrollView style={styles.container}>

{/* Header */}

<View style={styles.header}>
<Text style={styles.headerTitle}>Solar Analytics</Text>
<Text style={styles.headerSub}>Monitor your solar performance</Text>
</View>

{/* Plant Selector */}

<View style={styles.card}>
<Text style={styles.cardTitle}>Select Plant</Text>

<Picker
selectedValue={plant}
onValueChange={(itemValue)=>setPlant(itemValue)}
>

<Picker.Item label="Plant 1 - Rooftop" value="Plant 1"/>
<Picker.Item label="Plant 2 - Factory" value="Plant 2"/>
<Picker.Item label="Plant 3 - Farm" value="Plant 3"/>

</Picker>

</View>

{/* Energy Stats */}

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

<TouchableOpacity
style={[styles.filterBtn,filter==="weekly" && styles.activeFilter]}
onPress={()=>setFilter("weekly")}
>
<Text style={filter==="weekly" ? styles.activeText : styles.filterText}>
Weekly
</Text>
</TouchableOpacity>

<TouchableOpacity
style={[styles.filterBtn,filter==="monthly" && styles.activeFilter]}
onPress={()=>setFilter("monthly")}
>
<Text style={filter==="monthly" ? styles.activeText : styles.filterText}>
Monthly
</Text>
</TouchableOpacity>

<TouchableOpacity
style={[styles.filterBtn,filter==="yearly" && styles.activeFilter]}
onPress={()=>setFilter("yearly")}
>
<Text style={filter==="yearly" ? styles.activeText : styles.filterText}>
Yearly
</Text>
</TouchableOpacity>

</View>

{/* Production Line Chart */}

<View style={styles.chartCard}>
<Text style={styles.cardTitle}>Energy Production</Text>

<LineChart
data={{
labels:currentData.labels,
datasets:[{data:currentData.data}]
}}
width={screenWidth - 40}
height={220}
chartConfig={chartConfig}
bezier
style={styles.chart}
/>

</View>

{/* Monthly Bar Chart */}

<View style={styles.chartCard}>

<Text style={styles.cardTitle}>Monthly Generation</Text>

<BarChart
data={monthlyBarData}
width={screenWidth - 40}
height={220}
chartConfig={chartConfig}
style={styles.chart}
verticalLabelRotation={30}
/>

</View>

{/* Loss Pie Chart */}

<View style={styles.chartCard}>

<Text style={styles.cardTitle}>System Loss Analysis</Text>

<PieChart
data={lossData}
width={screenWidth - 40}
height={220}
chartConfig={chartConfig}
accessor={"population"}
backgroundColor={"transparent"}
paddingLeft={"10"}
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

{/* Performance */}

<View style={styles.card}>

<Text style={styles.cardTitle}>Performance</Text>

<Text>Efficiency</Text>

<View style={styles.progressBar}>
<View style={[styles.progressFill,{width:"92%"}]}/>
</View>

<Text>Performance Ratio</Text>

<View style={styles.progressBar}>
<View style={[styles.progressFill,{width:"86%"}]}/>
</View>

</View>

</ScrollView>

);
}

const chartConfig = {
backgroundGradientFrom:"#fff",
backgroundGradientTo:"#fff",
decimalPlaces:0,
color:(opacity=1)=>`rgba(22,163,74,${opacity})`,
labelColor:()=>"#555"
};

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#f6f7fb"
},

header:{
backgroundColor:"#16a34a",
padding:20,
borderRadius:15,
marginBottom:20
},

headerTitle:{
color:"#fff",
fontSize:22,
fontWeight:"bold"
},

headerSub:{
color:"#e5e7eb"
},

statsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

statCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
width:"30%",
alignItems:"center",
elevation:3
},

statValue:{
fontSize:20,
fontWeight:"bold",
marginTop:5
},

statLabel:{
color:"#6b7280"
},

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

activeFilter:{
backgroundColor:"#16a34a"
},

filterText:{
color:"#333"
},

activeText:{
color:"#fff"
},

chartCard:{
backgroundColor:"#fff",
padding:10,
borderRadius:15,
marginBottom:20,
elevation:3
},

chart:{
borderRadius:10
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

progressBar:{
height:8,
backgroundColor:"#e5e7eb",
borderRadius:10,
marginVertical:8
},

progressFill:{
height:8,
backgroundColor:"#16a34a",
borderRadius:10
}

});