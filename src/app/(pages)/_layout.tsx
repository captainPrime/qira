import { Stack, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="splash_screen"
        options={{
          headerTitle: "Splash",
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="create_account" options={{ headerShown: false }} />
      <Stack.Screen name="forgot_password" options={{ headerShown: false }} />
      <Stack.Screen name="building_details" options={{ headerShown: false }} />
      <Stack.Screen name="verification" options={{ headerShown: false }} />
      <Stack.Screen name="set_password" options={{ headerShown: false }} />
      <Stack.Screen
        name="personal_information"
        options={{ headerShown: true, headerTitle: "Personal Information" }}
        
      />
       <Stack.Screen
        name="change_password"
        options={{ headerShown: true , headerTitle: "Change Password" }}
        
      />
    </Stack>
  );
}
