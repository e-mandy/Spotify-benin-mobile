import { useGenreStore } from "@/src/store/genre.store";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Item = ({ name }: { name: string }) => {
  const { setCurrentSection, currentSection } = useGenreStore();
  const handleClick = () => {
    setCurrentSection(name);
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        backgroundColor:
          currentSection.toLowerCase() === name.toLowerCase()
            ? "#d84141"
            : "#2A2020",
      }}
      className="py-2 px-5 rounded-full border border-surface-dark-100"
    >
      <Text className="font-semibold text-white text-center text-lg">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
