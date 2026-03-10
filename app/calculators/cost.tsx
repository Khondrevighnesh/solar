import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

export default function CostCalculator() {

  const [systemSize, setSystemSize] = useState("");
  const [result, setResult] = useState("");

  const calculateCost = () => {

    const size = parseFloat(systemSize);

    if (!size) {
      setResult("Please enter system size");
      return;
    }

    const cost = size * 50000;

    setResult(`₹${cost.toLocaleString()}`);
  };

  return (
    <Screen>

      <View style={styles.container}>

        <Text style={styles.title}>Installation Cost Calculator</Text>

        <Text style={styles.subtitle}>
          Estimate the total cost of installing a rooftop solar system.
        </Text>

        {/* INPUT CARD */}

        <View style={styles.card}>

          <Text style={styles.label}>System Size (kW)</Text>

          <TextInput
            placeholder="Example: 3"
            style={styles.input}
            keyboardType="numeric"
            value={systemSize}
            onChangeText={setSystemSize}
          />

          <TouchableOpacity style={styles.button} onPress={calculateCost}>
            <Text style={styles.buttonText}>Calculate Cost</Text>
          </TouchableOpacity>

        </View>


        {/* RESULT */}

        {result !== "" && (

          <View style={styles.resultCard}>

            <Text style={styles.resultTitle}>Estimated Cost</Text>

            <Text style={styles.resultAmount}>{result}</Text>

            <Text style={styles.resultNote}>
              *Approximate price based on ₹50,000 per kW system.
            </Text>

          </View>

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
color:"#666",
marginBottom:5
},

resultAmount:{
fontSize:28,
fontWeight:"bold",
color:"#16a34a"
},

resultNote:{
marginTop:5,
fontSize:12,
color:"#777",
textAlign:"center"
}

});