import { useSearchStore } from "@/src/store/search.store";
import { notifyInfo } from "@/src/utils/react-toast";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Keyboard, TextInput, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";

interface ISearchBar {
  onChangeText?: (query: string) => void;
  placeholder: string;
  value?: string;
}

const SearchBar = ({ placeholder }: ISearchBar) => {
  const [search, setSearch] = useState<string>("");
  const [focus, setFocus] = useState(false);

  const { setQuery } = useSearchStore();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQuery(search);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleVoice = () => {
    return notifyInfo("This feature is coming soon");
  };

  const handleCancel = () => {
    Keyboard.dismiss();
    setSearch("");
    setFocus(false);
  };

  return (
    <View className="w-full h-16 rounded-full py-2 px-5 my-5 overflow-hidden bg-surface-dark flex-row items-center">
      <View className="relative flex-1">
        <EvilIcons
          name="search"
          size={30}
          color="white"
          className="absolute z-20 top-[50%] translate-y-[-50%]"
        />
        <TextInput
          className="pl-10 text-white h-full"
          placeholder={placeholder}
          value={search}
          placeholderTextColor="white"
          onChangeText={setSearch}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </View>
      {focus && (
        <TouchableOpacity onPress={handleCancel}>
          <StyledText className="uppercase text-sm px-2 py-1 rounded-full bg-surface-dark-100 font-semibold">
            Annuler
          </StyledText>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={handleVoice}
        className="object-contain w-10 h-10 justify-center items-center rounded-full"
      >
        <FontAwesome name="microphone" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
