import { styles } from "@/src/constants/styles";
import { IMixeItem } from "@/src/interfaces/mixe-item.interface";
import { truncate } from "@/src/utils/truncate";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import StyledText from "./StyledText";

const SingleMixe = ({ mixe }: { mixe: IMixeItem }) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(`/(common)/day-mix-details?mixeId=${mixe.id}`)}
    >
      <View className="w-36 mr-4 mt-4">
        <View className="h-40  mb-2">
          <Image
            className="rounded-[35px]"
            style={styles.image}
            source={mixe.coverImage}
            contentFit="cover"
          />
        </View>
        <StyledText className="font-spline-bold text-xl">
          {truncate(mixe.title, 14)}
        </StyledText>
        <StyledText className="font-bold truncate text-gray-700 text-sm whitespace">
          {truncate(mixe.subtitle, 15)}
        </StyledText>
      </View>
    </Pressable>
  );
};

export default SingleMixe;
