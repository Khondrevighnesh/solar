import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import Screen from "../../components/Screen";
import { useRouter } from "expo-router";
import InstallationForm from "../../components/InstallationForm";
import FAQItem from "../../components/FAQItem";

export default function Home() {

  const router = useRouter();

  const [location, setLocation] = useState("Fetching location...");
  const userName = "Vighnesh";

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 18) return "Good Afternoon 🌤";
    return "Good Evening 🌙";
  };

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  useEffect(() => {

    const getLocation = async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setLocation("Location unavailable");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});

      const address = await Location.reverseGeocodeAsync(loc.coords);

      if (address.length > 0) {
        const city = address[0].city;
        const region = address[0].region;

        setLocation(`${city}, ${region}`);
      }

    };

    getLocation();

  }, []);

  return (
    <Screen>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* MODERN HEADER */}

        <View style={styles.headerCard}>

          <Text style={styles.greeting}>
            {getGreeting()}
          </Text>

          <Text style={styles.userName}>
            {userName}
          </Text>

          <View style={styles.metaRow}>
            <Text style={styles.metaText}>📍 {location}</Text>
            <Text style={styles.metaDot}>•</Text>
            <Text style={styles.metaText}>{today}</Text>
          </View>

        </View>


        {/* HERO */}

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Go Solar & Save Money</Text>

          <Text style={styles.heroSubtitle}>
            Reduce electricity bills and generate clean renewable energy.
          </Text>

          <TouchableOpacity
            style={styles.heroButton}
            onPress={() => router.push("/calculators/roi")}
          >
            <Text style={styles.heroButtonText}>Check Solar Savings</Text>
          </TouchableOpacity>
        </View>


        {/* CALCULATORS */}

        <Text style={styles.sectionTitle}>Solar Calculators</Text>

        <Text style={styles.sectionSubtitle}>
          Estimate solar system size, cost, subsidy and savings.
        </Text>

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


        {/* BENEFITS */}

        <Text style={styles.sectionTitle}>Why Install Solar?</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>💰 Save up to 90% on electricity bills</Text>
          <Text style={styles.infoText}>⚡ Energy independence</Text>
          <Text style={styles.infoText}>🌱 Clean renewable energy</Text>
          <Text style={styles.infoText}>🏛 Government subsidy available</Text>
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

      </ScrollView>

    </Screen>
  );
}

const styles = StyleSheet.create({

headerCard:{
backgroundColor:"#f9fafb",
padding:20,
borderRadius:18,
marginBottom:20,
shadowColor:"#e0b4b412",
shadowOpacity:0.06,
shadowRadius:10,
elevation:4
},

greeting:{
fontSize:18,
color:"#16a34a",
fontWeight:"600"
},

userName:{
fontSize:26,
fontWeight:"bold",
marginTop:4
},

metaRow:{
flexDirection:"row",
alignItems:"center",
marginTop:6
},

metaText:{
color:"#6b7280",
fontSize:13
},

metaDot:{
marginHorizontal:6,
color:"#9ca3af"
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

heroButton:{
marginTop:15,
backgroundColor:"#fff",
padding:12,
borderRadius:10,
alignItems:"center"
},

heroButtonText:{
color:"#16a34a",
fontWeight:"bold"
},

sectionTitle:{
fontSize:20,
fontWeight:"bold",
marginBottom:10
},

sectionSubtitle:{
color:"#666",
marginBottom:15
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
},

infoBox:{
backgroundColor:"#f3f4f6",
padding:15,
borderRadius:12,
marginBottom:25
},

infoText:{
marginBottom:6
}

});