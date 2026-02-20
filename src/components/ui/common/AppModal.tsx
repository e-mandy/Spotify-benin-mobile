import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { ReactNode, useCallback } from "react";
import { Modal, Pressable, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const AppModal = ({
  showModal,
  onClose,
  children,
}: {
  showModal: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  useFocusEffect(
    useCallback(() => {
      if (showModal) onClose();
    }, []),
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={onClose}
    >
      <GestureHandlerRootView>
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
      </GestureHandlerRootView>
    </Modal>
  );
};
