// Layout específico do grupo de rotas (tabs)

import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute"
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="player/player"
        options={{
          title: "Jogadores",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.3.fill" color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="difficulty/difficulty"
        options={{
          title: "Dificuldade",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="speedometer" color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="scoreboard/scoreboard"
        options={{
          title: "Placar",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="list.number" color={color} />
          )
        }}
      />
    </Tabs>
  );
}
