import AppWrapper from "@/src/components/ui/common/AppWrapper";
import CollectionElementSection from "@/src/components/ui/common/CollectionElementSection";
import ScrollGenres from "@/src/components/ui/common/ScrollGenres";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import PinnedPlaylist from "@/src/components/ui/library/PinnedPlaylist";
import React from "react";
import { ScrollView, View } from "react-native";

const Library = () => {
  return (
    <AppWrapper withScrollView={false}>
      <SecondaryTopBar topic="Ma Bibliothèque" />
      <ScrollGenres />
      <PinnedPlaylist />
      <ScrollView className="flex-1">
        <CollectionElementSection />
        <View className="h-40"></View>
      </ScrollView>
    </AppWrapper>
  );
};

export default Library;
