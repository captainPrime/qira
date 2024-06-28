/* eslint-disable no-fallthrough */

import { VCTextStyle } from "../assets/styles/vc_text.style";
import React from "react";
import { Text, TextProps } from "react-native";

function VCText(props: any) {
  const { text, style, type, color, align, ...rest } = props;

  let textTypeStyle = {};
  let colorStyle = {}; // New variable for color styles
  let alignTextStyle = {};

  switch (type) {
    case "light":
      textTypeStyle = VCTextStyle.textLightStyle;
      break;
    case "bold":
      textTypeStyle = VCTextStyle.textBoldStyle;
      break;
    case "normal":
      textTypeStyle = VCTextStyle.textNormalStyle;
      break;
    case "p":
      textTypeStyle = VCTextStyle.textPStyle;
      break;
    case "bolder":
      textTypeStyle = VCTextStyle.textBolderStyle;
      break;
    case "boldest":
      textTypeStyle = VCTextStyle.textBoldestStyle;
      break;
      
    case "title":
      textTypeStyle = VCTextStyle.textTitleStyle;
      break;

    case "alert":
      textTypeStyle = VCTextStyle.textAlertStyle;
      break;
    case "h1":
      textTypeStyle = VCTextStyle.textH1Style;
      break;
    default:
      textTypeStyle = VCTextStyle.textLightStyle;
      break;
  }

  switch (color) {
    case "primary":
      colorStyle = VCTextStyle.secondary;
      break;
    case "secondary":
      colorStyle = VCTextStyle.secondary;
      break;
    case "orange":
      colorStyle = VCTextStyle.orange;
      break;
    case "grey":
      colorStyle = VCTextStyle.grey;
      break;
    case "light":
      colorStyle = VCTextStyle.light;
      break;
    case "success":
      colorStyle = VCTextStyle.success;
      break;
    case "failed":
      colorStyle = VCTextStyle.failed;
      break;
    case "white":
      colorStyle = VCTextStyle.white;
      break;
    default:
      colorStyle = VCTextStyle.normal;
      break;
  }

  switch (align) {
    case "left":
      alignTextStyle = VCTextStyle.left;
      break;
    case "right":
      alignTextStyle = VCTextStyle.right;
      break;
    case "center":
      alignTextStyle = VCTextStyle.center;
      break;
    default:
      alignTextStyle = VCTextStyle.left;
      break;
  }

  return (
    <Text
      {...rest}
      minimumFontScale={1}
      maxFontSizeMultiplier={1}
      style={[textTypeStyle, colorStyle, alignTextStyle, { ...style }]}
    >
      {text}
    </Text>
  );
}

VCText.defaultProps = {
  text: "Text Required",
  weight: "normal",
};

export default VCText;
