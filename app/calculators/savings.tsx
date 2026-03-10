import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

export default function Savings() {

  const [bill, setBill] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {

    const monthlyBill = parseFloat(bill);

    if (!monthlyBill) {
      setResult({ error: "Please enter your monthly electricity bill" });
      return;
    }

    const yearlyBill = monthlyBill * 12;

    const lifetimeSavings = yearlyBill * 25;

    setResult({
      yearlyBill,
      lifetimeSavings
    });

  };

  return (
    <Screen>

      <View style={styles.container}>

        <Text style={styles.title}>Solar Savings Calculator</Text>

        <Text style={styles.subtitle}>
          Estimate how much you can save by installing solar panels.
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
            <Text style={styles.buttonText}>Calculate Savings</Text>
          </TouchableOpacity>

        </View>


        {/* RESULT */}

        {result && !result.error && (

          <View style={styles.resultCard}>

            <Text style={styles.resultTitle}>Estimated Savings</Text>

            <Text style={styles.resultItem}>
              Yearly Electricity Cost: ₹{result.yearlyBill.toLocaleString()}
            </Text>

            <Text style={styles.resultAmount}>
              ₹{result.lifetimeSavings.toLocaleString()}
            </Text>

            <Text style={styles.resultNote}>
              Estimated lifetime savings over 25 years with rooftop solar.
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
backgroundColor:"#ffffff",
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
backgroundColor:"#ecfdf5",
padding:20,
borderRadius:14,
alignItems:"center"
},

resultTitle:{
fontWeight:"bold",
marginBottom:10
},

resultItem:{
fontSize:15,
marginBottom:5
},

resultAmount:{
fontSize:30,
fontWeight:"bold",
color:"#16a34a",
marginVertical:10
},

resultNote:{
fontSize:12,
color:"#777",
textAlign:"center"
},

error:{
marginTop:15,
color:"red"
}

});