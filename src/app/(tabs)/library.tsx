import AppWrapper from "@/src/components/ui/common/AppWrapper";
import CollectionElementSection from "@/src/components/ui/common/CollectionElementSection";
import ScrollGenres from "@/src/components/ui/common/ScrollGenres";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import PinnedPlaylist from "@/src/components/ui/library/PinnedPlaylist";
import { useTrackStore } from "@/src/store/track-play.store";
import React from "react";
import { ScrollView, View } from "react-native";

const Library = () => {
  const { currentSong } = useTrackStore();
  return (
    <AppWrapper className="!px-3" withScrollView={false}>
      <View className="px-4">
        <SecondaryTopBar topic="Ma Bibliothèque" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-3">
          <ScrollGenres />
          <PinnedPlaylist />
        </View>
        <CollectionElementSection />
        {currentSong?.info?.id ? (
          <View className="h-48"></View>
        ) : (
          <View className="h-32"></View>
        )}
      </ScrollView>
    </AppWrapper>
  );
};

export default Library;
