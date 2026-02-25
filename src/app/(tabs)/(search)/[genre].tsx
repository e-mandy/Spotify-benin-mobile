import { AppWrapper, GoBack } from "@/src/components/ui/common";
import ScrollItems from "@/src/components/ui/common/ScrollItems";
import GenreArtists from "@/src/components/ui/genre/ArtistsGenre";
import { SCROLL_SECTION } from "@/src/constants/scroll_section";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const Genre = () => {
  console.log("J'arrive dessus.");
  const genre = useLocalSearchParams() as { genre: string };
  console.log(genre);
  return (
    <AppWrapper>
      <GoBack pageTitle={genre.genre} />
      <ScrollItems data={SCROLL_SECTION} />
      <GenreArtists />
    </AppWrapper>
  );
};

export default Genre;
