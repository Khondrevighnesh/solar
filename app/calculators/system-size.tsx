import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function SystemSize() {

  const [bill,setBill] = useState("");
  const [result,setResult] = useState("");

  const calculate = () => {
    const value = parseFloat(bill);

    const size = value / 1000;

    setResult(`${size.toFixed(2)} kW Solar System Required`);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Solar System Size</Text>

      <TextInput
        placeholder="Monthly Electricity Bill ₹"
        value={bill}
        onChangeText={setBill}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button title="Calculate" onPress={calculate} />

      <Text style={styles.result}>{result}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  title:{ fontSize:22, fontWeight:"bold", marginBottom:20 },
  input:{
    borderWidth:1,
    borderColor:"#ddd",
    padding:10,
    borderRadius:8,
    marginBottom:15
  },
  result:{
    marginTop:20,
    fontSize:18,
    fontWeight:"bold"
  }
});