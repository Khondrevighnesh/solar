import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#16a34a",
        tabBarInactiveTintColor: "#666",

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4
        },

        tabBarIconStyle: {
          marginTop: 4
        },

        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          elevation: 10,

          height: 85,          // bigger tab bar
          paddingBottom: 10,
          paddingTop: 8
        }
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={26} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="calculators"
        options={{
          title: "Calculators",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calculator" size={26} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="schemes"
        options={{
          title: "Schemes",
          tabBarIcon: ({ color }) => (
            <Ionicons name="leaf" size={26} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="knowledge"
        options={{
          title: "Knowledge",
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" size={26} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <Ionicons name="map" size={26} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={26} color={color} />
          )
        }}
      />

    </Tabs>
  );
}