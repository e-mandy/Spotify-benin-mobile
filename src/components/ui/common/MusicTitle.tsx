import { useTrackStore } from "@/src/store/track-play.store";
import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  View
} from "react-native";
import StyledText from "./StyledText";
import TitleMenu from "./TitleMenu";

type TMusicTitle = {
  id: string;
  label: string;
  photo: string;
  author: string[];
};

const MusicTitle = ({ label: title, author, photo, id }: TMusicTitle) => {
  const { trackHandler, isPlaying, currentSong } = useTrackStore();

  const musicHandler = async () => {
    await trackHandler(id);
  };

  return (
    <Pressable
      onPress={musicHandler}
      className="w-full flex-row justify-between items-center p-2 my-2"
    >
      <View className="flex-row items-center">
        <View className="h-12 w-12 rounded-lg overflow-hidden mr-3">
          <ImageBackground
            className="w-full h-full"
            resizeMode="cover"
            source={{
              uri: photo,
            }}
          />
        </View>
        <View className="flex-col justify-start">
          <Text
            className="font-semibold text-lg text-white"
            style={{
              color:
                currentSong !== undefined &&
                currentSong?.info?.id === Number(id) &&
                isPlaying
                  ? "#d84141"
                  : "white",
            }}
          >
            {title}
          </Text>
          <StyledText className="text-sm text-white opacity-40">
            {author}
          </StyledText>
        </View>
      </View>
      <TitleMenu id={id} />
    </Pressable>
  );
};

export default MusicTitle;
