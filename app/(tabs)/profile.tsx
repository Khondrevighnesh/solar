import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import ProfileOption from "../../components/ProfileOption";
import Screen from "../../components/Screen";

export default function Profile() {

  return (
    <Screen>

      <View style={styles.container}>

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

          <ProfileOption
            title="My Solar Calculations"
            icon="📊"
            onPress={() => router.push("/calculators")}
          />

          <ProfileOption
            title="Saved Schemes"
            icon="🏛"
            onPress={() => router.push("/schemes")}
          />

          <ProfileOption
            title="Installation Requests"
            icon="🔧"
            onPress={() => router.push("/installation")}
          />

          <ProfileOption
            title="My Subsidy Applications"
            icon="💰"
          />

        </View>


        <View style={styles.section}>

          <ProfileOption title="Notifications" icon="🔔" />

          <ProfileOption title="Help & Support" icon="❓" />

          <ProfileOption title="About App" icon="ℹ️" />

          <ProfileOption title="Logout" icon="🚪" />

        </View>

      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1
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