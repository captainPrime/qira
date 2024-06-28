import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import VCLayout from "../../components/VCLayout";
import VCText from "./VCText";

const Tab = ({ label, onPress, isSelected }: any) => {
  return (
    <TouchableOpacity
      style={[Styles.tab, isSelected && Styles.selectedTab]}
      onPress={onPress}
    >
      <Text style={Styles.tabText}>{label}</Text>
    </TouchableOpacity>
  );
};

const TabContent = ({ content }: any) => {
  return <View style={Styles.content}>{content}</View>;
};

const VCTabs = ({ tabs }: any) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.tabContainer}>
        {tabs?.map((tab, index) => (
          <Tab
            key={index}
            label={
              <VCText
                text={tab.label}
                color={tab === selectedTab ? "white" : ""}
                type="p"
              />
            }
            isSelected={tab === selectedTab}
            onPress={() => setSelectedTab(tab)}
          />
        ))}
      </View>

      <TabContent content={selectedTab.content} />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tab: {
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    width: "auto",
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  selectedTab: {
    backgroundColor: "#1052BA",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  content: {
    marginTop: 30,
  },
});

export default VCTabs;
