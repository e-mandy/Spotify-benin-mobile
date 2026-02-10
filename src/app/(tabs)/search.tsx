import AppWrapper from "@/src/components/ui/common/AppWrapper";
import ScrollGenres from "@/src/components/ui/common/ScrollGenres";
import SearchBar from "@/src/components/ui/common/SearchBar";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import BestSearch from "@/src/components/ui/search/BestSearch";
import Browse from "@/src/components/ui/search/Browse";
import MusicsExploration from "@/src/components/ui/search/MusicsExploration";
import ReconnaissanceVocale from "@/src/components/ui/search/ReconnaissanceVocale";
import { useSearchStore } from "@/src/store/search.store";
import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";

const Search = () => {
  const searchQuery = useSearchStore((state) => state.query);
  // const { data, isLoading } = useFetch(
  //   `${process.env.MUSIC_APP_BASE_URL}/profile/me`,
  // );
  const data = ["a"];
  const isLoading = false;
  console.log(data);

  return (
    <AppWrapper>
      <ScrollView showsVerticalScrollIndicator={false} className="px-3">
        <SecondaryTopBar topic="Rechercher" />
        <SearchBar placeholder="Artistes, titres ou genres" />
        {isLoading ? (
          <ActivityIndicator size={24} />
        ) : !data || data.length == 0 ? (
          <>
            <ReconnaissanceVocale />
            <ScrollGenres />
            <MusicsExploration />
            <Browse />
          </>
        ) : (
          <>
            <BestSearch />
          </>
        )}
      </ScrollView>
    </AppWrapper>
  );
};

export default Search;
