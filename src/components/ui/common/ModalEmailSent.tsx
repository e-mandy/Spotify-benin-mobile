import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { AppModal } from "./AppModal";
import Button from "./Button";
import StyledText from "./StyledText";
import Title from "./Title";

export const ModalEmailSent = ({ onClose, showModal }) => {
  return (
    <AppModal onClose={onClose} showModal={showModal}>
      <View className="rounded-2xl shadow-lg bg-card-dark p-6">
        <View className="flex items-center text-center">
          <StyledText>
            <MaterialCommunityIcons color="#fff" size={50} name="email" />
          </StyledText>
        </View>

        <Title className="text-white text-center font-spline-bold mt-2">
          Email envoyé
        </Title>
        <StyledText className="font-spline-light text-[15px] my-3 text-center">
          Veuillez vérifier votre boîte de réception pour les instructions de
          réinitialisation.
        </StyledText>
        <Button
          onPress={onClose}
          className="py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors"
        >
          D'accord
        </Button>
      </View>
    </AppModal>
  );
};
