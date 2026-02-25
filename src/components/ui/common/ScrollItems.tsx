import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Item from "./Item";

const ScrollItems = ({ data }) => {
  return (
    <View className="my-3">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
        }}
      >
        {data.map((item, index) => (
          <Item name={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollItems;
