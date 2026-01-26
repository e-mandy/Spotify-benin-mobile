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
import { notifSuccess } from "@/src/utils/react-toast";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useSearchParams } from "expo-router/build/hooks";
import React, { useState } from "react";
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
  const [hasSubscribe, setSubscribe] = useState(false);

  const { isLoading, data: legend } = useFetch(
    `${process.env.EXPO_PUBLIC_STREAM_URL}/stream/legends/${legendId}`,
  );

  function handleSubscribe() {
    setSubscribe(true);
    notifSuccess("Vous venez de vous abonner");
  }

  const mostKnownSongs = [
    {
      id: 1,
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDFCLkjmgEEf2ZFjUp7sa0Ml1Y4Bzp3maruRSDHH8RN2SftddHU6oi1dJIIC4zHhSXSJv5kxcrmPD8HAhamfc20-ruW-fQs1uoaipRDVov9tMZ04_CYAzsMOgcq5yvMR2wOHfRJWVaQtk4n5mDE2mMwQx48MpRd_3MF-b0LIBb2r007UBEgF_egIsupGIqou8FkICuVs5-4Yoz9lOwzWPAU_oLkibh5sav9R87eERuRS0EokWBTxXos4BChw49seBrtSi2nB6vF7Ojj",
      label: "Batonga",
      auditors: 12565987,
    },
    {
      id: 2,
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-D33YzZpKbu8wH7Bp3dY9QprSSiO1jbmMkyKZBNqJwzIakT4z9u36Zcuju7lLANXYXquQ0PMc9N_x3L1ezGNVPlKbqs_g47pn5wG02NZsaTT-5TFdsjSy59ui_5VhUvKaGtgz1s2cMWd3gbUQuO49rTY8xl1_1iHONQTPm4SCpxx5sXhiW5p4ftaEA-olndX56ZTIzsunVRRNQs6-p81fktT5Glm3GAAkD-YwAWk6yoV06QI6vVZAhRrUIXAa7pDIommtquDmjdWn",
      label: "We we",
      auditors: 1852360,
    },
  ];

  const albums = [
    {
      id: 1,
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-D33YzZpKbu8wH7Bp3dY9QprSSiO1jbmMkyKZBNqJwzIakT4z9u36Zcuju7lLANXYXquQ0PMc9N_x3L1ezGNVPlKbqs_g47pn5wG02NZsaTT-5TFdsjSy59ui_5VhUvKaGtgz1s2cMWd3gbUQuO49rTY8xl1_1iHONQTPm4SCpxx5sXhiW5p4ftaEA-olndX56ZTIzsunVRRNQs6-p81fktT5Glm3GAAkD-YwAWk6yoV06QI6vVZAhRrUIXAa7pDIommtquDmjdWn",
      release_year: 2025,
      label: "Celia",
    },
    {
      id: 2,
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2nDKvTrtr-xMk1GZBr5pyiYOElk3uGNGdQg_WVnA_FLk0XAfPtAqokzWj6sLaQtC-nsK_Mvpiqr35vOtDBjUDMZhT3izW_-_joBQLOXMW4sDZ24ZfbJeDGsNTDdOpP8VFaV3obpK2jL1rK-AKtpX8P2IWGhD48A0jy3640__PKfjJISnizBZeQy_HW4Q-36q3Tm8qeS6iztq0EuymU4OU_Z3VDlbS3E353E9oMya8y0B02V7HYUdL-370iOTB1r8R4wgjnKwYuT0T",
      release_year: 2025,
      label: "Mother nature",
    },
  ];

  return (
    <AppWrapper className="!p-0">
      <GoBack />
      <View className="px-4">
        <ShowData isLoading={isLoading}>
          <View>
            <View className="h-80 mb-2">
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
              {!hasSubscribe ? (
                <OutlinedButton
                  className="rounded-full w-full border-muted/40"
                  onPress={handleSubscribe}
                >
                  S'abonner
                </OutlinedButton>
              ) : (
                <OutlinedButton
                  disable={true}
                  className="rounded-full w-full border-primary/80 bg-red-800/80"
                >
                  Abonné <FontAwesome size={20} name="check" />
                </OutlinedButton>
              )}
            </View>
            <TrackShuffle />
          </View>

          <View className="my-3">
            <Title className="mt-3">Populaire</Title>
            <View>
              {mostKnownSongs.map((song, index) => {
                return (
                  <TouchableOpacity activeOpacity={0.7} key={song.id}>
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
                            source={song.cover}
                            contentFit="cover"
                          />
                        </View>
                        <View>
                          <Title>{song.label}</Title>
                          <View className="flex flex-row items-center gap-x-2">
                            <Text>
                              <MaterialIcons
                                size={24}
                                color="#4b5564"
                                name="explicit"
                              />
                            </Text>
                            <Text className="text-xl text-muted font-semibold">
                              {song.auditors.toLocaleString("FR-fr")}
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
                  <Title className="text-xl  text-primary">TOUT VOIR</Title>
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
                        <View className="h-36 w-36 rounded-full">
                          <Image
                            className="rounded-full bg-black"
                            style={{ ...styles.image, borderRadius: 25 }}
                            source={album.cover}
                            contentFit="cover"
                          />
                        </View>
                        <View>
                          <Title> {album.label} </Title>
                          <Text className="text-muted text-xl">
                            {" "}
                            {`${album.release_year}-album`}{" "}
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
