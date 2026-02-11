import React from "react";
import { ScrollView, View } from "react-native";
import HorizontalCollection from "./HorizontalCollection";

const HorizontalScroll = (data: any[]) => {
  return (
    <View className="my-5">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
        }}
      >
        {data.map((item) => (
          <HorizontalCollection {...item} key={item?.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalScroll;
