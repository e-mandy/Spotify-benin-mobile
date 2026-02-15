import { PlaylistCard } from "@/src/components/ui/common";
import React, { useState } from "react";
import { useWindowDimensions, View } from "react-native";
import { AppModal } from "./AppModal";

const PlaylistListItem = ({ icon, name, playlist = [] }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const handlePress = () => setModalOpen(true);

  const { height } = useWindowDimensions();

  return (
    <>
      <PlaylistCard onPress={handlePress} iconChild={icon} cardTitle={name} />
      <AppModal onClose={() => setModalOpen(false)} showModal={isModalOpen}>
        <View
          style={{ height: 0.7 * height }}
          className="w-full h- mx-auto py-6 px-4 bg-white rounded-2xl"
        ></View>
      </AppModal>
    </>
  );
};

export default PlaylistListItem;
