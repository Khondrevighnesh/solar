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
          title:"Home",
          tabBarIcon:({color,size}) => (
            <Ionicons name="home" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          title:"Analytics",
          tabBarIcon:({color,size}) => (
            <Ionicons name="stats-chart" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="maintenance"
        options={{
          title:"Maintenance",
          tabBarIcon:({color,size}) => (
            <Ionicons name="construct" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title:"Profile",
          tabBarIcon:({color,size}) => (
            <Ionicons name="person" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title:"More",
          tabBarIcon:({color,size}) => (
            <Ionicons name="menu" size={size} color={color}/>
          )
        }}
      />
      {/* Hidden Screens */}
      <Tabs.Screen name="reports" options={{ href: null }} />
      <Tabs.Screen name="documents" options={{ href: null }} />
      <Tabs.Screen name="support" options={{ href: null }} />
      

    </Tabs>

  );
}