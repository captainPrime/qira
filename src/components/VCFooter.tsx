import { Text, View } from "react-native";
import React, { Component } from "react";
import VCText from "./VCText";

export class VCFooter extends Component {
  render() {
    return (
      <View>
        <View style={{ marginVertical: 10 }}>
          <VCText
            type="bold"
            align="center"
            text="By signing up or logging in, I accept the"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <VCText
              type="bolder"
              align="center"
              text="Terms of Services"
              color="failed"
            />
            <VCText type="bold" align="center" text=" and " />
            <VCText
              type="bolder"
              align="center"
              text="Privacy Policy"
              color="failed"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default VCFooter;
