import { MOCK_EXPLORATION } from "@/mocks/explorations.mock";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";
import Exploration from "./Exploration";

const MusicsExploration = () => {
  return (
    <View className="my-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-white">Explorez le Bénin</Text>
        <Link href="/(player)">
          <Text className="text-white font-semibold">VOIR TOUT</Text>
        </Link>
      </View>
      <FlatList
        className="py-2"
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
