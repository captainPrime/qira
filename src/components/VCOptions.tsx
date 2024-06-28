import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ProfileStyles } from "./VCProfile";

import VCText from "./VCText";
import { router } from "expo-router";

import Arrow from "../assets/icons/arrow-right.svg";

const VCOptions = ({ options }: any) => {
  return (
    <View style={styles._container}>
      {options.map((option: any, index: number) => (
        <TouchableOpacity key={index} style={styles.container} onPress={option.url ? () => router.push(option.url) : option.action } >
          <View style={ProfileStyles.container}>
            <View style={ProfileStyles.profileContainer}>
            {option.icon}
            </View>
            <View style={ProfileStyles.textContainer}>
              <VCText type="p" text={option.value} />
            </View>
          </View>

          <View style={styles.arrow}>
          <Arrow width={24} height={24}/>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  _container: {
    marginVertical: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  arrow: {
    width: 24,
    height: 24,
    marginTop: 20,
  },
});

export default VCOptions;
