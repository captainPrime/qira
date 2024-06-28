import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { VCButtonStyle } from "../assets/styles/vc_button.style";

import VCText from "./VCText";

interface VCButtonProps {
  label?: string;

  color?: "primary" | "small" | "light" | "secondary";

  handleOnPress?: Function;
  isDisabled?: boolean;
  style?: object;
  back?: boolean;
}

function VCButton(props: VCButtonProps) {
  const {
    label,

    color,
    handleOnPress,
    style,

    isDisabled = false,
  } = props;

  let buttonStyle = {};
  let buttonColorStyle = {};

  let buttonTextColorStyle = {};

  switch (color) {
    case "primary":
      buttonColorStyle = VCButtonStyle.primary_button_background_color_style;
      buttonTextColorStyle = VCButtonStyle.primary_button_text_color_style;

      break;

    case "small":
      buttonColorStyle = VCButtonStyle.small_button_style;
      buttonTextColorStyle = VCButtonStyle.small_button_text_color_style;

      break;

    case "secondary":
      buttonColorStyle = VCButtonStyle.sec_button_style;
      buttonTextColorStyle = VCButtonStyle.light_button_text_color_style;

      break;

    case "light":
      buttonColorStyle = VCButtonStyle.light_button_style;
      buttonTextColorStyle = VCButtonStyle.light_button_text_color_style;

      break;

    default:
      buttonColorStyle = VCButtonStyle.primary_button_background_color_style;
      buttonTextColorStyle = VCButtonStyle.primary_button_text_color_style;

      break;
  }

  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[buttonStyle, buttonColorStyle, style]}
      onPress={() => handleOnPress?.()}
    >
      <View>
        <VCText text={label} style={buttonTextColorStyle} />
      </View>
    </TouchableOpacity>
  );
}

VCButton.defaultProps = {
  title: "Button",
  onPress: () => console.log(),
};

export default VCButton;
