import { genresMusicaux } from "@/mocks/genres.mock";
import { useSearchStore } from "@/src/store/search.store";
import React from "react";
import { ScrollView, View } from "react-native";
import MusicGenre from "./MusicGenre";

const ScrollGenres = () => {
  const { musicGenres } = useSearchStore();

  return (
    <View className="my-5">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
        }}
      >
        {genresMusicaux.map((category, index) => (
          <MusicGenre name={category} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollGenres;
