import KeyboardPrevent from "@/src/components/keyboard-prevent";
import {
  AppBrand,
  AppWrapper,
  Button,
  InputRow,
  StyledText,
  Title,
} from "@/src/components/ui/common";
import { InputRowProps } from "@/src/interfaces/input-row.interface";
import React from "react";
import { View } from "react-native";

const Login = () => {
  const formFields: InputRowProps[] = [
    {
      prefixIcon: "account",
      placeholder: "Nom complet",
    },
    {
      prefixIcon: "email",
      placeholder: "Adresse e-mail",
    },
    {
      prefixIcon: "earth",
      placeholder: "Ethnie",
    },
    {
      prefixIcon: "calendar",
      placeholder: "Date de naissance",
    },
    {
      prefixIcon: "eye-off",
      placeholder: "Mot de passe",
      isPassword: true,
    },
  ];

  return (
    <AppWrapper className="flex flex-col items-center justify-center">
      <KeyboardPrevent>
        <View>
          <AppBrand />
        </View>

        <View>
          <Title className="text-center text-4xl"> Spotify Bénin </Title>
          <StyledText className="text-[16px] max-w-[85%]  mx-auto mt-4 text-muted font-spline-sans-regular text-center">
            Le rythme de notre culture, directement dans vos oreilles.
          </StyledText>

          <Title className="text-center mt-3 mb-4 text-3xl">
            Créez votre compte
          </Title>
        </View>
        <View className="mt-4 flex gap-y-8 w-[95%] max-w-[400px] mx-auto">
          {formFields.map((field) => (
            <InputRow
              key={field.prefixIcon}
              placeholder={field.placeholder}
              prefixIcon={field.prefixIcon}
              isPassword={field.isPassword}
            />
          ))}
          <View className="mt-5">
            <Button>S'inscrire</Button>
          </View>
        </View>
      </KeyboardPrevent>
    </AppWrapper>
  );
};

export default Login;
