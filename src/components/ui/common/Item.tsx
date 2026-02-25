import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Item = ({ name }: { name: string }) => {
  return (
    <TouchableOpacity className="py-2 px-5 rounded-full border border-surface-dark-100 bg-surface-dark-300">
      <Text className="font-semibold text-white text-center text-lg">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
