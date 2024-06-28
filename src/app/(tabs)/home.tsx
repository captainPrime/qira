import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import VCLayout from "../../components/VCLayout";
import VCProfile from "../../components/VCProfile";
import VCText from "../../components/VCText";
import Search from "../../assets/icons/search.svg";
import BellIcon from "../../assets/icons/bell.svg";
import BuildingIcon from "../../assets/icons/Garage.svg";
import VCBottomModal from "../../components/VCBottomModal";
import VCModalList from "../../components/VCModalList";
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

export default function Home() {
  const [profileImage, setProfileImage] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const handleMenuItemPress = (index: number) => {
    setSelectedItemIndex(index);
    console.log("clicked");
  };

  const name = "Jon Doe";

  const getRandomProfileImage = () => {
    const randomImageId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/200/200?random=${randomImageId}`;
  };

  const carouselData = [
    {
      image: getRandomProfileImage(),
      title: "SoundLand Lagos Musich Festival",
      location: "Thurs 20-29 ,2024 Lagos, Nigeria",
    },
    {
      image: getRandomProfileImage(),
      title: "SoundLand Lagos Musich Festival 2",
      location: "Lagos, Nigeria",
    },
    {
      image: getRandomProfileImage(),
      title: "SoundLand Lagos Musich Festival 2",
      location: "Lagos, Nigeria",
    },
    {
      image: getRandomProfileImage(),
      title: "SoundLand Lagos Musich Festival 2",
      location: "Lagos, Nigeria",
    },
    {
      image: getRandomProfileImage(),
      title: "SoundLand Lagos Musich Festival 2",
      location: "Lagos, Nigeria",
    },
    {
      image: getRandomProfileImage(),
      title: "SoundLand Lagos Musich Festival 2",
      location: "Lagos, Nigeria",
    },
    {
      image: getRandomProfileImage(),
      title: "SoundLand Lagos Musich Festival 2",
      location: "Lagos, Nigeria",
    },
  ];

  const handleNavigate = (id: any) => {
    router.navigate("event_details");
  };

  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const handleSelectGender = (item: any) => {
    console.log(item);
    setSelectedLocation(item);
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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

  const handleViewHome = (id: any) => {
    router.navigate('building_details');
  }

  return (
    <VCLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={200}
      >
        <VCBottomModal
          isVisible={modalVisible}
          closeModal={closeModal}
          title="Choose Ticket"
        >
          <VCModalList
            data={states}
            setSelectedItem={(item: any) => handleSelectGender(item)}
          />
        </VCBottomModal>
        <View style={{ padding: 20 }}>
          <View
            style={{
              marginVertical: 20,
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <VCProfile profileImage={profileImage} name={name} />

            <BellIcon width={40} height={40} />
          </View>

          <View style={{ width: 207, marginVertical: 20 }}>
            <VCText type="title" text="Find your new home" />
          </View>

          <View style={style.searchContainer}>
            <TextInput
              style={style.input}
              placeholder="Search apartment, room.."
              placeholderTextColor="black"
            />
            <Search width={37} height={37} />
          </View>
        </View>

        <View style={style.content}>
          <View style={style.menu}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
            >
              <View style={style.menuItemContainer}>
                {menu.map((data: any, index: number) => (
                  <TouchableOpacity onPress={() => handleMenuItemPress(index)}>
                    <View
                      style={[
                        style.menuItem,
                        selectedItemIndex === index && style.selectedMenuItem,
                      ]}
                    >
                      <View>
                        <BuildingIcon width={19} height={19} color="white" />
                      </View>
                      <View style={{ marginHorizontal: 10 }}>
                        <VCText type="p" text={data.name} />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
          <View>
            <QbuildingCard
              building={building}
              handleView={(id: any) => handleViewHome(id)}
            />
          </View>
        </View>
      </ScrollView>
      <ModalPortal />
    </VCLayout>
  );
}
export const style = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: Dimensions.get("screen").height,
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
});
