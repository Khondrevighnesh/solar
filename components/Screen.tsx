import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet } from "react-native";

export default function Screen({ children }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea:{
    flex:1,
    backgroundColor:"#ffffff"
  },

  scroll:{
    flex:1
  },

  container:{
    paddingHorizontal:16,   // space from left & right
    paddingTop:10,          // space from status bar
    paddingBottom:20
  }

});