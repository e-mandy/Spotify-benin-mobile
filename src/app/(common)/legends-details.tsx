import {
  AppWrapper,
  GoBack,
  StyledText,
  Title,
  TrackShuffle,
} from "@/src/components/ui/common";
import OutlinedButton from "@/src/components/ui/common/OutlinedButton";
import ShowData from "@/src/components/ui/common/ShowData";
import { useFetch } from "@/src/hooks/use-fetch-api";
import { useSubscription } from "@/src/hooks/use-has-subscribed";
import { useTrackStore } from "@/src/store/track-play.store";
import { notifError } from "@/src/utils/react-toast";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

  const { subscribed, unsubscribed, hasSubscribed, error } = useSubscription(
    parseInt(legendId),
  );

  const mostKnownSongs = legend.songs ?? [];

  const albums = legend.albums ?? [];

  const { currentSong, playFromPlaylist } = useTrackStore();
  const isTheSongOnTrack = (id) => +id === +currentSong?.info?.id;

  const play = async (id) => {
    const playlist = mostKnownSongs.map((song) => song.id);
    await playFromPlaylist(`Légende - ${legend.name}`, playlist, id);
    router.push("/(player)");
  };

  useEffect(() => {
    if (error) {
      const messageLabel = hasSubscribed
        ? "lors du désabonnement"
        : "lors de l'abonnement";
      notifError(`Une erreur est survenue ${messageLabel}`);
    }
  }, [error]);

  return (
    <AppWrapper className="!p-0">
      <GoBack />
      <View className="px-8">
        <ShowData isLoading={isLoading}>
          <View>
            <View className="h-80 mb-2 bg-black">
              <Image
                className="rounded-4xl mx-3 opacity-15"
                style={styles.image}
                source={legend.photo}
                contentFit="cover"
              />
              <View className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background-dark"></View>
            </View>
            <View>
              <View className="absolute bottom-5 flex-row mx-2 flex max-w-[40%] items-center px-3 py-1 rounded-full bg-red-800/90 border border-red-500">
                <StyledText className="text-sm">
                  <MaterialIcons size={20} name="verified" />
                </StyledText>
                <StyledText className="text-sm ms-1  uppercase font-spline-bold">
                  Artiste vérifié
                </StyledText>
              </View>
            </View>
          </View>
          <Title className="text-center font-bold text-4xl font-spline-sans-regular  ">
            {legend.name}
          </Title>
          <View className="flex items-center flex-row">
            <StyledText className="text-xl !text-gray-400">
              <Text className="font-spline-bold text-white">1.2M</Text> écoutes
              mensuelles
            </StyledText>
            <Text className="text-xl">
              {" "}
              <Entypo
                size={40}
                color="#6b7280"
                className="text-gray-500"
                name="dot-single"
              />{" "}
            </Text>
            <StyledText className="text-xl !text-gray-400">
              <Text className="text-white">500k</Text> abonnés
            </StyledText>
          </View>
          <View className="flex flex-row justify-between items-center">
            <View>
              {!hasSubscribed ? (
                <OutlinedButton
                  className="rounded-full w-full border-muted/40"
                  onPress={subscribed}
                >
                  S'abonner
                </OutlinedButton>
              ) : (
                <OutlinedButton
                  onPress={unsubscribed}
                  className="rounded-full w-full border-primary/80 bg-red-800/80"
                >
                  Abonné <FontAwesome size={20} name="check" />
                </OutlinedButton>
              )}
            </View>
            <TrackShuffle
              songIds={mostKnownSongs.map((s) => s.id)}
              playlistName={`Légende - ${legend.name}`}
            />
          </View>

          <View className="my-3">
            <Title className="mt-3">Populaire</Title>
            <View>
              {mostKnownSongs.map((song, index) => {
                return (
                  <TouchableOpacity
                    className={`mt-2 ${isTheSongOnTrack(song.id) ? "border rounded-3xl border-primary py-1 px-3" : ""}`}
                    onPress={() => play(song.id)}
                    activeOpacity={0.7}
                    key={song.id}
                  >
                    <View className="flex flex-row my-4 justify-between items-center">
                      <View className="flex flex-row items-center gap-x-4">
                        <View>
                          <Text className="font-spline-bold text-orange-800">
                            {" "}
                            {index + 1}{" "}
                          </Text>
                        </View>
                        <View className="h-14 w-14 rounded-ful">
                          <Image
                            className="rounded-full bg-black"
                            style={{ ...styles.image, borderRadius: 1000 }}
                            source={song.photo}
                            contentFit="cover"
                          />
                        </View>
                        <View>
                          <Title
                            className={`text-xl ${isTheSongOnTrack(song.id) ? "!text-primary" : ""}`}
                          >
                            {song.label}
                          </Title>
                          <View className="flex flex-row items-center gap-x-2">
                            <Text>
                              <MaterialIcons
                                size={24}
                                color="#4b5564"
                                name="explicit"
                              />
                            </Text>
                            <Text className="text-sm text-muted font-semibold">
                              {Math.floor(
                                Math.random() * 18_000_000 + 180_000,
                              ).toLocaleString("FR-fr")}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <Text>
                          <FontAwesome5 color="#B6A0A0" name="ellipsis-v" />
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View>
            <View className="flex flex-row items-center justify-between">
              <View>
                <Title className="mt-3">Discographie</Title>
              </View>
              <View>
                <TouchableOpacity activeOpacity={0.5}>
                  <Title className="text-sm tracking-wide text-primary">
                    TOUT VOIR
                  </Title>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {albums.map((album) => {
                  return (
                    <TouchableOpacity activeOpacity={0.7} key={album.id}>
                      <View className="gap-y-2 mr-5 mt-5">
                        <View className="h-36 w-36 rounded-full bg-black">
                          <Image
                            className="rounded-full bg-black"
                            style={{ ...styles.image, borderRadius: 25 }}
                            source={album.photo}
                            contentFit="cover"
                          />
                        </View>
                        <View>
                          <StyledText className="text-sm">
                            {" "}
                            {album.label}{" "}
                          </StyledText>
                          <Text className="text-muted text-xl">
                            {" "}
                            {`${new Date(album.releaseDate).getFullYear()}-album`}{" "}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>

          <View className="p-4 rounded-xl border border-muted bg-muted/15 mt-5">
            <Title className="mb-2">À propos</Title>
            <Text
              numberOfLines={3}
              className="text-xl text-muted font-spline-regular"
            >
              {legend.bio}
            </Text>
          </View>
        </ShowData>
      </View>
    </AppWrapper>
  );
};

export default LegendsDetails;
