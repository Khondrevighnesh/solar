import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function KnowledgeCard({ item }: any) {

  const openArticle = () => {
    Alert.alert(item.title, item.content);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={openArticle}>

      <Text style={styles.icon}>{item.icon}</Text>

      <View style={styles.textBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    flexDirection: "row",
    backgroundColor: "#f9fafb",
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: "center"
  },

  icon: {
    fontSize: 30,
    marginRight: 15
  },

  textBox: {
    flex: 1
  },

  title: {
    fontSize: 16,
    fontWeight: "bold"
  },

  description: {
    color: "#666",
    marginTop: 3
  }

});