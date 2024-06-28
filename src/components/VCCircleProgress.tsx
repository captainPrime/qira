import React from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const VCCircleProgress = ({ percentage, color1, color2 }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AnimatedCircularProgress
        size={40}
        width={10}
        fill={percentage}
        tintColor={color2}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor={color1}
      ></AnimatedCircularProgress>
    </View>
  );
};

export default VCCircleProgress;
