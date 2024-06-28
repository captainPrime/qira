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
import VCText from "./VCText";

const VCFeaturedEvents = ({ data }: any) => {
  const scrollViewRef = useRef();

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    // You can use offsetX to determine the current card in view or for any additional logic.
  };

  const renderCards = () => {
    return data.map((item: any, index: any) => (
      <TouchableOpacity onPress={() => router.navigate("event_details")}>
        <View key={index} style={[styles.card, styles.cardRow]}>
          {item.image && (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
          <View style={styles.textContainer}>
            <View style={{ marginVertical: 5 }}>
              <VCText type="boldest" text={item.title} />
            </View>
            <View style={{ marginVertical: 5 }}>
              <VCText type="normal" text={item.location} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").width - 110}
        scrollEventThrottle={200}
      >
        {renderCards()}
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    height: 195,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    borderRadius: 12,
    marginLeft: 0,
  },
  cardRow: { width: Dimensions.get("window").width - 120 },

  image: {
    width: "100%",
    height: 113,
    marginBottom: 10,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
  },
});

export default VCFeaturedEvents;
