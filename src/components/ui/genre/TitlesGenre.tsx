import { useGenreStore } from "@/src/store/genre.store";
import React from "react";
import { View } from "react-native";
import MusicTitle from "../common/MusicTitle";
import ResearchNotFound from "../common/ResearchNotFound";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const TitlesGenre = () => {
  const titresGenre = useGenreStore((state) => state.currentGenreInfo?.titles);
  if (!titresGenre) return <ResearchNotFound section="Titres Populaires" />;
  return (
    <View className="mb-28">
      <SearchCollectionHeader title="Titres Populaires" isAll={false} />
      <View className="w-full my-4">
        {titresGenre.map((title) => (
          <MusicTitle {...title} key={title.id} />
        ))}
      </View>
    </View>
  );
};

export default TitlesGenre;
