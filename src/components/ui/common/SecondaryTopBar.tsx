import React, { ReactNode } from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

type TSecondaryTopBar = {
  topic: string;
  profileUser?: ReactNode;
};

const SecondaryTopBar = ({ topic, profileUser }: TSecondaryTopBar) => {
  return (
    <View className="flex-row justify-between items-center mt-3">
      <StyledText className="text-4xl font-bold">{topic}</StyledText>
      {profileUser}
    </View>
  );
};

export default SecondaryTopBar;
