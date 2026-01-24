import { truncate } from "@/src/utils/truncate";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SingleLegend = ({ legende }) => {
  const [isSeen, setIsSeen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsSeen(true);
    router.push(`/(common)/legends-details?legendId=${legende.id}`);
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      activeOpacity={0.7}
      key={legende.id}
      className="items-center mr-6 text-slate-400 mb-5"
    >
      <View className="w-24 h-24  mb-2">
        <Image
          contentFit="cover"
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            borderRadius: 100,
            margin: "auto",
            borderWidth: 3,
            borderColor: !isSeen ? "#f97315" : "#94a3b8",
          }}
          source={legende.photo}
        />
      </View>
      <Text className="text-xs font-bold text-gray-400 truncate">
        {truncate(legende.name, 15)}
      </Text>
    </TouchableOpacity>
  );
};

export default SingleLegend;
