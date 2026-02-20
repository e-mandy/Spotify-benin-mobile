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
import { signInSchema } from "@/src/schema/signin.schema";
import useAuth from "@/src/store/auth.store";
import { notifError } from "@/src/utils/react-toast";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const Login = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const formFields: InputRowProps[] = [
    {
      prefixIcon: "email",
      name: "email",
      placeholder: "Adresse e-mail",
    },
    {
      prefixIcon: "lock",
      name: "password",
      placeholder: "Mot de passe",
      secureTextEntry: true,
    },
  ];

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const login = useAuth((state) => state.handleLogin);

  const onChange = (fieldName, value) =>
    setUserInfo({ ...userInfo, [fieldName]: value });

  const handleSubmit = async () => {
    const { error, success } = signInSchema.safeParse(userInfo);
    if (success) {
      setLoading(true);
      const res = await login(userInfo);
      if (res.data.tempToken) {
        router.push(
          `/(auth)/send-forgot-pass-mail?tempToken=${res.data.tempToken}`,
        );
      }
      setLoading(false);
    } else {
      const currentError = Object.values(error.flatten().fieldErrors)[0][0];
      notifError(currentError);
    }
  };

  return (
    <AppWrapper className="!bg-black/90">
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
            Bon retour parmi nous
          </Title>
        </View>
        <View className="mt-4 flex gap-y-6 w-[95%] max-w-[400px] mx-auto">
          {formFields.map((field) => (
            <InputRow
              key={field.prefixIcon}
              onChangeText={onChange}
              {...field}
            />
          ))}
          <View className="flex flex-row justify-end -mt-2">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/send-forgot-pass-mail")}
            >
              <StyledText className="text-[16px] font-spline-sans-regular text-muted">
                Mot de passe oublié ?
              </StyledText>
            </TouchableOpacity>
          </View>
          <View className="mt-5">
            <Button
              isLoading={isLoading}
              onPress={handleSubmit}
              prefixIcon="login"
            >
              Se connecter
            </Button>
          </View>

          {/* <Divider /> */}

          <View className="flex flex-row text-[15px] items-center justify-center mx-auto">
            <StyledText className="text-[15px]">
              Vous n’avez pas de compte ?
            </StyledText>
            <StyledText className="py-2">
              <TouchableOpacity
                className="block mt-2"
                onPress={() => router.push("/(auth)")}
              >
                <StyledText className="text-[15px] text-red-500 ms-2">
                  S’inscrire
                </StyledText>
              </TouchableOpacity>
            </StyledText>
          </View>
        </View>
      </KeyboardPrevent>
    </AppWrapper>
  );
};

export default Login;
