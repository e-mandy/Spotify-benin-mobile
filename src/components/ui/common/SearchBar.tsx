import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="w-full h-16 rounded-full py-2 px-5 pr-10 bg-blue-200 flex-row items-center">
      <View className="relative w-full m-auto">
        <EvilIcons
          name="search"
          size={30}
          color="white"
          className="absolute z-20 top-[50%] translate-y-[-70%]"
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

const styles = StyleSheet.create({});
