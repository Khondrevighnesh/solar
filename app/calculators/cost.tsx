import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function CostCalculator() {

  const [systemSize, setSystemSize] = useState("");
  const [result, setResult] = useState("");

  const calculateCost = () => {
    const size = parseFloat(systemSize);

    if (!size) {
      setResult("Enter system size");
      return;
    }

    const cost = size * 50000;

    setResult(`Estimated Installation Cost: ₹${cost}`);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Installation Cost Calculator</Text>

      <TextInput
        placeholder="Enter System Size (kW)"
        style={styles.input}
        keyboardType="numeric"
        value={systemSize}
        onChangeText={setSystemSize}
      />

      <Button title="Calculate Cost" onPress={calculateCost} />

      <Text style={styles.result}>{result}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  title:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:20
  },
  input:{
    borderWidth:1,
    borderColor:"#ddd",
    padding:10,
    borderRadius:8,
    marginBottom:20
  },
  result:{
    marginTop:20,
    fontSize:18,
    fontWeight:"bold"
  }
});