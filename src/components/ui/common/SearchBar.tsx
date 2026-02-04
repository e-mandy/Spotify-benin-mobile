import { useSearchStore } from "@/src/store/search.store";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface ISearchBar {
  onChangeText?: (query: string) => void;
  placeholder: string;
  value?: string;
}

const SearchBar = ({ placeholder }: ISearchBar) => {
  const { setQuery } = useSearchStore();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => setQuery(search), 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

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
          placeholder={placeholder}
          value={search}
          placeholderTextColor="white"
          onChangeText={setSearch}
        />
      </View>
      <TouchableOpacity className="object-contain w-10 h-10 justify-center items-center rounded-full">
        <FontAwesome name="microphone" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
