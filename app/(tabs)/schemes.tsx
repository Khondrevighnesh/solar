import { View, Text, ScrollView, StyleSheet } from "react-native";
import SchemeCard from "../../components/SchemeCard";
import SubsidyCard from "../../components/SubsidyCard";
import schemes from "../../data/schemes";
import Screen from "../../components/Screen";


export default function Schemes() {

  return (
    <Screen>
    <ScrollView style={styles.container}>

      {/* HERO SECTION */}

      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Solar Government Schemes</Text>
        <Text style={styles.heroSubtitle}>
          Save money with government solar subsidies and install rooftop solar easily.
        </Text>
      </View>


      {/* SUBSIDY HIGHLIGHTS */}

      <Text style={styles.sectionTitle}>Subsidy Highlights</Text>

      <View style={styles.row}>
        <SubsidyCard power="1 kW" amount="₹30,000" />
        <SubsidyCard power="2 kW" amount="₹60,000" />
      </View>

      <View style={styles.row}>
        <SubsidyCard power="3 kW" amount="₹78,000" />
        <SubsidyCard power="Above 3kW" amount="₹78,000 Max" />
      </View>


      {/* SCHEMES LIST */}

      <Text style={styles.sectionTitle}>Available Schemes</Text>

      {schemes.map((item) => (
        <SchemeCard key={item.id} scheme={item} />
      ))}


      {/* ELIGIBILITY */}

      <Text style={styles.sectionTitle}>Eligibility</Text>

      <View style={styles.eligibilityBox}>
        <Text style={styles.eligibilityText}>• Must be Indian resident</Text>
        <Text style={styles.eligibilityText}>• Residential electricity connection</Text>
        <Text style={styles.eligibilityText}>• Rooftop space available</Text>
        <Text style={styles.eligibilityText}>• Apply via MNRE portal</Text>
      </View>

    </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff"
  },

  hero:{
    backgroundColor:"#16a34a",
    padding:25,
    borderRadius:18,
    marginBottom:25
  },

  heroTitle:{
    color:"#fff",
    fontSize:22,
    fontWeight:"bold"
  },

  heroSubtitle:{
    color:"#e5e5e5",
    marginTop:8
  },

  sectionTitle:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:12
  },

  eligibilityBox:{
    backgroundColor:"#f3f4f6",
    padding:15,
    borderRadius:12
  },

  eligibilityText:{
    marginBottom:6
  }

});