import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CardCarouselStyle } from "../assets/styles/vc_card_carousel.style";
import VCButton from "./VCButton";
import VCText from "./VCText";
import Complete from "../assets/icons/complete.svg";
import CompleteRed from "../assets/icons/checkRed.svg";

const VCCarouselCard = ({ data, handlePress }: any) => {
  const { width: screenWidth } = Dimensions.get("window");

  const [activeSlide, setActiveSlide] = useState(0);

  const buttonType = (status: any) => {
    if (status === "Upcoming") {
      return "View Details";
    } else {
      return "Review";
    }
  };

  const statusType = (status: any) => {
    if (status === "Upcoming") {
      return (
        <View style={CardCarouselStyle.status_container}>
          <VCText type="bold" text="Cancel" color="failed" />
        </View>
      );
    }
    if (status === "Completed") {
      return (
        <View style={CardCarouselStyle.status_container}>
          <Complete
            width={24}
            height={24}
            style={{ marginRight: 10, marginTop: -2 }}
          />
          <VCText type="bold" text="Completed" color="success" />
        </View>
      );
    }
    if (status === "Refunded") {
      return (
        <View style={CardCarouselStyle.status_container}>
          <CompleteRed
            width={24}
            height={24}
            style={{ marginRight: 10, marginTop: -2 }}
            color="red"
          />
          <VCText type="bold" text="Refunded" color="failed" />
        </View>
      );
    }
  };

  const renderCard = ({ item }: any) => (
    <View style={CardCarouselStyle.card}>
      <View style={{ marginVertical: 5 }}>
        <VCText type="normal" text="Event" />
      </View>

      <View style={{ marginVertical: 5 }}>
        <VCText type="bolder" text={item.event} />
      </View>

      <View style={CardCarouselStyle.dottedLineContainer}>
        <View style={CardCarouselStyle.dottedLine} />
      </View>

      <View style={[CardCarouselStyle.attendee, { marginBottom: 10 }]}>
        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Name" />
          </View>
          <VCText type="bold" text={item.name} />
        </View>

        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Phone" align="right" />
          </View>
          <VCText type="bolder" text={item.phone} align="right" />
        </View>
      </View>
      <View style={[CardCarouselStyle.attendee, { marginBottom: 10 }]}>
        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Date and Hour" />
          </View>
          <VCText type="bold" text={item.date} />
        </View>

        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Order ID" align="right" />
          </View>
          <VCText type="bolder" text={item.order_id} align="right" />
        </View>
      </View>
      <View style={[CardCarouselStyle.attendee, { marginBottom: 10 }]}>
        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Location" />
          </View>
          <VCText type="bold" text={item.location} />
        </View>

        <View style={{ marginVertical: 5 }}>
          <View style={{ marginVertical: 10 }}>
            <VCText type="light" text="Organizer" align="right" />
          </View>

          <VCText type="bolder" text={item.organizer} align="right" />
        </View>
      </View>

      <View style={[CardCarouselStyle.attendee, { marginTop: 20 }]}>
        {statusType(item.status)}

        <View style={{ marginVertical: 5 }}>
          <VCButton
            label={buttonType(item.status)}
            color="small"
            handleOnPress={() => handlePress(item.id)}
          />
        </View>
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

export default VCCarouselCard;
