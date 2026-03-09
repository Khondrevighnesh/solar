import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Savings() {

  const [bill,setBill] = useState("");
  const [result,setResult] = useState("");

  const calculate = () => {

    const savings = parseFloat(bill) * 12 * 25;

    setResult(`₹${savings} Lifetime Savings`);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Solar Savings</Text>

      <TextInput
        placeholder="Monthly Bill ₹"
        value={bill}
        onChangeText={setBill}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button title="Calculate" onPress={calculate}/>

      <Text style={styles.result}>{result}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  title:{ fontSize:22, fontWeight:"bold", marginBottom:20 },
  input:{ borderWidth:1,padding:10,borderRadius:8,marginBottom:15 },
  result:{ marginTop:20,fontSize:18,fontWeight:"bold" }
});