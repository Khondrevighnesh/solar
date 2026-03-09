import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function SubsidyCalculator() {

  const [systemSize, setSystemSize] = useState("");
  const [result, setResult] = useState("");

  const calculateSubsidy = () => {

    const size = parseFloat(systemSize);

    if (!size) {
      setResult("Enter system size");
      return;
    }

    let subsidy = 0;

    if (size <= 1) subsidy = 30000;
    else if (size <= 2) subsidy = 60000;
    else subsidy = 78000;

    setResult(`Government Subsidy: ₹${subsidy}`);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Solar Subsidy Calculator</Text>

      <TextInput
        placeholder="Enter System Size (kW)"
        style={styles.input}
        keyboardType="numeric"
        value={systemSize}
        onChangeText={setSystemSize}
      />

      <Button title="Calculate Subsidy" onPress={calculateSubsidy} />

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
    marginBottom:20
  },
  result:{
    marginTop:20,
    fontSize:18,
    fontWeight:"bold"
  }
});