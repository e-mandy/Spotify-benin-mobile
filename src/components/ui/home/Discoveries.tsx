import { useFetch } from "@/src/hooks/use-fetch-api";
import React from "react";
import { View } from "react-native";
import { StyledText } from "../common";
import ShowData from "../common/ShowData";
import { TrackItem } from "../common/TrackItem";

const Discoveries = () => {
  const { isLoading, data: discoveries } = useFetch(
    `${process.env.EXPO_PUBLIC_STREAM_URL}/stream/daymix/1`,
  );

  return (
    <View>
      <View className="flex flex-row items-center justify-between">
        <StyledText className="font-spline-bold mb-8">Découvertes</StyledText>
      </View>
      <ShowData isLoading={isLoading}>
        {(discoveries as any).playlist?.map?.((track, i) => (
          <TrackItem
            key={i}
            id={track.id}
            label={track.label}
            artistName={track.artistName}
            photo={track.photo}
          />
        ))}
      </ShowData>
      <View className="mt-36" />
    </View>
  );
};

export default Discoveries;
