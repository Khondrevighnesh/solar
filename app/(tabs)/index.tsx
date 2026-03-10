import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Screen from "../../components/Screen";
import { useRouter } from "expo-router";
import InstallationForm from "../../components/InstallationForm";
import FAQItem from "../../components/FAQItem";

export default function Home() {

  const router = useRouter();

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>

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


        {/* SAVINGS */}

        <Text style={styles.sectionTitle}>Example Solar Savings</Text>

        <View style={styles.savingsCard}>
          <Text style={styles.savingsText}>Before Solar: ₹4000/month</Text>
          <Text style={styles.savingsText}>After Solar: ₹500/month</Text>

          <Text style={styles.savingsHighlight}>
            Save ₹3500/month
          </Text>

          <Text style={styles.savingsSub}>
            ₹10,50,000 savings in 25 years
          </Text>
        </View>


        {/* INSTALLATION PROCESS */}

        <Text style={styles.sectionTitle}>How Solar Installation Works</Text>

        <View style={styles.processBox}>
          <Text style={styles.processText}>1️⃣ Free Site Survey</Text>
          <Text style={styles.processText}>2️⃣ Custom Solar Design</Text>
          <Text style={styles.processText}>3️⃣ Professional Installation</Text>
          <Text style={styles.processText}>4️⃣ Net Meter Approval</Text>
          <Text style={styles.processText}>5️⃣ Start Generating Power</Text>
        </View>


        {/* MODERN SOLAR IMPACT */}

        <Text style={styles.sectionTitle}>Our Solar Impact</Text>

        <Text style={styles.sectionSubtitle}>
          Powering homes across India with clean solar energy
        </Text>

        <View style={styles.impactGrid}>

          

          <View style={styles.impactCard}>
            <Text style={styles.impactIcon}>⚡</Text>
            <Text style={styles.impactNumber}>75 MW</Text>
            <Text style={styles.impactLabel}>Solar Installed</Text>
          </View>

          <View style={styles.impactCard}>
            <Text style={styles.impactIcon}>💰</Text>
            <Text style={styles.impactNumber}>₹8 Cr+</Text>
            <Text style={styles.impactLabel}>Electricity Saved</Text>
          </View>

          <View style={styles.impactCard}>
            <Text style={styles.impactIcon}>🌱</Text>
            <Text style={styles.impactNumber}>12,000</Text>
            <Text style={styles.impactLabel}>Tons CO₂ Reduced</Text>
          </View>

          <View style={styles.impactCard}>
            <Text style={styles.impactIcon}>☀️</Text>
            <Text style={styles.impactNumber}>120M</Text>
            <Text style={styles.impactLabel}>Units Generated</Text>
          </View>

         
        </View>


        {/* INSTALLATION FORM */}

        <Text style={styles.sectionTitle}>Request Home Installation</Text>

        <InstallationForm />


        {/* TESTIMONIALS */}

        <Text style={styles.sectionTitle}>What Our Customers Say</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:25}}>

          <View style={styles.testimonialCard}>
            <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.reviewText}>
              My electricity bill dropped from ₹4500 to ₹600 after installing solar.
            </Text>
            <Text style={styles.reviewUser}>Rajesh Patil</Text>
            <Text style={styles.reviewCity}>Pune</Text>
          </View>

          <View style={styles.testimonialCard}>
            <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.reviewText}>
              The installation process was smooth and professional.
            </Text>
            <Text style={styles.reviewUser}>Amit Sharma</Text>
            <Text style={styles.reviewCity}>Mumbai</Text>
          </View>

          <View style={styles.testimonialCard}>
            <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.reviewText}>
              Best investment for my house. Solar paid back in 4 years.
            </Text>
            <Text style={styles.reviewUser}>Sneha Kulkarni</Text>
            <Text style={styles.reviewCity}>Pune</Text>
          </View>

        </ScrollView>


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
},

savingsCard:{
backgroundColor:"#ecfdf5",
padding:18,
borderRadius:14,
marginBottom:25
},

savingsText:{
marginBottom:5
},

savingsHighlight:{
fontSize:18,
fontWeight:"bold",
color:"#16a34a",
marginTop:5
},

savingsSub:{
color:"#666",
marginTop:5
},

processBox:{
backgroundColor:"#f9fafb",
padding:15,
borderRadius:12,
marginBottom:25
},

processText:{
marginBottom:6
},

impactGrid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between",
marginBottom:25
},

impactCard:{
width:"48%",
backgroundColor:"#ffffff",
padding:18,
borderRadius:16,
marginBottom:14,
alignItems:"center",
shadowColor:"#000",
shadowOpacity:0.06,
shadowRadius:6,
elevation:3
},

impactIcon:{
fontSize:22,
marginBottom:6
},

impactNumber:{
fontSize:20,
fontWeight:"bold"
},

impactLabel:{
fontSize:12,
color:"#666",
textAlign:"center"
},

testimonialCard:{
width:260,
backgroundColor:"#ffffff",
padding:18,
borderRadius:16,
marginRight:15,
shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:8,
elevation:3
},

stars:{
fontSize:16,
marginBottom:6
},

reviewText:{
fontSize:14,
color:"#444",
marginBottom:10
},

reviewUser:{
fontWeight:"bold"
},

reviewCity:{
fontSize:12,
color:"#777"
}

});