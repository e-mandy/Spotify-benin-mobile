import KeyboardPrevent from "@/src/components/keyboard-prevent";
import {
  AppBrand,
  AppWrapper,
  Button,
  InputRow,
  StyledText,
  Title,
} from "@/src/components/ui/common";
import { ModalEmailSent } from "@/src/components/ui/common/ModalEmailSent";
import { notifError } from "@/src/utils/react-toast";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { z } from "zod";

const Login = () => {
  const router = useRouter();
  const [showEmailSentModal, setShowEmailSentModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const onChange = (_, text) => setUserEmail(text);

  const handleSubmit = () => {
    const { error } = z.email().safeParse(userEmail);

    if (error) {
      notifError("Adresse email invalide!");
    } else {
      setShowEmailSentModal(true);
    }
  };

  const onModalClose = () => setShowEmailSentModal(false);

  return (
    <AppWrapper withScrollView={false} className="!bg-black/90">
      <KeyboardPrevent scrollable={true}>
        <View>
          <AppBrand />
        </View>

        <View>
          <Title className="text-center text-4xl"> M19 </Title>
          <StyledText className="text-[16px] max-w-[85%]  mx-auto mt-4 text-muted font-spline-sans-regular text-center py-1">
            Vous avez oublié votre mot de passe ?
          </StyledText>
        </View>

        <View className="mt-4 flex gap-y-6 w-[95%] max-w-[400px] mx-auto">
          <View>
            <InputRow
              name="email"
              onChangeText={onChange}
              placeholder="Adresse e-mail"
            />
          </View>

          <View className="mt-5">
            <Button onPress={handleSubmit} prefixIcon="send-circle">
              <StyledText>Envoyer</StyledText>
            </Button>
          </View>
        </View>
      </KeyboardPrevent>

      <View className="flex flex-row text-[15px] items-center justify-center mx-auto">
        <StyledText className="py-2">
          <TouchableOpacity
            className="flex flex-row items-center"
            onPress={() => router.push("/(auth)/login")}
          >
            <MaterialCommunityIcons color="#ef4444" name="arrow-down-left" />
            <StyledText className="text-[15px] text-red-500 ms-2">
              Retourner à la page de connexion
            </StyledText>
          </TouchableOpacity>
        </StyledText>
      </View>
      <ModalEmailSent showModal={showEmailSentModal} onClose={onModalClose} />
    </AppWrapper>
  );
};

export default Login;
