import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function FAQItem({ question, answer }: any) {

  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.header}
        onPress={() => setOpen(!open)}
      >
        <Text style={styles.question}>{question}</Text>

        <Text style={styles.icon}>
          {open ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.answerBox}>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eeeeee",
    overflow: "hidden"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16
  },

  question: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1
  },

  icon: {
    fontSize: 16,
    color: "#16a34a"
  },

  answerBox: {
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
    padding: 16,
    backgroundColor: "#fafafa"
  },

  answer: {
    color: "#555",
    lineHeight: 22
  }

});