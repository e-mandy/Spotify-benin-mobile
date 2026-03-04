import { useFavorite } from "@/src/hooks/use-favorite";
import { notifSuccess } from "@/src/utils/react-toast";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Divider, Menu } from "react-native-paper";

const TitleMenu = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const closeMenu = () => setVisible(false);
  const { makeFavorite, isFavorite } = useFavorite(id);
  const openMenu = () => setVisible(true);

  const onFavorite = () => {
    makeFavorite();
    notifSuccess("Une chanson a été ajoutée à vos favoris.");
    closeMenu();
  };
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchorPosition="top"
      anchor={
        <TouchableOpacity
          onPress={openMenu}
          className="h-8 w-8 items-center justify-center"
        >
          <MaterialIcons name="more-vert" size={24} color="#9ca3af" />
        </TouchableOpacity>
      }
    >
      <Menu.Item
        onPress={() => setModalOpen(true)}
        title="Ajouter à la playlist"
      />
      {!isFavorite && (
        <Menu.Item onPress={onFavorite} title="Ajouter aux favoris" />
      )}
      <Divider />
      <Menu.Item onPress={() => setVisible(false)} title="Fermer" />
    </Menu>
  );
};

export default TitleMenu;
