import HorizontalScroll from "@/src/components/ui/common/HorizontalScroll";
import GenreArtist from "@/src/components/ui/search/GenreArtist";
import { genre_section } from "@/src/constants/genre_section";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const genre = () => {
  const genreId = useLocalSearchParams();

  return (
    <View>
      <HorizontalScroll data={genre_section} />
      <View>
        <GenreArtist />
      </View>
    </View>
  );
};

export default genre;
