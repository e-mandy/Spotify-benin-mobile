import AppWrapper from "@/src/components/ui/common/AppWrapper";
import ScrollGenres from "@/src/components/ui/common/ScrollGenres";
import SearchBar from "@/src/components/ui/common/SearchBar";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import Albums from "@/src/components/ui/search/Albums";
import BestSearch from "@/src/components/ui/search/BestSearch";
import Browse from "@/src/components/ui/search/Browse";
import MusicsExploration from "@/src/components/ui/search/MusicsExploration";
import ReconnaissanceVocale from "@/src/components/ui/search/ReconnaissanceVocale";
import Titles from "@/src/components/ui/search/Titles";
import { useSearch } from "@/src/hooks/use-search";
import { useSearchStore } from "@/src/store/search.store";
import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";

const Search = () => {
  const { searchResult } = useSearchStore();

  const { isLoading } = useSearch();

  return (
    <AppWrapper>
      <ScrollView showsVerticalScrollIndicator={false} className="px-3">
        <SecondaryTopBar topic="Rechercher" />
        <SearchBar placeholder="Artistes, titres ou genres" />
        {isLoading ? (
          <ActivityIndicator size={24} />
        ) : !searchResult || searchResult.length == 0 ? (
          <>
            <ReconnaissanceVocale />
            <ScrollGenres />
            <MusicsExploration />
            <Browse />
          </>
        ) : (
          <>
            <BestSearch />
            <Titles />
            <Albums />
          </>
        )}
      </ScrollView>
    </AppWrapper>
  );
};

export default Search;
