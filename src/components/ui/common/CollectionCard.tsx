import React from "react";
import {
    Dimensions,
    ImageBackground,
    Pressable,
    Text,
    View,
} from "react-native";
import StyledText from "./StyledText";

const { width } = Dimensions.get("screen");

export type CollectionProps = {
  id: string;
  title: string;
  isAuthor: boolean;
  children?: React.ReactNode;
  type?: string;
  image?: string;
  author?: string;
};

const CollectionCard = ({
  children,
  title,
  isAuthor,
  type,
  author,
}: CollectionProps) => {
  return (
    <View className="mb-4">
      <Pressable
        className="flex-col items-center justify-center h-56 rounded-lg bg-surface-dark-100"
        style={{
          width: width * 0.4,
        }}
      >
        {children ? (
          <View className="bg-red-700">{children}</View>
        ) : (
          <ImageBackground
            className="w-full h-full"
            resizeMode="cover"
            source={require("@/assets/images/mkay.jpeg")}
          />
        )}
      </Pressable>
      <View>
        <StyledText className="font-bold text-xl text-white mb-1">
          {title}
        </StyledText>
        <Text className="flex-row items-center text-white" numberOfLines={1}>
          {isAuthor ? "Par vous" : `${type.toUpperCase()} - ${author}`}
        </Text>
      </View>
    </View>
  );
};

export default CollectionCard;
