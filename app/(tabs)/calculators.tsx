import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Screen from "../../components/Screen";

export default function Calculators() {

  const calculators = [
    { name: "Solar System Size", route: "/calculators/system-size", icon:"⚡" },
    { name: "Solar Savings", route: "/calculators/savings", icon:"💡" },
    { name: "Installation Cost", route: "/calculators/cost", icon:"💰" },
    { name: "Subsidy Calculator", route: "/calculators/subsidy", icon:"🏛" },
    { name: "ROI Payback", route: "/calculators/roi", icon:"📊" },
  ];

  return (
    <Screen>

      {/* TITLE */}

      <Text style={styles.title}>Solar Calculators</Text>

      <Text style={styles.subtitle}>
        Use these tools to estimate your solar system size,
        installation cost, subsidy, and long-term savings.
      </Text>


      {/* CALCULATOR LIST */}

      {calculators.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => router.push(item.route)}
        >

          <Text style={styles.icon}>{item.icon}</Text>

          <Text style={styles.cardText}>{item.name}</Text>

        </TouchableOpacity>
      ))}


      {/* SAVINGS HIGHLIGHT */}

      <View style={styles.highlightCard}>
        <Text style={styles.highlightTitle}>Average Solar Savings</Text>

        <Text style={styles.highlightText}>
          A typical 3kW rooftop solar system can save around
          ₹3000 – ₹4000 every month on electricity bills.
        </Text>
      </View>


      {/* HOW CALCULATORS HELP */}

      <Text style={styles.sectionTitle}>How These Calculators Help</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>⚡ Estimate solar system size</Text>
        <Text style={styles.infoText}>💰 Calculate installation cost</Text>
        <Text style={styles.infoText}>🏛 Check government subsidy</Text>
        <Text style={styles.infoText}>📊 Understand ROI & payback</Text>
      </View>


      {/* SOLAR TIPS */}

      <Text style={styles.sectionTitle}>Solar Tips</Text>

      <View style={styles.tipCard}>
        <Text style={styles.tipText}>
          South-facing roofs generate the highest solar power.
        </Text>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipText}>
          Cleaning solar panels every 15–20 days improves efficiency.
        </Text>
      </View>


      
    </Screen>
  );
}


const styles = StyleSheet.create({

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:8
  },

  subtitle:{
    color:"#666",
    marginBottom:20,
    lineHeight:20
  },

  card:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#f3f4f6",
    padding:18,
    borderRadius:12,
    marginBottom:12
  },

  icon:{
    fontSize:22,
    marginRight:12
  },

  cardText:{
    fontSize:17,
    fontWeight:"600"
  },

  highlightCard:{
    backgroundColor:"#ecfdf5",
    padding:18,
    borderRadius:14,
    marginTop:20,
    marginBottom:20
  },

  highlightTitle:{
    fontWeight:"bold",
    marginBottom:6
  },

  highlightText:{
    color:"#444"
  },

  sectionTitle:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:10
  },

  infoCard:{
    backgroundColor:"#f9fafb",
    padding:18,
    borderRadius:14,
    marginBottom:20
  },

  infoText:{
    marginBottom:6
  },

  tipCard:{
    backgroundColor:"#fff7ed",
    padding:16,
    borderRadius:12,
    marginBottom:10
  },

  tipText:{
    color:"#444"
  },

  ctaButton:{
    backgroundColor:"#16a34a",
    padding:16,
    borderRadius:12,
    alignItems:"center",
    marginTop:15
  },

  ctaText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:16
  }

});