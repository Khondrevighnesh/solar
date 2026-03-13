import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (

    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#16a34a",
        tabBarInactiveTintColor:"#666",
        tabBarStyle:{
          height:70,
          paddingBottom:10
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
      
      

    </Tabs>

  );
}