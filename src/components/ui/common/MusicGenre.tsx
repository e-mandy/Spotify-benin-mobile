import React from "react";
import { Pressable, Text } from "react-native";

type MusicGenre = {
  name: string;
};

const MusicGenre = ({ name }: MusicGenre) => {
  return (
    <Pressable className="py-2 px-3 rounded-full border border-surface-dark-100 bg-surface-dark-300">
      <Text className="font-semibold text-white text-center text-base">
        {name}
      </Text>
    </Pressable>
  );
};

export default MusicGenre;
