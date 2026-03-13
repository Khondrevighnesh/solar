import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity,
Alert
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";

export default function Documents(){

const [documents,setDocuments] = useState([]);

const pickDocument = async () => {

const result = await DocumentPicker.getDocumentAsync({
type:"*/*"
});

if(result.assets){

setDocuments([
...documents,
{
name:result.assets[0].name,
uri:result.assets[0].uri
}
]);

}

};

const previewDoc = async (uri) => {

if(!uri){
alert("File not available");
return;
}

const available = await Sharing.isAvailableAsync();

if(available){
await Sharing.shareAsync(uri);
}

};

const deleteDoc = (index)=>{

Alert.alert(
"Delete Document",
"Are you sure?",
[
{text:"Cancel"},
{
text:"Delete",
onPress:()=>{
const updated=[...documents];
updated.splice(index,1);
setDocuments(updated);
}
}
]
);

};

return(

<View style={styles.container}>

<Text style={styles.title}>Plant Documents</Text>

<ScrollView showsVerticalScrollIndicator={false}>

{documents.map((doc,index)=>(

<View key={index} style={styles.card}>

<View style={styles.left}>

<View style={styles.iconBox}>
<Ionicons name="document-text" size={24} color="#16a34a"/>
</View>

<View style={styles.textContainer}>

<Text
style={styles.docName}
numberOfLines={1}
ellipsizeMode="tail"
>
{doc.name}
</Text>

<Text style={styles.docMeta}>
Saved document
</Text>

</View>

</View>

<View style={styles.actions}>

<TouchableOpacity
style={styles.actionBtn}
onPress={()=>previewDoc(doc.uri)}
>

<Ionicons name="eye" size={18} color="#2563eb"/>

</TouchableOpacity>

<TouchableOpacity
style={styles.actionBtn}
onPress={()=>previewDoc(doc.uri)}
>

<Ionicons name="download" size={18} color="#16a34a"/>

</TouchableOpacity>

<TouchableOpacity
style={styles.actionBtn}
onPress={()=>deleteDoc(index)}
>

<Ionicons name="trash" size={18} color="#ef4444"/>

</TouchableOpacity>

</View>

</View>

))}

{documents.length === 0 && (
<Text style={styles.empty}>
No documents uploaded
</Text>
)}

</ScrollView>

{/* Upload Button */}

<TouchableOpacity
style={styles.uploadBtn}
onPress={pickDocument}
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
marginBottom:20
},

card:{
backgroundColor:"#fff",
padding:15,
borderRadius:16,
marginBottom:14,
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
elevation:3
},

left:{
flexDirection:"row",
alignItems:"center",
flex:1
},

iconBox:{
backgroundColor:"#ecfdf5",
padding:10,
borderRadius:12
},

textContainer:{
marginLeft:12,
flex:1
},

docName:{
fontSize:15,
fontWeight:"600"
},

docMeta:{
fontSize:12,
color:"#6b7280"
},

actions:{
flexDirection:"row",
alignItems:"center"
},

actionBtn:{
backgroundColor:"#f3f4f6",
padding:8,
borderRadius:10,
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