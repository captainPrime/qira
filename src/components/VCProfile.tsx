import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import VCText from "./VCText";

const VCProfile = ({ profileImage, name }: any) => {
  return (
    <View style={ProfileStyles.container}>
      <View style={ProfileStyles.profileContainer}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../assets/icons/avatar.png")
          }
          style={ProfileStyles.profileImage}
        />
      </View>
      <View style={ProfileStyles.textContainer}>
        <VCText type="normal" text="Welcome" />
        <VCText type="boldest" text={name} />
      </View>
    </View>
  );
};

export const ProfileStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    marginRight: 16,
    overflow: "hidden",
    borderRadius: 50,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flexDirection: "column",
  },
});

export default VCProfile;
