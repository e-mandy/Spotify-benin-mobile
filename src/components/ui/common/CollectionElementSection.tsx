import { MOCK_PLAYLIST } from "@/mocks/playlists.mock";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, View } from "react-native";
import CollectionCard from "./CollectionCard";
import StyledText from "./StyledText";

const CollectionElementSection = () => {
  return (
    <View>
      <FlatList
        data={MOCK_PLAYLIST}
        renderItem={({ item }) => (
          <CollectionCard {...item}>
            {/* {item.image === "" && <Ionicons name="musical-note" size={30} />} */}
          </CollectionCard>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View className="w-full flex-row justify-between">
            <View className="flex-row gap-2">
              <Ionicons name="filter" size={24} />
              <StyledText>Récents</StyledText>
            </View>
            <Ionicons name="grid" size={24} />
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{}}
      />
    </View>
  );
};

export default CollectionElementSection;
