import { useFetch } from "@/src/hooks/use-fetch-api";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SingleMixe, StyledText } from "../common";
import ShowData from "../common/ShowData";

const MixDuJour = () => {
  const { isLoading, data: mixes } = useFetch(
    `${process.env.EXPO_PUBLIC_STREAM_URL}/stream/daymix`,
  );

  const router = useRouter();

  return (
    <>
      <View className="flex flex-row items-center justify-between">
        <StyledText className="font-spline-bold">Mix du Jour</StyledText>
        <TouchableOpacity onPress={() => router.push("/(common)/all-mixes")}>
          <StyledText className="text-gray-800 text-sm font-bold ">
            VOIR TOUT
          </StyledText>
        </TouchableOpacity>
      </View>
      <ShowData isLoading={isLoading}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mixes.map((item, index) => (
            <SingleMixe
              key={index}
              mixe={{
                coverImage: item.coverImage,
                title: item.title,
                subtitle: item.subtitle,
              }}
            />
          ))}
        </ScrollView>
      </ShowData>
    </>
  );
};

export default MixDuJour;
