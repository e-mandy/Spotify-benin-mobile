import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { StyledText } from "../common";

const { width } = Dimensions.get("screen");

type CategoryProps = {
  id: string;
  name: string;
  image: string;
  color: string;
};

const Category = ({ name, image, color }: CategoryProps) => {
  return (
    <View
      className="relative h-28 max-w-[150px] rounded-2xl overflow-hidden mb-4"
      style={{ width: width * 0.43, backgroundColor: color }}
    >
      <StyledText className="text-xl font-bold absolute left-3 top-3">
        {name}
      </StyledText>
      <View className="h-20 w-14 absolute bg-white bottom-[-5] right-[-5] rotate-[25deg]">
        <ImageBackground
          className="w-full h-full"
          source={require("@/assets/images/mkay.jpeg")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Category;
