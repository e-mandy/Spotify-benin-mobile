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
import { signupSchema } from "@/src/schema/signup.schema";
import useAuth from "@/src/store/auth.store";
import { notifError, notifSuccess } from "@/src/utils/react-toast";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const Login = () => {
  const router = useRouter();
  const login = useAuth((state) => state.login);

  const formFields: InputRowProps[] = [
    {
      prefixIcon: "account",
      placeholder: "Nom complet",
      name: "username",
    },
    {
      prefixIcon: "email",
      placeholder: "Adresse e-mail",
      name: "email",
    },
    {
      prefixIcon: "earth",
      placeholder: "Ethnie",
      name: "ethnicity",
    },
    {
      prefixIcon: "calendar",
      placeholder: "Date de naissance",
      isDateField: true,
      name: "birthday",
    },
    {
      prefixIcon: "lock",
      placeholder: "Mot de passe",
      secureTextEntry: true,
      name: "password",
    },
  ];

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    username: "",
    ethnicity: "",
    birthday: null,
  });

  const onChange = (fieldName, value) =>
    setUserInfo({ ...userInfo, [fieldName]: value });

  const handleSubmit = () => {
    const { error, success } = signupSchema.safeParse(userInfo);
    if (success) {
      notifSuccess("Formulaire soumis!");
    } else {
      const currentError = Object.values(error.flatten().fieldErrors)[0][0];
      notifError(currentError);
    }
  };

  return (
    <AppWrapper>
      <KeyboardPrevent>
        <View>
          <AppBrand />
        </View>

        <View>
          <Title className="text-center text-4xl"> M19 </Title>
          <StyledText className="text-[16px] max-w-[85%]  mx-auto mt-4 text-muted font-spline-sans-regular text-center py-1">
            Le rythme de notre culture, directement dans vos oreilles.
          </StyledText>

          <Title className="text-center mt-3 mb-4 text-3xl">
            Créez votre compte
          </Title>
        </View>
        <View className="mt-4 flex gap-y-6 w-[95%] max-w-[400px] mx-auto">
          {formFields.map((field) => (
            <InputRow
              onChangeText={onChange}
              key={field.prefixIcon}
              {...field}
            />
          ))}
          <View className="mt-5">
            <Button onPress={handleSubmit} prefixIcon="arrow-right-thin">
              S'inscrire
            </Button>
          </View>

          {/* <Divider /> */}

          <View>
            <View className="flex flex-row text-[15px] items-center mx-auto">
              <StyledText className="flex flex-row text-[15px] items-center">
                Vous avez déjà un compte ?{" "}
              </StyledText>
              <StyledText>
                <TouchableOpacity
                  className="mt-2"
                  onPress={() => router.push("/(auth)/login")}
                >
                  <StyledText className="text-[15px] text-red-500 ms-2">
                    Se connecter
                  </StyledText>
                </TouchableOpacity>{" "}
              </StyledText>
            </View>
          </View>
        </View>
      </KeyboardPrevent>
    </AppWrapper>
  );
};

export default Login;
