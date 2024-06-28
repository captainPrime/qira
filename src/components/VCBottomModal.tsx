import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import VCText from "./VCText";
import Close from "../assets/icons/x-square.svg";

const { height } = Dimensions.get("window");

const VCBottomModal = ({ isVisible, closeModal, children, title }: any) => {
  return (
    <View>
      <BottomModal
        style={{ height: "auto" }}
        visible={isVisible}
        onTouchOutside={closeModal}
        onSwipeOut={closeModal}
        swipeDirection={["down"]}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        modalTitle={
          <View style={styles.header}>
            <VCText text={title} type="bolder" />
            <Pressable onPress={closeModal}>
              <Close width={24} height={24} />
            </Pressable>
          </View>
        }
      >
        <ModalContent>
          <ScrollView
           
            showsVerticalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={Dimensions.get("window").width - 60}
            scrollEventThrottle={200}
          >
            {children}
          </ScrollView>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    shadowColor: "#E6E8EC",
    shadowOpacity: 1,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8EC",
  },
});

export default VCBottomModal;
