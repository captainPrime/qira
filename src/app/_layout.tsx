import { Stack, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(pages)" options={{ headerShown: false }} />
    </Stack>
  );
}
