import { MOCK_EXPLORATION } from "@/mocks/explorations.mock";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { StyledText } from "../common";
import Exploration from "./Exploration";

const MusicsExploration = () => {
  return (
    <View className="my-4">
      <View className="flex-row items-center justify-between">
        <StyledText className="font-bold">Explorez le Bénin</StyledText>
        <Link href="/(player)">
          <Text className="text-white font-semibold">VOIR TOUT</Text>
        </Link>
      </View>
      <FlatList
        className="py-6"
        data={MOCK_EXPLORATION}
        renderItem={({ item: category }) => (
          <Exploration
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
          />
        )}
        horizontal
        contentContainerStyle={{
          flexDirection: "row",
          gap: 20,
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MusicsExploration;
