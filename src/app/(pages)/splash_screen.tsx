import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";

import { router } from "expo-router";
import VCText from "../../components/VCText";
import { LOGO } from "../../helper/images";

const SplashScreen = () => {
  const [hidePassword, setHidePassword]: any = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      router.navigate("login");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image style={{ width: 164, height: 76 }} source={LOGO} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    margin: "auto",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  concierge: {
    fontSize: 48,
    color: "white",
    lineHeight: 48.7,
    textAlign: "center",
    fontWeight: "500",
  },
  small: {
    fontSize: 16,
    color: "white",
    lineHeight: 19.36,
    textAlign: "center",
    fontWeight: "400",
  },
  medium: {
    fontSize: 25,
    color: "white",
    lineHeight: 31.62,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "500",
  },
});

export default SplashScreen;
