import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Screen from "../../components/Screen";


export default function Calculators() {

  const calculators = [
    { name: "Solar System Size", route: "/calculators/system-size" },
    { name: "Solar Savings", route: "/calculators/savings" },
    { name: "Installation Cost", route: "/calculators/cost" },
    { name: "Subsidy Calculator", route: "/calculators/subsidy" },
    { name: "ROI Payback", route: "/calculators/roi" },
  ];

  return (
    <Screen>
    <View style={styles.container}>

      <Text style={styles.title}>Solar Calculators</Text>

      {calculators.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => router.push(item.route)}
        >
          <Text style={styles.cardText}>{item.name}</Text>
        </TouchableOpacity>
      ))}

    </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff"
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },

  card:{
    backgroundColor:"#f3f4f6",
    padding:18,
    borderRadius:12,
    marginBottom:12
  },

  cardText:{
    fontSize:18,
    fontWeight:"600"
  }
});