import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import InstallationForm from "../../components/InstallationForm";
import FAQItem from "../../components/FAQItem";

export default function Home() {

  const router = useRouter();

  return (
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
        question="How much does solar cost?"
        answer="A typical 3kW solar system costs around ₹1.5L to ₹2L before subsidy."
      />

      <FAQItem
        question="How much subsidy is available?"
        answer="The government provides up to ₹78,000 subsidy under PM Surya Ghar scheme."
      />

      <FAQItem
        question="How long do solar panels last?"
        answer="Solar panels usually last 25 years with very little maintenance."
      />

      <FAQItem
        question="Will solar work during cloudy weather?"
        answer="Yes, solar panels still produce electricity even during cloudy days."
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

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