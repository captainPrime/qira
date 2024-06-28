import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import VCText from "../../components/VCText";
import VCLayout from "../../components/VCLayout";
import QBuiildingList from "../../components/QBuiildingList";
import { getRandomProfileImage } from "../../helper";
import VCTabs from "../../components/VCTabs";

const bookings = () => {
  const data = [
    {
      id: 1,
      name: "Marion Court",
      price: "#23,000",
      image: getRandomProfileImage(),
    },
    {
      id: 2,
      name: "Marion Court",
      price: "#23,000",
      image: getRandomProfileImage(),
    },
    {
      id: 3,
      name: "Marion Court",
      price: "#23,000",
      image: getRandomProfileImage(),
    },
    {
      id: 4,
      name: "Marion Court",
      price: "#23,000",
      image: getRandomProfileImage(),
    },
    {
      id: 5,
      name: "Marion Court",
      price: "#23,000",
      image: getRandomProfileImage(),
    },
    {
      id: 6,
      name: "Marion Court",
      price: "#23,000",
      image: getRandomProfileImage(),
    },
    {
      id: 7,
      name: "Marion Court",
      price: "#23,000",
      image: getRandomProfileImage(),
    },
  ];
  const renderBuildings = (type: string) => (
    <View>
      {type === "Inspection" && <QBuiildingList data={data} />}
      {type === "Pending Payment" && <QBuiildingList data={[]} />}
      {type === "Reservations" && <QBuiildingList data={data} />}
    </View>
  );

  const tabs = [
    { label: "Inspection", content: renderBuildings("Inspection") },
    { label: "Pending Payment", content: renderBuildings("Pending Payment") },
    { label: "Reservations", content: renderBuildings("Reservations") },
  ];

  return (
    <VCLayout>
       <View style={style.container}>
        <VCText type="boldest" text="My Bookings" align="center" />
      </View>
      <View style={style.content}>
        <VCTabs tabs={tabs} />
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
export default bookings;
