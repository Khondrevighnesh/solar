import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

export default function SubsidyCalculator() {

  const [systemSize, setSystemSize] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateSubsidy = () => {

    const size = parseFloat(systemSize);

    if (!size) {
      setResult({ error: "Please enter system size" });
      return;
    }

    let subsidy = 0;

    if (size <= 1) subsidy = 30000;
    else if (size <= 2) subsidy = 60000;
    else subsidy = 78000;

    setResult({
      size,
      subsidy
    });

  };

  return (
    <Screen>

      <View style={styles.container}>

        <Text style={styles.title}>Solar Subsidy Calculator</Text>

        <Text style={styles.subtitle}>
          Estimate government subsidy for rooftop solar under PM Surya Ghar Yojana.
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

          <TouchableOpacity style={styles.button} onPress={calculateSubsidy}>
            <Text style={styles.buttonText}>Calculate Subsidy</Text>
          </TouchableOpacity>

        </View>


        {/* RESULT */}

        {result && !result.error && (

          <View style={styles.resultCard}>

            <Text style={styles.resultTitle}>Estimated Government Subsidy</Text>

            <Text style={styles.resultItem}>
              System Size: {result.size} kW
            </Text>

            <Text style={styles.resultAmount}>
              ₹{result.subsidy.toLocaleString()}
            </Text>

            <Text style={styles.resultNote}>
              Maximum subsidy available under the rooftop solar scheme.
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