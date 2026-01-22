import { truncate } from "@/src/utils/truncate";
import { Image } from "expo-image";
import React from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { StyledText } from "../common";

const mixes = [
  {
    title: "Afrobeat Daily",
    subtitle: "Fela, Wizkid...",
    cover:
      "https://acute-going-expired-map.trycloudflare.com/static/img/mix-2-cover.png",
  },
  {
    title: "Cotonou Chill",
    subtitle: "Détente au bord de l'eau",
    cover:
      "https://acute-going-expired-map.trycloudflare.com/static/img/mix-3-cover.png",
  },
  {
    title: "Highlife Classics",
    subtitle: "Les rois de la guitare",
    cover:
      "https://acute-going-expired-map.trycloudflare.com/static/img/mix-1-cover.png",
  },
];

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

const MixDuJour = () => {
  return (
    <>
      <View className="flex flex-row items-center justify-between">
        <StyledText className="font-spline-bold">Mix du Jour</StyledText>
        <Pressable>
          <StyledText className="text-gray-700 text-sm font-bold ">
            VOIR TOUT
          </StyledText>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-8"
      >
        {mixes.map((item, index) => (
          <Pressable key={index}>
            <View className="w-36 mr-4 mt-4">
              <View className="h-40  mb-2">
                <Image
                  className="rounded-[35px]"
                  style={styles.image}
                  source={item.cover}
                  contentFit="cover"
                />
              </View>
              <StyledText className="font-spline-bold text-xl">
                {truncate(item.title, 14)}
              </StyledText>
              <StyledText className="font-bold truncate text-gray-700 text-sm">
                {truncate(item.subtitle, 15)}
              </StyledText>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
};

export default MixDuJour;
