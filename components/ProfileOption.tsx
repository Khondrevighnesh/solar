import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileOption({ title, icon, onPress }) {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>

      <View style={styles.left}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>

    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({

container:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:16,
backgroundColor:"#fff",
borderRadius:10,
marginBottom:10,
elevation:2
},

left:{
flexDirection:"row",
alignItems:"center"
},

icon:{
fontSize:18,
marginRight:10
},

title:{
fontSize:16
},

arrow:{
fontSize:20,
color:"#888"
}

});