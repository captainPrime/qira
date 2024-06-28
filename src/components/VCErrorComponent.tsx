import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import VCText from "./VCText";

interface VCErrorComponentProps {
  message: string;
}

function VCErrorComponent(props: VCErrorComponentProps) {
  const { message } = props;

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1 }}>
        <VCText
          size="normal"
          text={message}
          style={SFErrorComponentStyle.text_style}
        />
      </View>
    </View>
  );
}

const SFErrorComponentStyle = StyleSheet.create({
  icon_style: {
    color: "red",
    marginRight: 8,
    fontSize: 17,
  },

  text_style: {
    color: "red",
    fontSize: 14,
  },
});

export default VCErrorComponent;
