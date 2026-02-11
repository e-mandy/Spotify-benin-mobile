import { Link } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

type HorizontalCollectionType = {
  name: string;
  id?: string;
};

const HorizontalCollection = ({ name, id }: HorizontalCollectionType) => {
  return (
    <Link
      href={{
        pathname: "/(tabs)/(search)/genre",
        params: { id: id },
      }}
      asChild
    >
      <Pressable className="py-2 px-3 rounded-full border border-surface-dark-100 bg-surface-dark-300">
        <Text className="font-semibold text-white text-center text-base">
          {name}
        </Text>
      </Pressable>
    </Link>
  );
};

export default HorizontalCollection;
