import { AppWrapper, GoBack, Title } from "@/src/components/ui/common";
import ShowData from "@/src/components/ui/common/ShowData";
import { TrackItem } from "@/src/components/ui/common/TrackItem";
import { styles } from "@/src/constants/styles";
import { useFetch } from "@/src/hooks/use-fetch-api";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useSearchParams } from "expo-router/build/hooks";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const DayMixDetails = () => {
  const searchParams = useSearchParams();
  const dayMixId = parseInt(searchParams.get("mixeId"));

  const { isLoading, data: mixe } = useFetch(
    `${process.env.EXPO_PUBLIC_STREAM_URL}/stream/daymix/${dayMixId}`,
  );
  return (
    <AppWrapper withScrollView={false}>
      <GoBack pageTitle="Détails de cette mixe" />
      <View className="p-4">
        <ShowData isLoading={isLoading}>
          <View className="h-72 mb-2 shadow-2xl">
            <Image
              className="rounded-[35px] mx-3"
              style={styles.image}
              source={mixe.coverImage}
              contentFit="contain"
            />
          </View>
          <View className="my-4">
            <Title className="text-center underline !text-gray-500 font-spline-bold">
              {mixe.title}
            </Title>
          </View>
          <View className="flex flex-row items-center justify-end gap-5 mb-5">
            <TouchableOpacity className="p-4 rounded-full items-center border border-gray-400 bg-black/50">
              <Text className="text-white">
                <FontAwesome name="random" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 rounded-full items-center border border-gray-400 bg-black/50">
              <Text className="text-white">
                <Entypo name="controller-play" />
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={mixe.playlist}
            contentContainerStyle={{ gap: 5 }}
            renderItem={({ item }) => {
              return (
                <TrackItem
                  photo={item.photo}
                  label={item.label}
                  artistName={item.artistName}
                />
              );
            }}
          />
        </ShowData>
      </View>
    </AppWrapper>
  );
};

export default DayMixDetails;
