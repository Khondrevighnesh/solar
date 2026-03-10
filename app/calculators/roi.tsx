import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

export default function ROICalculator() {

  const [systemSize, setSystemSize] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateROI = () => {

    const size = parseFloat(systemSize);

    if (!size) {
      setResult({ error: "Please enter system size" });
      return;
    }

    const cost = size * 50000;

    const yearlySavings = size * 1500 * 12;

    const payback = cost / yearlySavings;

    setResult({
      cost,
      yearlySavings,
      payback
    });

  };

  return (
    <Screen>

      <View style={styles.container}>

        <Text style={styles.title}>ROI Payback Calculator</Text>

        <Text style={styles.subtitle}>
          Calculate how many years it takes to recover your solar investment.
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

          <TouchableOpacity style={styles.button} onPress={calculateROI}>
            <Text style={styles.buttonText}>Calculate ROI</Text>
          </TouchableOpacity>

        </View>


        {/* RESULT */}

        {result && !result.error && (

          <View style={styles.resultCard}>

            <Text style={styles.resultTitle}>Solar Investment Summary</Text>

            <Text style={styles.resultItem}>
              Installation Cost: ₹{result.cost.toLocaleString()}
            </Text>

            <Text style={styles.resultItem}>
              Yearly Savings: ₹{result.yearlySavings.toLocaleString()}
            </Text>

            <Text style={styles.resultPayback}>
              Payback Period: {result.payback.toFixed(1)} Years
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
borderRadius:14
},

resultTitle:{
fontWeight:"bold",
fontSize:16,
marginBottom:10
},

resultItem:{
fontSize:15,
marginBottom:5
},

resultPayback:{
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