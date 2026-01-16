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
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const Login = () => {
  const router = useRouter();

  const formFields: InputRowProps[] = [
    {
      prefixIcon: "email",
      placeholder: "Adresse e-mail",
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
          <StyledText className="text-[16px] max-w-[85%]  mx-auto mt-4 text-muted font-spline-sans-regular text-center py-1">
            Le rythme de notre culture, directement dans vos oreilles.
          </StyledText>

          <Title className="text-center mt-3 mb-4 text-3xl">
            Bon retour parmi nous
          </Title>
        </View>
        <View className="mt-4 flex gap-y-6 w-[95%] max-w-[400px] mx-auto">
          {formFields.map((field) => (
            <InputRow
              key={field.prefixIcon}
              placeholder={field.placeholder}
              prefixIcon={field.prefixIcon}
              isPassword={field.isPassword}
            />
          ))}
          <View className="mt-5">
            <Button prefixIcon="login">Se connecter</Button>
          </View>

          {/* <Divider /> */}

          <View className="flex flex-row text-[15px] items-center justify-center mx-auto">
            <StyledText className="flex flex-row text-[15px] items-center">
              Vous n'avez pas de compte ?{" "}
            </StyledText>
            <StyledText>
              <TouchableOpacity onPress={() => router.push("/(auth)")}>
                <StyledText className="text-[15px] text-red-500 ms-2">
                  S'inscrire
                </StyledText>
              </TouchableOpacity>{" "}
            </StyledText>
          </View>
        </View>
      </KeyboardPrevent>
    </AppWrapper>
  );
};

export default Login;
