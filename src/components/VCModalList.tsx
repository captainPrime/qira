import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const VCModalList = ({ data,  setSelectedItem}: any) => {

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={[styles.item]}
      onPress={() => setSelectedItem(item)}
    >
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
     
      />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
 
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "400",
    lineHeight: 19.36
  },
});

export default VCModalList;
