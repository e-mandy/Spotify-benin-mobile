import { useSearch } from "@/src/hooks/use-search";
import { useSearchStore } from "@/src/store/search.store";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import MusicGenre from "./MusicGenre";

const ScrollGenres = () => {
  const allGenre = useSearchStore((state) => state.allGenreName);
  const fetchGenreName = useSearch().fetchGenreName;

  useEffect(() => {
    fetchGenreName();
  }, []);

  if (!allGenre) return null;
  return (
    <View className="my-5">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
        }}
      >
        {allGenre.map((genre) => (
          <MusicGenre name={genre?.name} key={genre?.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollGenres;
