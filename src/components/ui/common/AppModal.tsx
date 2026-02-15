import { Ionicons } from "@expo/vector-icons";
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
          <Ionicons name="close-circle-outline" size={40} color="#d84141" />
        </Pressable>
      </View>
    </Modal>
  );
};
