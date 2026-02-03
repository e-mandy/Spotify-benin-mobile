import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="w-full h-16 rounded-full py-2 px-5 my-5 overflow-hidden bg-surface-dark flex-row items-center">
      <View className="relative flex-1">
        <EvilIcons
          name="search"
          size={30}
          color="white"
          className="absolute z-20 top-[50%] translate-y-[-60%]"
        />
        <TextInput
          className="pl-10"
          placeholder="Artistes, titres ou genres"
          value=""
          placeholderTextColor="white"
        />
      </View>
      <FontAwesome name="microphone" size={24} color="white" />
    </View>
  );
};

export default SearchBar;
