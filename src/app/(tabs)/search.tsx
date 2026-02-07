import AppWrapper from "@/src/components/ui/common/AppWrapper";
import ScrollCategories from "@/src/components/ui/common/ScrollCategories";
import SearchBar from "@/src/components/ui/common/SearchBar";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import MusicsExploration from "@/src/components/ui/search/MusicsExploration";
import ReconnaissanceVocale from "@/src/components/ui/search/ReconnaissanceVocale";
import React from "react";
import { ScrollView } from "react-native";

const Search = () => {
  return (
    <AppWrapper>
      <ScrollView showsVerticalScrollIndicator={false} className="px-3">
        <SecondaryTopBar topic="Rechercher" />
        <SearchBar placeholder="Artistes, titres ou genres" />
        <ReconnaissanceVocale />
        <ScrollCategories />
        <MusicsExploration />
      </ScrollView>
    </AppWrapper>
  );
};

export default Search;
