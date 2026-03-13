import {
View,
Text,
TouchableOpacity,
StyleSheet,
ScrollView
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";

export default function Reports(){

const [month,setMonth] = useState("March");
const [year,setYear] = useState("2026");
const [plant,setPlant] = useState("Pune Plant");

const [reports,setReports] = useState([]);

const uploadReport = async () => {

const result = await DocumentPicker.getDocumentAsync({
type:"application/pdf"
});

if(result.assets){

setReports([
...reports,
{
name:result.assets[0].name,
uri:result.assets[0].uri,
plant,
month,
year
}
]);

}

};

const previewReport = async (uri)=>{

if(!uri){
alert("File not available");
return;
}

const available = await Sharing.isAvailableAsync();

if(available){
await Sharing.shareAsync(uri);
}

};

const deleteReport = (index)=>{

const updated=[...reports];
updated.splice(index,1);
setReports(updated);

};

return(

<View style={styles.container}>

<Text style={styles.title}>Solar Reports</Text>

{/* Filters */}

<View style={styles.filters}>

<View style={styles.filterBox}>
<Text style={styles.label}>Plant</Text>
<Text style={styles.value}>{plant}</Text>
</View>

<View style={styles.filterBox}>
<Text style={styles.label}>Month</Text>
<Text style={styles.value}>{month}</Text>
</View>

<View style={styles.filterBox}>
<Text style={styles.label}>Year</Text>
<Text style={styles.value}>{year}</Text>
</View>

</View>

<ScrollView>

{reports.map((item,index)=>(

<View key={index} style={styles.card}>

<View style={styles.row}>

<Ionicons name="document-text" size={24} color="#16a34a"/>

<Text
style={styles.reportName}
numberOfLines={1}
>

{item.name}

</Text>

</View>

<View style={styles.actions}>

<TouchableOpacity
style={styles.actionBtn}
onPress={()=>previewReport(item.uri)}
>

<Ionicons name="eye" size={18} color="#2563eb"/>

</TouchableOpacity>

<TouchableOpacity
style={styles.actionBtn}
onPress={()=>previewReport(item.uri)}
>

<Ionicons name="download" size={18} color="#16a34a"/>

</TouchableOpacity>

<TouchableOpacity
style={styles.actionBtn}
onPress={()=>deleteReport(index)}
>

<Ionicons name="trash" size={18} color="#ef4444"/>

</TouchableOpacity>

</View>

</View>

))}

{reports.length === 0 && (
<Text style={styles.empty}>No reports uploaded</Text>
)}

</ScrollView>

{/* Upload Button */}

<TouchableOpacity
style={styles.uploadBtn}
onPress={uploadReport}
>

<Ionicons name="cloud-upload" size={26} color="#fff"/>

</TouchableOpacity>

</View>

)

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
marginBottom:15
},

filters:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

filterBox:{
backgroundColor:"#fff",
padding:10,
borderRadius:10,
width:"30%",
elevation:2
},

label:{
fontSize:12,
color:"#6b7280"
},

value:{
fontSize:15,
fontWeight:"bold"
},

card:{
backgroundColor:"#fff",
padding:15,
borderRadius:14,
marginBottom:12,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
elevation:3
},

row:{
flexDirection:"row",
alignItems:"center",
flex:1
},

reportName:{
marginLeft:10,
flex:1
},

actions:{
flexDirection:"row"
},

actionBtn:{
backgroundColor:"#f3f4f6",
padding:8,
borderRadius:8,
marginLeft:8
},

uploadBtn:{
position:"absolute",
bottom:30,
right:20,
backgroundColor:"#16a34a",
width:60,
height:60,
borderRadius:30,
justifyContent:"center",
alignItems:"center",
elevation:6
},

empty:{
textAlign:"center",
marginTop:40,
color:"#6b7280"
}

});