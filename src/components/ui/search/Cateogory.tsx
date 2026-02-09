import React from "react";
import { Dimensions, View } from "react-native";
import { StyledText } from "../common";

const { width } = Dimensions.get("screen");

type Category = {
  id: string;
  name: string;
  image: string;
  color: string;
};

const Cateogory = ({ name, image, color }: Category) => {
  return (
    <View
      className={`relative h-20 rounded-full overflow-hidden`}
      style={{ width: width * 0.48 }}
    >
      <StyledText className="text-xl font-semibold absolute top-2 left-1">
        {name}
      </StyledText>
    </View>
  );
};

export default Cateogory;
