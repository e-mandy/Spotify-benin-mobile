import { useSubscription } from "@/src/hooks/use-has-subscribed";
import { truncate } from "@/src/utils/truncate";
import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";

type ArtistType = {};

const Artist = ({ photo, id, singerName: name }) => {
  const { subscribed, unsubscribed, hasSubscribed } = useSubscription(
    Number(id),
  );

  return (
    <View className="flex-row justify-between mb-6 items-center">
      <View className="flex-row items-center">
        <View className="h-14 w-14 overflow-hidden rounded-full mr-4">
          <ImageBackground
            className="w-full h-full"
            source={{
              uri: photo,
            }}
          />
        </View>
        <View>
          <StyledText className="text-lg font-bold">
            {truncate(name, 25)}
          </StyledText>
          <StyledText className="text-sm">Artiste</StyledText>
        </View>
      </View>
      <TouchableOpacity
        onPress={subscribed}
        disabled={hasSubscribed ? true : false}
        className="border border-white py-1 px-3 rounded-3xl"
      >
        <StyledText className="text-lg">
          {hasSubscribed ? "Suivi(e)" : "Suivre"}
        </StyledText>
      </TouchableOpacity>
    </View>
  );
};

export default Artist;
