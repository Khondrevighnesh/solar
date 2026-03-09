import { View, Text, StyleSheet } from "react-native";

export default function GreetingCard({ name }: { name: string }) {

  const hour = new Date().getHours();
  let greeting = "Hello";

  if(hour < 12) greeting = "Good Morning";
  else if(hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{greeting}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#22c55e",
    padding:20,
    borderRadius:16
  },
  text:{
    color:"#fff",
    fontSize:18
  },
  name:{
    color:"#fff",
    fontSize:24,
    fontWeight:"bold"
  }
});