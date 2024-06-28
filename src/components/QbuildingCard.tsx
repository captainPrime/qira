import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Like from "../assets/icons/like.svg";
import VCText from "./VCText";

const QbuildingCard = ({ building, handleView }: any) => {
  return (
    <View>
      {building.map((data: any) => (
        <View style={styles.card}>
          <TouchableOpacity onPress={() => handleView(data.id)}>
            <SliderBox
              images={data.images}
              sliderBoxHeight={145}
              dotColor="#FEFEFE"
              inactiveDotColor="#90A4AE"
              paginationBoxStyle={styles.paginationBoxStyle}
              paginationBoxVerticalPadding={20}
              dotStyle={styles.dotStyle}
            />

            <ImageBackground>
              <View style={styles.tag}>
                <VCText text={data.tag} type="bolder" color="white" />
              </View>
              <TouchableOpacity style={styles.like}>
                <Like width={28} height={28} />
              </TouchableOpacity>
            </ImageBackground>

            <View style={styles.detailsContainer}>
              <View>
                <View style={{ marginVertical: 5 }}>
                  <VCText text={data.name} type="boldest" />
                </View>
                <View style={{ marginVertical: 5 }}>
                  <VCText text={data.location} type="p" />
                </View>
              </View>
              <View>
                <View style={{ marginVertical: 5 }}>
                  <VCText text={data.amount} type="boldest" color="secondary" />
                </View>
                <View style={{ marginVertical: 5 }}>
                  <VCText text={data.type} type="p" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    marginBottom: 20,
    position: "relative",
    borderWidth: 1,
    borderColor: "#f2f2f2",
    shadowOffset: {
      width: 0,
      height: -3, // Shadow at the top
    },
    shadowOpacity: 0.1,
    shadowColor: "#000",
  },
  detailsContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  dotStyle: {
    width: 16,
    height: 2,
    borderRadius: 20, // Make the dots square
    alignContent: "flex-start",
  },
  paginationBoxStyle: {
    position: "absolute",
    bottom: 0,
    left: 0, // Align pagination box to the left
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  tag: {
    position: "absolute",

    top: -130,
    left: 10,
    backgroundColor: "#FF7F51",
    paddingHorizontal: 15,
    paddingVertical: 5,

    borderRadius: 122,
    zIndex: 1,
  },

  like: {
    position: "absolute",

    bottom: 10,
    right: 10,
  },
});

export default QbuildingCard;
