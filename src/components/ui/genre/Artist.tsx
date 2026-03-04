import { truncate } from "@/src/utils/truncate";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, View } from "react-native";
import { StyledText } from "../common";

const Artist = ({ id, singerName: name, photo }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/(common)/legends-details?legendId=${id}`);
  };

  return (
    <Pressable onPress={handleClick} className="flex-col items-center gap-2">
      <View className="h-24 w-24 rounded-full overflow-hidden">
        <ImageBackground
          className="h-full w-full"
          source={{
            uri: photo,
          }}
        />
      </View>
      <StyledText className="text-xl">{truncate(name, 20)}</StyledText>
    </Pressable>
  );
};

export default Artist;
