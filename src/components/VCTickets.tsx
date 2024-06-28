import { router } from "expo-router";
import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ticket from "../assets/icons/Frame2.svg";
import VCText from "./VCText";

const VCTickets = ({ data, scope }: any) => {
  const scrollViewRef = useRef();

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    // You can use offsetX to determine the current card in view or for any additional logic.
  };

  const renderCards = () => {
    return data.map((item: any, index: any) => (
      <TouchableOpacity onPress={() => router.navigate("e_ticket")}>
        <View
          key={index}
          style={[
            styles.card,
            scope === "row" ? styles.cardRow : styles.cardCol,
          ]}
        >
          <Ticket width={341} height={105} />
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      {scope === "row" ? (
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          decelerationRate="fast"
          snapToInterval={Dimensions.get("window").width - 60}
          scrollEventThrottle={200}
        >
          {renderCards()}
        </ScrollView>
      ) : (
        <ScrollView
          ref={scrollViewRef}
          vertical
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          decelerationRate="fast"
          snapToInterval={Dimensions.get("window").width}
          scrollEventThrottle={200}
        >
          {renderCards()}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#00000000",
    marginHorizontal: 10,
    borderRadius: 12,
    marginLeft: -5, //change
  },
  ticket: {
    backgroundColor: "red",
  },
  cardRow: { width: Dimensions.get("window").width - 70 },
  cardCol: { width: Dimensions.get("window").width - 41 },
  image: {
    width: "40%",
    height: 96,
    borderRadius: 12,
    marginRight: 16,
    marginLeft: -15,
  },
  textContainer: {
    flex: 1,
  },
});

export default VCTickets;
