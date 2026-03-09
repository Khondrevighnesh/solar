import { Pressable, Text, StyleSheet } from "react-native";

export default function CalculatorCard({ title }: { title: string }) {
  return (
    <Pressable style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#fde68a",
    padding:15,
    borderRadius:12,
    marginBottom:10
  },
  text:{
    fontSize:18,
    fontWeight:"600"
  }
});