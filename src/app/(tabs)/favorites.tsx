import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import VCLayout from "../../components/VCLayout";
import VCText from "../../components/VCText";
import { ModalPortal } from "react-native-modals";
import QbuildingCard from "../../components/QbuildingCard";

const menu = [
  { name: "1 bed" },
  { name: "2 bed" },
  { name: "3 bed" },
  { name: "4 bed" },
  { name: "5 bed" },
  { name: "6 bed" },
];

const getRandomProfileImage = () => {
  const randomImageId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/200/200?random=${randomImageId}`;
};


const building = [
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
    tag: "Daily Pay",
  },
  {
    id: 2,
    images: [
      getRandomProfileImage(),
      getRandomProfileImage(),
      getRandomProfileImage(),
    ],
    name: "Marion Court",
    amount: "#34,000",
    location: "ikeja, lagos",
    type: "Per Night",
    tag: "Monthly Pay",
  },
  {
    id: 3,
    images: [
      getRandomProfileImage(),
      getRandomProfileImage(),
      getRandomProfileImage(),
    ],
    name: "Marion Court",
    amount: "#34,000",
    location: "ikeja, lagos",
    type: "Per Night",
    tag: "Daily Pay",
  },
  {
    id: 4,
    images: [
      getRandomProfileImage(),
      getRandomProfileImage(),
      getRandomProfileImage(),
    ],
    name: "Marion Court",
    amount: "#34,000",
    location: "ikeja, lagos",
    type: "Per Night",
    tag: "Monthly Pay",
  },
];


export default function Favorites() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleNavigate = (id: any) => {
    router.navigate("building_details");
  };

  return (
    <VCLayout>
      <View style={style.container}>
        <VCText type="boldest" text="Favorites" align="center" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={200}
      >
        <View style={style.content}>
          <View>
            <QbuildingCard building={building} />
          </View>
        </View>
      </ScrollView>
      <ModalPortal />
    </VCLayout>
  );
}
const style = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  mainContainer: {
    marginTop: 30,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  menuItem: {
    padding: 10,

    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#F4F4F4",
    borderRadius: 8,
  },

  input: {
    height: 51,
  },
  menuItemContainer: {
    flexDirection: "row",
    overflow: "scroll",
    gap: 12,
  },
  menu: {
    height: 110,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  locationContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    marginTop: 10,
  },
  subsection: {
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    width: "100%",
    height: 49,
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
    backgroundColor: "#ffffff",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2.84,
    color: "black",
  },

  selectedMenuItem: {
    backgroundColor: "blue",
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
