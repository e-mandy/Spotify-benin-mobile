import { useSearchStore } from "@/src/store/search.store";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, View } from "react-native";
import { StyledText } from "../common";

const BestSearch = () => {
  const bestSearch = useSearchStore((state) => state.searchResult[0]);

  if (!bestSearch) return null;

  return (
    <View className="w-full mb-5">
      <StyledText className="mb-5 font-bold">Meilleur résultat</StyledText>
      <View className="w-full border p-4 rounded-2xl bg-surface-dark-300 border-surface-dark-100">
        <View className="relative h-20 w-20 my-4">
          <View className="w-full h-full rounded-full z-40 bg-blue-400 overflow-hidden">
            <ImageBackground
              className="h-full w-full"
              source={require(bestSearch["photo"])}
            />
          </View>
          <View className="absolute -bottom-1 -right-1 bg-primary flex-col items-center justify-center h-8 w-8 z-50 rounded-full">
            <Ionicons name="play" size={15} color="white" />
          </View>
        </View>
        <View>
          <StyledText className="font-bold mb-3">
            {bestSearch["singerName"]}
          </StyledText>
          <View className="flex-row items-center gap-2">
            <StyledText className="text-sm bg-surface-dark-100 rounded-2xl py-1 px-2">
              ARTISTE
            </StyledText>
            <FontAwesome name="circle" size={5} color="white" />
            <StyledText className="text-sm">La Diva d'Afrique</StyledText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BestSearch;
