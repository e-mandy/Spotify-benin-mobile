import { MOCK_ALBUMS } from "@/mocks/albums.mock";
import { AppWrapper, GoBack } from "@/src/components/ui/common";
import ScrollItems from "@/src/components/ui/common/ScrollItems";
import ArtistsGenre from "@/src/components/ui/genre/ArtistsGenre";
import TitlesGenre from "@/src/components/ui/genre/TitlesGenre";
import Albums from "@/src/components/ui/search/Albums";
import { SCROLL_SECTION } from "@/src/constants/scroll_section";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const Genre = () => {
  const genre = useLocalSearchParams() as { genre: string };
  console.log(genre);
  return (
    <AppWrapper>
      <GoBack pageTitle={genre.genre} />
      <ScrollItems data={SCROLL_SECTION} />
      <ArtistsGenre />
      <Albums
        headerTitle="Albums Incontournables"
        albums={MOCK_ALBUMS}
        isHeaderAll={false}
      />
      <TitlesGenre />
    </AppWrapper>
  );
};

export default Genre;
