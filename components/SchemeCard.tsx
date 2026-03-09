import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function SchemeCard({ scheme }: any) {

  const openLink = () => {
    Linking.openURL(scheme.link);
  };

  return (
    <View style={styles.card}>

      <Text style={styles.title}>{scheme.title}</Text>

      <Text style={styles.description}>
        {scheme.description}
      </Text>

      <TouchableOpacity style={styles.button} onPress={openLink}>
        <Text style={styles.buttonText}>Apply Now</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  card:{
    backgroundColor:"#f9fafb",
    padding:18,
    borderRadius:14,
    marginBottom:15
  },

  title:{
    fontSize:18,
    fontWeight:"bold"
  },

  description:{
    marginTop:6,
    color:"#555",
    marginBottom:12
  },

  button:{
    backgroundColor:"#16a34a",
    padding:10,
    borderRadius:10,
    alignItems:"center"
  },

  buttonText:{
    color:"#fff",
    fontWeight:"bold"
  }

});