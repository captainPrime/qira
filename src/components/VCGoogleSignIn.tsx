import React from "react";
import { TouchableOpacity, View } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import GoogleIcon from "../assets/icons/google.svg";
import VCButton from "./VCButton";
import VCText from "./VCText";
import { PersonalInformationStyle } from "../app/(auth)/login_nav";

export default function VCGoogleSignIn() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      // You can now use the id_token to authenticate with your backend
    }
  }, [response]);

  return (
    <TouchableOpacity
      onPress={() => {
        promptAsync();
      }}
    >
      <View style={PersonalInformationStyle.status_container}>
        <GoogleIcon
          width={24}
          height={24}
          style={{ marginRight: 15 }}
          color="red"
        />
        <VCText type="bold" text="Sign Up with Google" />
      </View>
    </TouchableOpacity>
  );
}
