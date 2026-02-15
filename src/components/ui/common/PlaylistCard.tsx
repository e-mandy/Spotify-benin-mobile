import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface IPlaylistProps {
  iconChild: React.ReactNode;
  onPress: () => void;
  cardTitle: string;
  isCreationCard?: boolean;
}

const PlaylistCard = ({
  iconChild,
  onPress,
  cardTitle,
  isCreationCard = false,
}: IPlaylistProps) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View
          className={`my-2 justify-center items-center w-48 aspect-square rounded-lg bg-[#2A2020]  border-white/10 ${isCreationCard ? "border-2 border-dashed" : ""} `}
        >
          {iconChild}
        </View>
        <View>
          <Text className="font-bold text-[16px] text-muted">{cardTitle}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PlaylistCard;
