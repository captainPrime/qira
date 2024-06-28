import React, { useCallback, useRef } from "react";

import {
  View,
  Platform,
  StyleSheet,
  PanResponder,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";

interface VCLayoutProps {
  style?: object;
  children: React.ReactNode;
  scrollable: Boolean;
  canTimeout?: Boolean;
  useSafeArea?: Boolean;
}

function VCLayout(props: VCLayoutProps) {
  const { style, children, canTimeout = true, useSafeArea } = props;

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <SafeAreaView>
          <ImageBackground
            source={require("../assets/icons/bg.png")}
            style={{ resizeMode: "cover" }}
          >
            <View style={useSafeArea ? styles.space : ""}>{children}</View>
          </ImageBackground>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  space: {
    paddingHorizontal: 20,
  },
});

VCLayout.defaultProps = {
  useSafeArea: false,
  scrollable: false,
  canTimeout: true,
};

export default VCLayout;
