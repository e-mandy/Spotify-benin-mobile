import { truncate } from "@/src/utils/truncate";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 100,
    margin: "auto",
    borderColor: "#f97315",
    borderWidth: 3,
  },
});

const SingleLegend = ({ legende }) => {
  return (
    <View key={legende.id} className="items-center mr-6 mb-5">
      <View className="w-24 h-24  mb-2">
        <Image contentFit="cover" style={styles.image} source={legende.photo} />
      </View>
      <Text className="text-xs font-bold text-gray-400 truncate">
        {truncate(legende.name, 15)}
      </Text>
    </View>
  );
};

export default SingleLegend;
