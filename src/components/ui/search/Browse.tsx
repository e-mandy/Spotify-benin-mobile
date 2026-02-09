import { CATEOGORY_MOCK } from "@/mocks/categories.mock";
import React from "react";
import { FlatList, View } from "react-native";
import { StyledText } from "../common";
import Category from "./Category";

const Browse = () => {
  return (
    <View>
      <FlatList
        data={CATEOGORY_MOCK}
        renderItem={({ item: genre }) => <Category {...genre} />}
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
