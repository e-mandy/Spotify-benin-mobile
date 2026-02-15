import { useSearch } from "@/src/hooks/use-search";
import { useSearchStore } from "@/src/store/search.store";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import MusicGenre from "./MusicGenre";

const ScrollGenres = () => {
  const allGenre = useSearchStore((state) => state.allGenreName);
  const { fetchGenreName } = useSearch();

  useEffect(() => {
    const initializedGenre = async () => {
      await fetchGenreName();
    };

    initializedGenre();
    console.log(allGenre);
  }, []);

  if (!allGenre) return null;
  if (allGenre)
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
            <MusicGenre name={genre.label} id={genre.id} key={genre.id} />
          ))}
        </ScrollView>
      </View>
    );
};

export default ScrollGenres;
