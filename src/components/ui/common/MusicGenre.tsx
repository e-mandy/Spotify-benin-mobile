import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

type MusicGenre = {
  name: string;
  id: string;
};

const MusicGenre = ({ name, id }: MusicGenre) => {
  const router = useRouter();
  const handleGenre = () => {
    router.push({
      pathname: "/genre-[id]",
      params: { id: id },
    });
  };
  return (
    <Pressable
      onPress={() => handleGenre}
      className="py-2 px-3 rounded-full border border-surface-dark-100 bg-surface-dark-300"
    >
      <Text className="font-semibold text-white text-center text-base">
        {name}
      </Text>
    </Pressable>
  );
};

export default MusicGenre;
