import { MOCK_ALBUMS } from "@/mocks/albums.mock";
import { AppWrapper, DataLoader, GoBack } from "@/src/components/ui/common";
import ScrollItems from "@/src/components/ui/common/ScrollItems";
import ArtistsGenre from "@/src/components/ui/genre/ArtistsGenre";
import ArtistsGenreGrid from "@/src/components/ui/genre/ArtistsGenreGrid";
import TitlesGenre from "@/src/components/ui/genre/TitlesGenre";
import Albums from "@/src/components/ui/search/Albums";
import { SCROLL_SECTION } from "@/src/constants/scroll_section";
import { useGenre } from "@/src/hooks/use-genre";
import { useGenreStore } from "@/src/store/genre.store";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const Genre = () => {
  const genre = useLocalSearchParams() as { genre: string };
  const { isLoading } = useGenre(genre.genre);
  const currentSection = useGenreStore((state) => state.currentSection);

  if (isLoading) return <DataLoader />;
  // Le Record utilisé pour savoir exactement le type de clé et de valeur de l'objet
  const sections: Record<string, React.ReactNode> = {
    Tout: (
      <>
        <ArtistsGenre />
        <Albums
          headerTitle="Albums Incontournables"
          albums={MOCK_ALBUMS}
          isHeaderAll={false}
        />
        <TitlesGenre />
      </>
    ),
    Albums: (
      <Albums
        headerTitle="Albums Incontournables"
        albums={MOCK_ALBUMS}
        isHeaderAll={false}
      />
    ),
    Artistes: <ArtistsGenreGrid />,
    Titres: <TitlesGenre />,
  };
  return (
    <AppWrapper>
      <GoBack pageTitle={genre.genre} />
      <ScrollItems data={SCROLL_SECTION} />

      {sections[currentSection]}
    </AppWrapper>
  );
};

export default Genre;
