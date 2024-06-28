import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import VCText from "./VCText";
import RightChevron from "../assets/icons/chevron-right.svg";
import { EMPTY } from "../helper/images";
import { router } from "expo-router";

const QMenuList = ({ data, handleNavigate }: any) => {
  return (
    <View>
      {data?.length === 0 ? (
        <View
          style={{ alignContent: "center", alignItems: "center", padding: 20 }}
        >
          <Image
            style={{ width: 152, height: 118, borderRadius: 8 }}
            source={EMPTY}
          />

          <View style={{ marginVertical: 5 }}>
            <VCText type="boldest" text="No Inspection Booked" />
          </View>
          <View style={{ marginVertical: 5 }}>
            <VCText
              align="center"
              type="p"
              text="You currently do not have any inspection booked kindly book an inspection to see them here"
            />
          </View>
        </View>
      ) : (
        <View>
          {data?.map((data: any) => (
            <TouchableOpacity
              onPress={() => router.navigate(data.url)}
              style={style.container}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={style.textContainer}>
                  <View style={{ marginVertical: 5 }}>
                    <VCText type="bolder" text={data.name} />
                  </View>
                </View>
              </View>

              <View>
                <RightChevron width={19} height={19} color="white" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 1,
    paddingVertical: 15,
    alignContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginHorizontal: 10,
  },
});

export default QMenuList;