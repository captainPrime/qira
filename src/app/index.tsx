import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

export default function Page() {
  useEffect(async () => {
    const token = await AsyncStorage.getItem("authToken");

    console.log(token, "your mama");
  }, []);

  return <Redirect href="/home" />;
}
