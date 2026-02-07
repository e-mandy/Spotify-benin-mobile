import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const MusicsExploration = () => {
  return (
    <View className="my-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-white">Explorez le Bénin</Text>
        <Link href="/(player)">
          <Text className="text-white font-semibold">VOIR TOUT</Text>
        </Link>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

export default MusicsExploration;
