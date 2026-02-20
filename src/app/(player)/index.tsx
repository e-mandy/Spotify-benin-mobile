import { AppWrapper, StyledText } from "@/src/components/ui/common";
import BuyACoffee from "@/src/components/ui/track-play/buy-a-coffee";
import TrackSeeker from "@/src/components/ui/track-play/seeker";
import TrackPlayPanel from "@/src/components/ui/track-play/track-play-panel";
import { styles } from "@/src/constants/styles";
import { useFavorite } from "@/src/hooks/use-favorite";
import { useTrackStore } from "@/src/store/track-play.store";
import { notifSuccess } from "@/src/utils/react-toast";
import { truncate } from "@/src/utils/truncate";
import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const TrackPlayer = () => {
  const router = useRouter();

  const { currentSong, playlists } = useTrackStore();
  const trackPlay = currentSong?.info;
  const playlistName = playlists.name;
  const { isFavorite, makeFavorite, unFavorite, error } = useFavorite(
    currentSong.info.id,
  );
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (error) notifSuccess("Une erreur est survenue avec les favoris");
  }, [error]);

  return (
    <AppWrapper withScrollView={false} className="px-4">
      <View className="flex-row justify-between items-center">
        <View>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.5}>
            <Text>
              <Entypo color="#fff" size={25} name="chevron-down" />
            </Text>
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
          <Text className="text-primary text-sm uppercase font-spline-sans-regular font-bold tracking-widest">
            Lecture en cours
          </Text>
          <Text className="text-xl text-gray-400 font-spline-bold">
            {truncate(playlistName, 35)}
          </Text>
        </View>
        <View>
          <FontAwesome5 size={20} color="#fff" name="ellipsis-h" />
        </View>
      </View>
      <View
        style={{
          padding: 10,
          height: height * 0.65,
          width: "100%",
          marginHorizontal: "auto",
          maxHeight: 350,
        }}
      >
        <Image
          contentFit="cover"
          style={{ ...styles.image, marginTop: 10 }}
          source={trackPlay?.cover}
        />
        <TouchableOpacity
          onPress={() => notifSuccess("Hé hé.. Coming soon")}
          activeOpacity={0.8}
          className="absolute right-5 bottom-5 flex-row items-center gap-x-2 font-spline-bold bg-muted rounded-full px-3 py-1"
        >
          <Text>
            <FontAwesome5 size={15} name="microphone-alt" color="#d84141" />
          </Text>
          <Text className="text-white text-sm font-spline-bold"> PAROLES </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-between">
        <View className="flex gap-y-3 p-3">
          <StyledText className="text-4xl font-bold font-spline-sans-regular">
            {truncate(trackPlay.title, 15)}
          </StyledText>
          <StyledText className="font-spline-bold text-white/80">
            {truncate(trackPlay.singer, 30)}
          </StyledText>
        </View>
        <View>
          <Text>
            {isFavorite ? (
              <TouchableOpacity onPress={unFavorite} activeOpacity={0.5}>
                <MaterialIcons color="#d84141" size={32} name="favorite" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={makeFavorite}>
                <MaterialIcons
                  color="#d84141"
                  size={32}
                  name="favorite-outline"
                />
              </TouchableOpacity>
            )}
          </Text>
        </View>
      </View>
      <TrackSeeker />
      <View className="px-4">
        <TrackPlayPanel />
      </View>
      <BuyACoffee artistName={trackPlay.singer} />
    </AppWrapper>
  );
};

export default TrackPlayer;
