import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import Screen from "../../components/Screen";


import { useRouter } from "expo-router";
import InstallationForm from "../../components/InstallationForm";
import FAQItem from "../../components/FAQItem";

export default function Home() {

  const router = useRouter();

  return (
   <Screen>
    <ScrollView style={styles.container}>

      {/* HERO */}

      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Go Solar & Save Money</Text>
        <Text style={styles.heroSubtitle}>
          Reduce electricity bills and use clean renewable energy.
        </Text>
      </View>


      {/* CALCULATOR TOOLS */}

      <Text style={styles.sectionTitle}>Solar Calculators</Text>

      <View style={styles.grid}>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/calculators/system-size")}
        >
          <Text style={styles.icon}>⚡</Text>
          <Text style={styles.cardTitle}>System Size</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/calculators/cost")}
        >
          <Text style={styles.icon}>💰</Text>
          <Text style={styles.cardTitle}>Installation Cost</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/calculators/subsidy")}
        >
          <Text style={styles.icon}>🏛</Text>
          <Text style={styles.cardTitle}>Subsidy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/calculators/roi")}
        >
          <Text style={styles.icon}>📊</Text>
          <Text style={styles.cardTitle}>ROI Payback</Text>
        </TouchableOpacity>

      </View>


      {/* INSTALLATION FORM */}

      <Text style={styles.sectionTitle}>Request Home Installation</Text>

      <InstallationForm />


      {/* FAQ */}

      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

<FAQItem
question="How much does a solar system cost?"
answer="A typical 3kW rooftop solar system costs around ₹1.5L to ₹2L before subsidy."
/>

<FAQItem
question="How much subsidy can I get?"
answer="Under PM Surya Ghar Yojana, homeowners can receive subsidy up to ₹78,000."
/>

<FAQItem
question="How long do solar panels last?"
answer="Most solar panels last 25–30 years with minimal maintenance."
/>

<FAQItem
question="Do solar panels work during cloudy weather?"
answer="Yes. Solar panels still generate electricity on cloudy days but at slightly lower efficiency."
/>

<FAQItem
question="How much electricity can a 3kW system produce?"
answer="A 3kW system can generate around 12–15 units per day depending on sunlight conditions."
/>

    </ScrollView>
    </Screen>
 
  );
}

const styles = StyleSheet.create({

  safeArea:{
    flex:1
  },

  container:{
    flex:1,
    backgroundColor:"#fff",
    padding:20
  },

  hero:{
    backgroundColor:"#16a34a",
    padding:25,
    borderRadius:16,
    marginBottom:25
  },

  heroTitle:{
    color:"#fff",
    fontSize:24,
    fontWeight:"bold"
  },

  heroSubtitle:{
    color:"#e5e5e5",
    marginTop:5
  },

  sectionTitle:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:12
  },

  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    marginBottom:25
  },

  card:{
    width:"48%",
    backgroundColor:"#f9fafb",
    padding:20,
    borderRadius:14,
    alignItems:"center",
    marginBottom:12
  },

  icon:{
    fontSize:28
  },

  cardTitle:{
    marginTop:5,
    fontWeight:"bold"
  }

});