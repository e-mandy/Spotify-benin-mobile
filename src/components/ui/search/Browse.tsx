import { CATEOGORY_MOCK } from "@/mocks/categories.mock";
import React from "react";
import { FlatList, View } from "react-native";
import { StyledText } from "../common";
import Cateogory from "./Cateogory";

const Browse = () => {
  return (
    <View>
      <View>
        <StyledText className="font-bold">Parcourir tout</StyledText>
      </View>
      <FlatList
        data={CATEOGORY_MOCK}
        renderItem={({ item: genre }) => <Cateogory {...genre} />}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Browse;
