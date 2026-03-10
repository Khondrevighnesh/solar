import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProfileOption from "../../components/ProfileOption";
import Screen from "@/components/Screen";

export default function Profile() {

  return (
    <Screen>
    <ScrollView style={styles.container}>

      {/* USER INFO */}

      <View style={styles.profileBox}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>U</Text>
        </View>

        <Text style={styles.name}>User Name</Text>
        <Text style={styles.email}>user@email.com</Text>
      </View>


      {/* OPTIONS */}

      <View style={styles.section}>

        <ProfileOption title="My Solar Calculations" icon="📊" />
        <ProfileOption title="Saved Schemes" icon="🏛" />
        <ProfileOption title="Installation Requests" icon="🔧" />
        <ProfileOption title="My Subsidy Applications" icon="💰" />

      </View>


      <View style={styles.section}>

        <ProfileOption title="Notifications" icon="🔔" />
        <ProfileOption title="Help & Support" icon="❓" />
        <ProfileOption title="About App" icon="ℹ️" />
        <ProfileOption title="Logout" icon="🚪" />

      </View>

    </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#ffffff",
    padding:20
  },

  profileBox:{
    alignItems:"center",
    marginBottom:30
  },

  avatar:{
    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:"#16a34a",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },

  avatarText:{
    color:"#fff",
    fontSize:28,
    fontWeight:"bold"
  },

  name:{
    fontSize:20,
    fontWeight:"bold"
  },

  email:{
    color:"#666",
    marginTop:3
  },

  section:{
    marginBottom:25
  }

});