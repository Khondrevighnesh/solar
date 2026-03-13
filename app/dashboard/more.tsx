import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Screen from "../../components/Screen";

export default function More() {
  return (
    <Screen>

      <Text style={styles.title}>More Options</Text>

      {/* ⭐ Menu Card */}
      <View style={styles.card}>

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

        

        {/* <MenuItem
          title="Settings"
          icon="settings-outline"
          screen="/dashboard/settings"
        />

        <MenuItem
          title="Help & Support"
          icon="call-outline"
          screen="/dashboard/support"
        /> */}

      </View>

      {/* ⭐ App Info */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Solar App</Text>
        <Text style={styles.infoText}>Version 1.0.0</Text>
        <Text style={styles.infoText}>Sustainify Energy Pvt Ltd</Text>
      </View>

    </Screen>
  );
}

function MenuItem({ title, icon, screen }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(screen)}
    >

      <View style={styles.row}>
        <Ionicons name={icon} size={22} color="#16a34a" />
        <Text style={styles.text}>{title}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:15
},

card:{
backgroundColor:"#fff",
borderRadius:16,
padding:5,
elevation:3
},

item:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
padding:16,
borderBottomWidth:1,
borderBottomColor:"#eee"
},

row:{
flexDirection:"row",
alignItems:"center",
gap:10
},

text:{
fontSize:16,
fontWeight:"500"
},

infoCard:{
backgroundColor:"#f3f4f6",
padding:18,
borderRadius:16,
marginTop:20,
alignItems:"center"
},

infoTitle:{
fontWeight:"bold",
fontSize:16
},

infoText:{
color:"#6b7280"
}

});