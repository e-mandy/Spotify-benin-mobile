import { useSearch } from "@/src/hooks/use-search";
import { useSearchStore } from "@/src/store/search.store";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { StyledText } from "../common";
import Category from "./Category";

const Browse = () => {
  const { fetchCategories } = useSearch();
  const categories = useSearchStore((state) => state.categories);

  useEffect(() => {
    const getCategories = async () => {
      await fetchCategories();
    };

    getCategories();
  }, []);

  if (!categories || categories.length === 0) return null;

  return (
    <View className="mb-28">
      <FlatList
        data={categories}
        renderItem={({ item: categories }) => <Category {...categories} />}
        numColumns={2}
        ListHeaderComponent={() => (
          <View>
            <StyledText className="font-bold">Parcourir tout</StyledText>
          </View>
        )}
        ListHeaderComponentStyle={{
          marginBottom: 15,
        }}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

export default Browse;
