import { AppWrapper, StyledText } from "@/src/components/ui/common";
import BuyACoffee from "@/src/components/ui/track-play/buy-a-coffee";
import TrackSeeker from "@/src/components/ui/track-play/seeker";
import TrackPlayPanel from "@/src/components/ui/track-play/track-play-panel";
import { styles } from "@/src/constants/styles";
import useTrackPlay from "@/src/store/track-play.store";
import { notifSuccess } from "@/src/utils/react-toast";
import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const TrackPlayer = () => {
  const router = useRouter();

  const trackPlay = useTrackPlay();
  const { height } = useWindowDimensions();

  return (
    <AppWrapper className="px-4">
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
            {" "}
            {trackPlay.playlistName}{" "}
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
          style={{ ...styles.image, marginTop: 10 }}
          source={trackPlay.cover}
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
            {" "}
            {trackPlay.title}{" "}
          </StyledText>
          <StyledText className="font-spline-bold text-white/80">
            {" "}
            {trackPlay.singer}{" "}
          </StyledText>
        </View>
        <View>
          <Text>
            {" "}
            <MaterialIcons color="#d84141" size={28} name="favorite" />{" "}
          </Text>
        </View>
      </View>
      <TrackSeeker />
      <View className="px-4">
        <TrackPlayPanel />
      </View>
      <BuyACoffee />
    </AppWrapper>
  );
};

export default TrackPlayer;
