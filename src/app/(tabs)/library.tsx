import AppWrapper from "@/src/components/ui/common/AppWrapper";
import CollectionElementSection from "@/src/components/ui/common/CollectionElementSection";
import ScrollGenres from "@/src/components/ui/common/ScrollGenres";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import PinnedPlaylist from "@/src/components/ui/library/PinnedPlaylist";
import { useTrackStore } from "@/src/store/track-play.store";
import React from "react";
import { View } from "react-native";

const Library = () => {
  const { currentSong } = useTrackStore();
  return (
    <AppWrapper withScrollView={false}>
      <SecondaryTopBar topic="Ma Bibliothèque" />
      <ScrollGenres />
      <PinnedPlaylist />
      <CollectionElementSection />

      {currentSong?.info?.id ? (
        <View className="h-48"></View>
      ) : (
        <View className="h-32"></View>
      )}
    </AppWrapper>
  );
};

export default Library;
