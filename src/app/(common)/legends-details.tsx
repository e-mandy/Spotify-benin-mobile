import {
  AppWrapper,
  GoBack,
  StyledText,
  Title,
} from "@/src/components/ui/common";
import ShowData from "@/src/components/ui/common/ShowData";
import { useFetch } from "@/src/hooks/use-fetch-api";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useSearchParams } from "expo-router/build/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    margin: "auto",
  },
});

const LegendsDetails = () => {
  const searchParams = useSearchParams();
  const legendId = searchParams.get("legendId");

  const { isLoading, data: legend } = useFetch(
    `${process.env.EXPO_PUBLIC_STREAM_URL}/stream/legends/${legendId}`,
  );

  return (
    <AppWrapper className="!p-0">
      <GoBack />
      <View className="p-4">
        <ShowData isLoading={isLoading}>
          <View>
            <View className="h-80 mb-2">
              <Image
                className="rounded-[35px] mx-3 opacity-15"
                style={styles.image}
                source={legend.photo}
                contentFit="cover"
              />
              <View className="w-100 h-100 absolute top-0 z-10 border-8 border-red-600 bg-black/80"></View>
            </View>
            <View className="absolute bottom-5 flex-row mx-2 flex max-w-[40%] items-center px-3 py-2 rounded-full bg-red-800/90 border border-red-500">
              <StyledText className="text-sm">
                <MaterialIcons size={20} name="verified" />
              </StyledText>
              <StyledText className="text-sm ms-1 uppercase font-spline-bold">
                Artiste vérifié
              </StyledText>
            </View>
          </View>
          <Title className="text-center font-spline-bold text-5xl">
            {legend.name}
          </Title>
        </ShowData>
      </View>
    </AppWrapper>
  );
};

export default LegendsDetails;
