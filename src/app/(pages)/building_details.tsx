import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
import VCText from "../../components/VCText";
import Like from "../../assets/icons/like.svg";
import Rating from "../../assets/icons/rating.svg";
import Location from "../../assets/icons/location.svg";
import Bath from "../../assets/icons/bath.svg";
import Bed from "../../assets/icons/bed.svg";
import Chair from "../../assets/icons/chair.svg";
import Kitchen from "../../assets/icons/kitchen.svg";
import Share from "../../assets/icons/share.svg";
import Back from "../../assets/icons/back_icon.svg";
import Love from "../../assets/icons/ellipse.svg";
import Profile from "../../assets/icons/profile.svg";
import VCButton from "../../components/VCButton";
import { router } from "expo-router";

const getRandomProfileImage = () => {
  const randomImageId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/200/200?random=${randomImageId}`;
};

const building: any = [
  {
    id: 1,
    images: [
      getRandomProfileImage(),
      getRandomProfileImage(),
      getRandomProfileImage(),
    ],
    name: "Marion Court",
    amount: "#34,000",
    location: "ikeja, lagos",
    type: "Per Night",
    back: "Daily Pay",
    stars: 4.88,
    reviews: 161,
    host: "TOLU ARABA",
    host_year: "2 years hosting",
    description:
      "Here I am on this adventure! I've always loved sharing my spaces with friends or family, so I said why not make it a business ?",
    home_details: [
      { name: "1 bed" },
      { name: "2 Bedroom" },
      { name: "3 Bathroom" },
      { name: "4 Kitchen" },
    ],
  },
];

const BuildingDetails = ({ type }: any) => {
  const [alertVisible, setAlertvisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex]: any = useState();

  const handleMenuItemPress = (index: number) => {
    setSelectedItemIndex(index);
    console.log("clicked");
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        {building.map((data: any) => (
          <View>
            <SliderBox
              images={data.images}
              sliderBoxHeight={370}
              dotColor="#FF7F51"
              inactiveDotColor="#90A4AE"
              paginationBoxStyle={style.paginationBoxStyle}
              paginationBoxVerticalPadding={20}
              dotStyle={style.dotStyle}
            />

            <ImageBackground>
            <TouchableOpacity onPress={() => router.back()} style={style.back}>
                <Back width={38} height={38} />
              </TouchableOpacity>
              <TouchableOpacity style={style.like}>
                <Share width={38} height={38} />
              </TouchableOpacity>
              <TouchableOpacity style={style.share}>
                <Love width={38} height={38} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        ))}
      </View>

      <View style={style.content}>
        <ScrollView>
          {building.map((data: any, index: number) => (
            <View>
              <View style={{ marginHorizontal: 10 }}>
                <VCText type="title" text={data.name} />
              </View>

              <View style={style.spacing}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Rating width={13} height={13} />
                    <VCText type="light" color="light" text={data.stars} />
                    <VCText
                      type="light"
                      color="light"
                      text={`${data.reviews} reviews`}
                    />
                    <View
                      style={{ flexDirection: "row", gap: 5, marginLeft: 10 }}
                    >
                      <Location width={13} height={15} />
                   

                      <VCText type="light" color="light" text={data.location} />
                    </View>
                  </View>

                  <View
                    style={{ flexDirection: "column", gap: 5, marginTop: -30 }}
                  >
                    <View>
                      <VCText
                        type="light"
                        color="primary"
                        text={data.location}
                      />
                      <VCText type="bold" color="primary" text={data.amount} />
                    </View>
                  </View>
                </View>
              </View>

              <View style={style.menuItemContainer}>
                <ScrollView horizontal>
                  {data.home_details.map((data: any, index: number) => (
                    <TouchableOpacity
                      onPress={() => handleMenuItemPress(index)}
                    >
                      <View
                        style={[
                          style.menuItem,
                          selectedItemIndex === index && style.selectedMenuItem,
                        ]}
                      >
                        <View>
                        {index === 0 && <Chair width={21} height={18} />}
                      {index === 1 && <Bed width={21} height={18} />}
                      {index === 2 && <Bath width={21} height={18} />}
                      {index === 3 && <Kitchen width={21} height={18} />}
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                          <VCText type="p" text={data.name} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <View style={style.infoContainer}>
                <View style={style.hostContainer}>
                  <View
                    style={{ flexDirection: "row", gap: 5, marginLeft: 10 }}
                  >
                    <Profile width={24} height={24} />
                    <VCText type="boldest" color="light" text={data.host} />
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <VCText type="p" color="light" text="Host" />
                  </View>
                </View>

                <View style={{ marginVertical: 15 }}>
                  <View style={{ flexDirection: "row", gap: 20 }}>
                    <View>
                      <VCText type="light" color="grey" text="Host" />
                      <View style={{ marginVertical: 10 }}>
                        <VCText
                          type="bold"
                          color="normal"
                          text={data.host_year}
                        />
                      </View>
                    </View>

                    <View>
                      <VCText type="light" color="grey" text="Rating" />
                      <View style={{ marginVertical: 10 }}>
                        <VCText
                          type="bold"
                          color="normal"
                          text={data.host_year}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <VCText type="p" color="normal" text={data.description} />
                    <View style={{ marginTop: 10 }}>
                      <VCText type="p" color="primary" text="See more" />
                    </View>
                  </View>
                </View>
              </View>

              <View>
                <View style={{ flexDirection: "row", gap: 5, marginLeft: 10 }}>
                  <Like width={13} height={15} />
                  <VCText type="p" text="View Direction on map" />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* button Bottom */}

        {/* {type === "details" && ( */}
          <View style={style.buttonContainer}>
            <View style={{ flexDirection: "column", gap: 5 }}>
              <View>
                <TouchableOpacity>
                  <VCText type="light" color="primary" text="Choose Date" />
                </TouchableOpacity>

                <VCText
                  type="bold"
                  color="primary"
                  text={`${building[0].type} ${building[0].amount}`}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 5, width: 161 }}>
              <VCButton
                label="Book Inspection"
                handleOnPress={() => console.log("")}
              />
            </View>
          </View>
        {/* )} */}
        {type === "inspection" && type === "payment" && (
          <View style={style.buttonContainer}>
            <View style={{ flexDirection: "column", gap: 5 }}>
              <View>
                <TouchableOpacity>
                  <VCText type="light" color="primary" text="Choose Date" />
                </TouchableOpacity>

                <VCText
                  type="bold"
                  color="primary"
                  text={`${building[0].type} ${building[0].amount}`}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 5, width: 161 }}>
              <VCButton
                label="Make Payment"
                handleOnPress={() => console.log("")}
              />
            </View>
          </View>
        )}
        {type === "reserved" && (
          <View style={style.buttonContainer}>
            <View style={{ flexDirection: "row", gap: 5, width: 161 }}>
              <VCButton
                label="Cancel"
                color="secondary"
                handleOnPress={() => console.log("")}
              />
            </View>

            <View style={{ flexDirection: "row", gap: 5, width: 161 }}>
              <VCButton
                label="Renew Rent"
                handleOnPress={() => console.log("")}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: "62%",
    marginTop: -30,
  },
  infoContainer: {
    padding: 15,
    backgroundColor: "#F4F4F4",
    marginVertical: 15,
    borderRadius: 13,
    marginTop: 30,
  },
  hostContainer: {
    paddingVertical: 10,
    backgroundColor: "#fff",

    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuItemContainer: {
    flexDirection: "row",
    overflow: "scroll",
    gap: 12,
    marginTop: 15,
  },
  menu: {
    height: 110,
    padding: 20,

    borderRadius: 12,
  },
  paginationBoxStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  back: {
    position: "absolute",

    bottom: 270,
    left: 10,

    paddingHorizontal: 15,
    paddingVertical: 5,

    borderRadius: 122,
    zIndex: 1,
  },
  like: {
    position: "absolute",

    bottom: 270,
    right: 10,
  },
  share: {
    position: "absolute",

    bottom: 270,
    right: 60,
  },
  dotStyle: {
    width: 24,
    height: 2,
    borderRadius: 20, // Make the dots square
  },
  spacing: {
    marginVertical: 10,
  },
  menuItem: {
    padding: 10,

    alignContent: "center",
    alignItems: "center",

    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#F4F4F4",
    borderRadius: 8,
    width: 113,
    marginRight: 10,
  },
  selectedMenuItem: {
    backgroundColor: "blue",
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    left: 0,
    width: Dimensions.get("window").width,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3, // Shadow at the top
    },
    shadowOpacity: 0.1,

    elevation: 6,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  modalContainer: {
    justifyContent: "center",

    alignItems: "center",
    padding: 30,
  },
  modalContent: {
    marginVertical: 10,
  },
});

export default BuildingDetails;
