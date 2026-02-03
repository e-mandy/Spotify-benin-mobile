import React, { ReactNode } from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

type SecondaryTopBar = {
  topic: string;
  profileUser?: ReactNode;
};

const SecondaryTopBar = ({ topic, profileUser }: SecondaryTopBar) => {
  return (
    <View className="flex-row justify-between items-center px-5 mt-3">
      <StyledText className="text-4xl font-bold">{topic}</StyledText>
    </View>
  );
};

export default SecondaryTopBar;
