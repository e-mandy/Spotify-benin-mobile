import {
  AppWrapper,
  GoBack,
  Title,
  TrackShuffle,
} from "@/src/components/ui/common";
import ShowData from "@/src/components/ui/common/ShowData";
import { TrackItem } from "@/src/components/ui/common/TrackItem";
import { styles } from "@/src/constants/styles";
import { useFetch } from "@/src/hooks/use-fetch-api";
import { STREAM_URL } from "@env";
import { Image } from "expo-image";
import { useSearchParams } from "expo-router/build/hooks";
import React from "react";
import { FlatList, View } from "react-native";

const DayMixDetails = () => {
  const searchParams = useSearchParams();
  const dayMixId = parseInt(searchParams.get("mixeId"));

  const { isLoading, data: mixe } = useFetch(
    `${STREAM_URL}/stream/daymix/${dayMixId}`,
  );

  const playlistItems = mixe?.playlist?.map?.((mixe) => mixe.id);
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
            <Title className="text-center underline !text-muted font-spline-bold">
              {mixe.title}
            </Title>
          </View>
          <View className="flex flex-row justify-end mb-4">
            <TrackShuffle playlistName={mixe.title} songIds={playlistItems} />
          </View>
          <FlatList
            data={mixe.playlist}
            contentContainerStyle={{ gap: 5 }}
            renderItem={({ item }) => {
              return (
                <TrackItem
                  id={item.id}
                  photo={item.photo}
                  label={item.label}
                  artistName={item.artistName}
                  playlistName="Mixe Du Jour"
                  playlistItems={playlistItems}
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
