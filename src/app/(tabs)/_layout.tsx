import { FontAwesome } from "@expo/vector-icons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, Text } from "react-native";
import Home from "../../assets/icons/home.svg";
import Profile from "../../assets/icons/profile.svg";
import Bookings from "../../assets/icons/bookings.svg";
import Favorites from "../../assets/icons/favorite.svg";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: Platform.OS === "ios" && {
          backgroundColor: "transparent",
        },
        headerShown: false,
        tabBarActiveTintColor: "#1052BA",
        tabBarInactiveTintColor: "#020203",
      }}
      tabBar={(props) =>
        Platform.OS === "ios" ? (
          <BlurView
            style={{ position: "absolute", bottom: 10, left: 0, right: 0 }}
            intensity={95}
          >
            <BottomTabBar {...props} />
          </BlurView>
        ) : (
          <BottomTabBar {...props} />
        )
      }
    >
      <Tabs.Screen
        name="home"
        options={{
          href: "/home",
          title: "",

          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <Home  width={24} height={24} />
              <Text
                style={{
                  fontSize: 14,
                  color: color,
                  fontWeight: 700,
                  padding: 5,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          href: "/bookings",
          title: "",

          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <Bookings /* fill={color} */ width={24} height={24} />
              <Text
                style={{
                  fontSize: 14,
                  color: color,
                  fontWeight: 700,
                  padding: 5,
                }}
              >
                Bookings
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "",
          href: "/favorites",

          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <Favorites /* fill={color} */ width={24} height={24} />
              <Text
                style={{
                  fontSize: 14,
                  color: color,
                  fontWeight: 700,
                  padding: 5,
                }}
              >
                Favorites
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",

          href: "/profile",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <Profile /* fill={color} */ width={24} height={24} />
              <Text
                style={{
                  fontSize: 14,
                  color: color,
                  fontWeight: 700,
                  padding: 5,
                }}
              >
                My Account
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size?: number;
}) {
  return (
    <FontAwesome
      size={props.size || 26}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}
