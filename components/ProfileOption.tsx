import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileOption({ title, icon }: any) {

  return (
    <TouchableOpacity style={styles.option}>

      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  option:{
    flexDirection:"row",
    alignItems:"center",
    padding:15,
    backgroundColor:"#f9fafb",
    borderRadius:12,
    marginBottom:10
  },

  icon:{
    fontSize:22,
    marginRight:12
  },

  title:{
    fontSize:16
  }

});