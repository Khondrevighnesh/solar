import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: "#16a34a",
    tabBarInactiveTintColor: "#666",
    tabBarStyle: {
      backgroundColor: "#ffffff",
      borderTopWidth: 0,
      elevation: 0,
      height: 65,
      paddingBottom: 8,
      paddingTop: 6
    }
  }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="calculators"
        options={{
          title: "Calculators",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="schemes"
        options={{
          title: "Schemes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="leaf" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="knowledge"
        options={{
          title: "Knowledge",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          )
        }}
      />

    </Tabs>
  );
}