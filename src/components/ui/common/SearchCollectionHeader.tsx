import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

type SearchCollection = {
  title: string;
  path: any;
  isAll?: boolean;
};

const SearchCollectionHeader = ({
  title,
  path,
  isAll = true,
}: SearchCollection) => {
  return (
    <View className="flex-row justify-between items-center">
      <StyledText className="font-bold">{title}</StyledText>
      {isAll && (
        <Link href={path}>
          <StyledText className="text-sm font-bold">VOIR TOUT</StyledText>
        </Link>
      )}
    </View>
  );
};

export default SearchCollectionHeader;
