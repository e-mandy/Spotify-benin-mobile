import { InputRow, PlaylistCard, StyledText } from "@/src/components/ui/common";
import { notifSuccess } from "@/src/utils/react-toast";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import { AppModal } from "./AppModal";
import OutlinedButton from "./OutlinedButton";

const CreatePlaylist = ({ createPL }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [inputText, setInputText] = useState("");
  const handlePress = () => setModalOpen(true);
  const icon = <AntDesign color="#B6A0A0" size={40} name="plus" />;

  async function processPlaylistCreation() {
    if (!inputText) return;
    await createPL(inputText);
    notifSuccess("Playlist crée avec succès!");
    setModalOpen(false);
    setInputText("");
  }

  return (
    <>
      <PlaylistCard
        isCreationCard={true}
        onPress={handlePress}
        iconChild={icon}
        cardTitle="Créer une playlist"
      />
      <AppModal onClose={() => setModalOpen(false)} showModal={isModalOpen}>
        <View className="w-full mx-auto py-6 px-4 bg-white rounded-2xl">
          <StyledText className="text-[15px] mb-2 !text-black">
            Entrer le nom de la playlist:
          </StyledText>
          <InputRow
            onChangeText={(_, text) => setInputText(text)}
            name="playlist-name"
            className="!bg-white border !text-black"
            placeholder="Mes chansons préférées"
          />
          <OutlinedButton
            onPress={processPlaylistCreation}
            textClassName="!text-primary"
          >
            {" "}
            Créer{" "}
          </OutlinedButton>
        </View>
      </AppModal>
    </>
  );
};

export default CreatePlaylist;
