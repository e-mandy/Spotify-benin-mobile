import { useFetch } from "@/src/hooks/use-fetch-api";
import React from "react";
import { ScrollView, View } from "react-native";
import { StyledText } from "../common";
import ShowData from "../common/ShowData";
import SingleLegend from "./SingleLegend";

const BenineseLegends = () => {
  const { isLoading, data: legends } = useFetch(
    `${process.env.EXPO_PUBLIC_STREAM_URL}/stream/legends`,
  );

  return (
    <View>
      <View className="flex flex-row items-center justify-between">
        <StyledText className="font-spline-bold mb-5">Légendes</StyledText>
      </View>

      <ShowData isLoading={isLoading}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {legends.map((legende) => (
            <SingleLegend key={legende.id} legende={legende} />
          ))}
        </ScrollView>
      </ShowData>
    </View>
  );
};

export default BenineseLegends;
