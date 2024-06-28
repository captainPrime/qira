// VCList.js
import React, { useState } from "react";
import { FlatList, View, TouchableOpacity, StyleSheet } from "react-native";
import VCText from "./VCText";
import Checkbox from "expo-checkbox";

const VCList = ({ items }: any) => {
  const [products, setProducts] = useState(items);

  const handleChange = (id: any) => {
    let temp = products.map((product: any) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

  let selected = products.filter((product: any) => product.isChecked);

  const renderFlatList = (renderData: any) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              handleChange(item.id);
            }}
          >
            <View style={styles.content}>
              <View style={styles.name}>
                <VCText type="normal" text={item.name} />
              </View>
              <View>
                <VCText type="bolder" text={item.id} />
              </View>
            </View>
            <Checkbox
              value={item.isChecked}
              onChange={() => {
                handleChange(item.id);
              }}
              color={item.isChecked ? "red" : undefined}
            />
          </TouchableOpacity>
        )}
      />
    );
  };

  return <View style={{ flex: 1 }}>{renderFlatList(products)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D8D8",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  name: {
    marginBottom: 10,
  },
  checkbox: {
    margin: 8,
  },
});

export default VCList;
