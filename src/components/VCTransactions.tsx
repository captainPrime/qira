import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CardCarouselStyle } from "../assets/styles/vc_card_carousel.style";
import VCButton from "./VCButton";
import VCText from "./VCText";
import File from "../assets/icons/file.svg";
import Complete from "../assets/icons/complete.svg";
import CompleteRed from "../assets/icons/checkRed.svg";

const VCTransactions = ({ data, handlePress }: any) => {
  const { width: screenWidth } = Dimensions.get("window");

  const [activeSlide, setActiveSlide] = useState(0);

  const statusType = (status: any) => {
    if (status === "Upcoming") {
      return (
        <View style={styles.status_container}>
          <VCText type="bold" text="Cancel" color="failed" align="right" />
        </View>
      );
    }
    if (status === "Completed") {
      return (
        <View style={styles.status_container}>
          <Complete
            width={20}
            height={20}
            style={{ marginRight: 10, marginTop: -2 }}
          />
          <VCText type="bold" text="Completed" color="success" align="right" />
        </View>
      );
    }
    if (status === "Refunded") {
      return (
        <View style={styles.status_container}>
          <CompleteRed
            width={20}
            height={20}
            style={{ marginRight: 10, marginTop: -2 }}
            color="red"
          />
          <VCText type="bold" text="Refunded" color="failed" align="right" />
        </View>
      );
    }
  };

  const renderCard = ({ item }: any) => (
    <View style={CardCarouselStyle.card}>
      <View style={{ marginVertical: 10, alignItems: "center" }}>
        <File width={45} height={45} />
      </View>

      <View style={{ marginVertical: 5, alignItems: "center" }}>
        <VCText type="bolder" align="center" text={item.event} />
      </View>

      <View style={CardCarouselStyle.dottedLineContainer}>
        <View style={CardCarouselStyle.dottedLine} />
      </View>

      <View style={[CardCarouselStyle.attendee, { marginBottom: 10 }]}>
        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Amount" />
          </View>
          <VCText type="bold" text={item.amount} />
        </View>

        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Payment Date" align="right" />
          </View>
          <VCText type="bolder" text={item.date} align="right" />
        </View>
      </View>
      <View style={[CardCarouselStyle.attendee, { marginBottom: 10 }]}>
        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Reference ID" />
          </View>
          <VCText type="bold" text={item.reference_id} />
        </View>

        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Payment Status" align="right" />
          </View>
          {statusType(item.status)}
        </View>
      </View>

      <View>
        <View>
          <VCText type="light" text="Ticket" />
        </View>
        <VCText type="bold" text={`${item.ticket} Tickets`} />
      </View>

      <View style={[{ marginTop: 20 }]}>
        <View style={{ marginVertical: 10 }}>
          <VCButton
            label="Download"
            color="primary"
            handleOnPress={() => handlePress(item.id)}
          />
        </View>
      </View>

      <View style={{ marginVertical: 5 }}>
        <VCText
          type="p"
          align="center"
          text="Having any issues with this transaction ?Reach out via our Support Channel"
        />
      </View>
    </View>
  );

  return (
    <View style={CardCarouselStyle.container}>
      <Carousel
        data={data}
        renderItem={renderCard}
        sliderWidth={screenWidth - 20}
        itemWidth={screenWidth - 20}
        onSnapToItem={(index: number) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={CardCarouselStyle.paginationContainer}
        dotStyle={CardCarouselStyle.dotStyle}
        inactiveDotStyle={CardCarouselStyle.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  status_container: {
    marginVertical: 5,
    flexDirection: "row",
  },
});

export default VCTransactions;
