import { truncate } from "@/src/utils/truncate";
import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

interface IMixeItem {
  coverImage: string;
  title: string;
  subtitle: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 25,
    margin: "auto",
    backgroundColor: "#0553",
  },
});

const SingleMixe = ({ mixe }: { mixe: IMixeItem }) => {
  return (
    <Pressable>
      <View className="w-36 mr-4 mt-4">
        <View className="h-40  mb-2">
          <Image
            className="rounded-[35px]"
            style={styles.image}
            source={mixe.coverImage}
            contentFit="cover"
          />
        </View>
        <StyledText className="font-spline-bold text-xl">
          {truncate(mixe.title, 14)}
        </StyledText>
        <StyledText className="font-bold truncate text-gray-700 text-sm whitespace">
          {truncate(mixe.subtitle, 15)}
        </StyledText>
      </View>
    </Pressable>
  );
};

export default SingleMixe;
