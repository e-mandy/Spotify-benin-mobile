import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type MusicGenre = {
  name: string;
  id: string;
};

const MusicGenre = ({ name, id }: MusicGenre) => {
  const router = useRouter();
  const handleGenre = () => {
    router.push({
      pathname: "/[genre]",
      params: { genre: name },
    });
  };
  return (
    <TouchableOpacity
      onPress={handleGenre}
      className="py-2 px-3 rounded-full border border-surface-dark-100 bg-surface-dark-300"
    >
      <Text className="fon t-semibold text-white text-center text-base">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default MusicGenre;
