import AppWrapper from "@/src/components/ui/common/AppWrapper";
import ScrollGenres from "@/src/components/ui/common/ScrollGenres";
import SearchBar from "@/src/components/ui/common/SearchBar";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import BestSearch from "@/src/components/ui/search/BestSearch";
import Browse from "@/src/components/ui/search/Browse";
import MusicsExploration from "@/src/components/ui/search/MusicsExploration";
import ReconnaissanceVocale from "@/src/components/ui/search/ReconnaissanceVocale";
import Titles from "@/src/components/ui/search/Titles";
import { useFetch } from "@/src/hooks/use-fetch-api";
import { useSearchStore } from "@/src/store/search.store";
import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView } from "react-native";

const Search = () => {
  const { setResults, query: searchQuery } = useSearchStore();

  const { data, isLoading } = useFetch(
    `${process.env.EXPO_PUBLIC_API_URL}/api/search?query=${searchQuery}`,
  );

  useEffect(() => {
    if (data && data.length != 0) setResults(data);
  }, [data]);

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
            <Titles />
          </>
        )}
      </ScrollView>
    </AppWrapper>
  );
};

export default Search;
