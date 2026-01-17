import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ReactNode } from "react";
import { Modal, Pressable, View } from "react-native";

export const AppModal = ({
  showModal,
  onClose,
  children,
}: {
  showModal: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={onClose}
    >
      <View
        className="backdrop-blur-lg backdrop-brightness-50 px-4"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        {children}

        <Pressable className="mt-2" onPress={onClose}>
          <MaterialCommunityIcons size={50} name="close-box" color="#b91c1c" />
        </Pressable>
      </View>
    </Modal>
  );
};
