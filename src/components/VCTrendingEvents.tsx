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

const VCTrendingEvents = ({ data, scope }: any) => {
  const scrollViewRef = useRef();

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    // You can use offsetX to determine the current card in view or for any additional logic.
  };

  const renderCards = () => {
    return data.map((item: any, index: any) => (
      <TouchableOpacity onPress={() => router.navigate("event_details")}>
        <View
          key={index}
          style={[
            styles.card,
            scope === "row" ? styles.cardRow : styles.cardCol,
          ]}
        >
          {item.image && (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
          <View style={styles.textContainer}>
            <View style={{ marginVertical: 2 }}>
              <VCText type="boldest" text={item.title} />
            </View>
            <View style={{ marginVertical: 2 }}>
              <VCText type="normal" text={item.location} />
            </View>
          </View>
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
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          onScroll={handleScroll}
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
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    borderRadius: 12,
    marginLeft: 0,
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

export default VCTrendingEvents;
