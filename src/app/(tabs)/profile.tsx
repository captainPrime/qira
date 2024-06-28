import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import VCLayout from "../../components/VCLayout";
import VCText from "../../components/VCText";
import { router } from "expo-router";
import QMenuList from "../../components/QMenuList";

const profile = () => {
  const menu = [
    { name: "Personal Information", url: "personal_information" },
    { name: "Security Settings", url: "security_settings" },
    { name: "FAQ", url: "faq" },
    { name: "Contact Us", url: "contact_us" },
    { name: "Legal Agreement", url: "legal_agreement" },
    { name: "Enable biometric", url: "personal_information" },
  ];
  return (
    <VCLayout>
      <View style={style.container}>
        <VCText type="boldest" text="My Profile" align="center" />
      </View>
      <View style={style.content}>
        <QMenuList data={menu} />

        <TouchableOpacity
          onPress={() => router.navigate("login")}
          style={{
            backgroundColor: "#FD495E17",
            padding: 20,
            marginVertical: 20,
            borderRadius: 8,
          }}
        >
          <VCText type="bolder" text="Log Out" align="center" color="failed" />
        </TouchableOpacity>
      </View>
    </VCLayout>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    marginTop: 40,
    height: Dimensions.get("screen").height 
  },
});

export default profile;
