import { View, Text, StyleSheet } from "react-native";
import KnowledgeCard from "../../components/KnowledgeCard";
import knowledgeData from "../../data/knowledge";
import Screen from "../../components/Screen";

export default function Knowledge() {

  return (
    <Screen>

      <View style={styles.container}>

        <Text style={styles.title}>Solar Knowledge</Text>

        <Text style={styles.subtitle}>
          Learn everything about solar and start saving on electricity bills.
        </Text>

        {knowledgeData.map((item) => (
          <KnowledgeCard key={item.id} item={item} />
        ))}

      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1
  },

  title:{
    fontSize:26,
    fontWeight:"bold",
    marginBottom:5
  },

  subtitle:{
    color:"#555",
    marginBottom:20
  }

});