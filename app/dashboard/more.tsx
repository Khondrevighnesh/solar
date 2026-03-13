import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function More() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>More Options</Text>

      <MenuItem title="Reports" screen="/dashboard/reports" />
      <MenuItem title="Documents" screen="/dashboard/documents" />
      
      
     

    </View>
  );
}

function MenuItem({ title, screen }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(screen)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  item: {
    padding: 15,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
  },
});