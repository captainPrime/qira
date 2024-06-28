import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const VCmodal = ({
  animationType = "slide",
  transparent = true,
  visible = false,
  onRequestClose,
  customStyle,
  children,
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={[styles.modalContainer, customStyle]}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    height: 297,
    backgroundColor: "#ffffff",
  },
});

export default VCmodal;
