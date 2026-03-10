import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet } from "react-native";

export default function Screen({ children }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  container: {
   paddingTop: 10,
  
}
});