import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StyledText } from "../common";

const mixes = [
  {
    title: "Afrobeat Daily",
    subtitle: "Fela, Wizkid...",
    cover: "http://localhost:9999/static/img/mix-2-cover.png",
  },
  {
    title: "Cotonou Chill",
    subtitle: "Détente au bord de l'eau",
    cover: "http://localhost:9999/static/img/mix-3-cover.png",
  },
  {
    title: "Highlife Classics",
    subtitle: "Les rois de la guitare",
    cover: "http://localhost:9999/static/img/mix-1-cover.png",
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
    width: "75%",
    margin: "auto",
    backgroundColor: "#0553",
  },
});

const MixDuJour = () => {
  return (
    <>
      <View className="flex flex-row items-center justify-between">
        <StyledText className="font-spline-bold">Mix du Jour</StyledText>
        <StyledText className="text-gray-600 text-sm font-bold ">
          VOIR TOUT
        </StyledText>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-8"
      >
        {mixes.map((item, index) => (
          <View key={index} className="w-40 mr-8 mt-4">
            <View className="h-40 rounded-[35px] bg-[#251e1e] mb-2 p-3">
              <Image
                style={styles.image}
                source={item.cover}
                contentFit="cover"
              />
            </View>
            <StyledText className="font-spline-bold text-xl">
              {item.title}
            </StyledText>
            <StyledText className="font-spline-light  text-gray-500 text-sm">
              {item.subtitle}
            </StyledText>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default MixDuJour;
