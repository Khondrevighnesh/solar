import { View, Text, StyleSheet } from "react-native";

export default function SubsidyCard({ power, amount }: any) {

  return (
    <View style={styles.card}>

      <Text style={styles.power}>{power}</Text>

      <Text style={styles.amount}>{amount}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card:{
    backgroundColor:"#f9fafb",
    padding:18,
    width:"48%",
    borderRadius:14,
    alignItems:"center",
    shadowColor:"#000",
    shadowOpacity:0.05,
    shadowRadius:4,
    elevation:2
  },

  power:{
    fontSize:16,
    fontWeight:"bold"
  },

  amount:{
    fontSize:18,
    color:"#16a34a",
    marginTop:5,
    fontWeight:"bold"
  }

});