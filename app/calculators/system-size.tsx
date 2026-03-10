import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

export default function SystemSize() {

  const [bill, setBill] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {

    const value = parseFloat(bill);

    if (!value) {
      setResult({ error: "Please enter your monthly bill" });
      return;
    }

    // Estimate solar system size
    const size = value / 1000;

    // Estimated generation
    const generation = size * 120;

    // Installation cost
    const cost = size * 50000;

    // Subsidy
    let subsidy = 0;
    if (size <= 1) subsidy = 30000;
    else if (size <= 2) subsidy = 60000;
    else subsidy = 78000;

    const finalCost = cost - subsidy;

    setResult({
      size,
      generation,
      cost,
      subsidy,
      finalCost
    });

  };

  return (
    <Screen>

      <View style={styles.container}>

        <Text style={styles.title}>Solar System Size Calculator</Text>

        <Text style={styles.subtitle}>
          Enter your monthly electricity bill to estimate the ideal solar system.
        </Text>

        {/* INPUT CARD */}

        <View style={styles.card}>

          <Text style={styles.label}>Monthly Electricity Bill (₹)</Text>

          <TextInput
            placeholder="Example: 3000"
            value={bill}
            onChangeText={setBill}
            style={styles.input}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={calculate}>
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>

        </View>


        {/* RESULT */}

        {result && !result.error && (

          <View style={styles.resultCard}>

            <Text style={styles.resultTitle}>Recommended Solar System</Text>

            <Text style={styles.resultItem}>
              System Size: {result.size.toFixed(2)} kW
            </Text>

            <Text style={styles.resultItem}>
              Monthly Generation: {result.generation.toFixed(0)} Units
            </Text>

            <Text style={styles.resultItem}>
              Installation Cost: ₹{result.cost.toLocaleString()}
            </Text>

            <Text style={styles.resultItem}>
              Government Subsidy: ₹{result.subsidy.toLocaleString()}
            </Text>

            <Text style={styles.finalCost}>
              Final Cost: ₹{result.finalCost.toLocaleString()}
            </Text>

          </View>

        )}

        {result?.error && (
          <Text style={styles.error}>{result.error}</Text>
        )}

      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:5
},

subtitle:{
color:"#666",
marginBottom:25
},

card:{
backgroundColor:"#fff",
padding:20,
borderRadius:14,
shadowColor:"#000",
shadowOpacity:0.05,
shadowRadius:6,
elevation:3
},

label:{
fontWeight:"600",
marginBottom:6
},

input:{
borderWidth:1,
borderColor:"#e5e7eb",
padding:12,
borderRadius:10,
marginBottom:15
},

button:{
backgroundColor:"#16a34a",
padding:14,
borderRadius:10,
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold"
},

resultCard:{
marginTop:25,
backgroundColor:"#f9fafb",
padding:20,
borderRadius:14
},

resultTitle:{
fontWeight:"bold",
marginBottom:12
},

resultItem:{
marginBottom:6,
fontSize:15
},

finalCost:{
marginTop:10,
fontSize:18,
fontWeight:"bold",
color:"#16a34a"
},

error:{
marginTop:15,
color:"red"
}

});