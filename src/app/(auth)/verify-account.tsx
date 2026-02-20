import {
    AppWrapper,
    Button,
    CircleBrand,
    GoBack,
    OtpFormInput,
    StyledText,
    Title,
} from "@/src/components/ui/common";
import { getAxiosInstance } from "@/src/lib/axios.config";
import { countRecordDuration } from "@/src/utils/count-time";
import { notifError, notifSuccess } from "@/src/utils/react-toast";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, View } from "react-native";

const VerifyAccount = () => {
  const http = getAxiosInstance();

  const { email, tempToken } = useLocalSearchParams();
  const [remainingTime, setRemainingTime] = useState(0);
  const MAX_TIME_BEFORE_RESENT = 2 * 60; //2min
  const [isCodeResent, setCodeResent] = useState(false);
  const [isLoading, setLoading] = useState(false);

  async function handleAccountValidation(otp) {
    try {
      setLoading(true);
      const payload = {
        tempToken,
        code: otp,
      };
      const response = await http.post("/auth/2fa/validate", payload);
      notifSuccess("Votre compte vient d'être validé");
      router.push("/(auth)/login");
    } catch (error) {
      console.log(error.response.data);
      notifError("Le code est expiré ou invalide");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let timerId = null;
    if (remainingTime > 0 && isCodeResent) {
      timerId = setInterval(() => {
        setRemainingTime((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    if (remainingTime == 0) {
      setCodeResent(false);
    }
    return () => clearInterval(timerId);
  }, [isCodeResent]);

  async function resentOtp() {
    if (remainingTime === 0) {
      try {
        setRemainingTime(MAX_TIME_BEFORE_RESENT);
        setCodeResent(true);
        const payload = {
          tempToken,
        };
        const response = await http.post("/auth/2fa/resend", payload);
        notifSuccess("Le code a bien été renvoyé à votre adresse e-mail");
      } catch (error) {
        console.log(error, error.response.data);
        notifError("Une erreur est survenue! Veuillez réessayez");
      }
    }
  }

  return (
    <AppWrapper className="!bg-black/90">
      <GoBack />
      <View>
        <CircleBrand
          icon="lock"
          className="border-2 border-red-500 shadow-red-300 shadow-sm"
        />

        <Title className="text-center">
          Vérification de l'adresse email renseignée
        </Title>

        <StyledText className="text-center font-spline-regular mt-6 text-[17px] text-muted">
          Veuillez saisir le code à 06 chiffres envoyés à l'adresse email
          {` ${email.slice(0, 3)}${"*".repeat(8)} ${email.slice(-4)}`}
        </StyledText>
      </View>

      <View className="my-10">
        <OtpFormInput onFilled={handleAccountValidation} />
      </View>

      <Button isLoading={isLoading} prefixIcon="arrow-right-thin">
        Vérifiez le code
      </Button>

      <View className="flex items-center mt-5 justify-center gap-x-3">
        {remainingTime > 0 && (
          <StyledText>
            <AntDesign
              className="me-3"
              name="clock-circle"
              color="#6b7280"
              size={17}
            />
            <StyledText className="text-[16px] text-gray-500">
              Renvoyer possible dans
              <StyledText className="text-red-600 text-[16px]">
                {countRecordDuration(remainingTime)}
              </StyledText>
            </StyledText>
          </StyledText>
        )}

        <Pressable onPress={resentOtp}>
          <StyledText className="text-[17px] font-extrabold underline underline-offset-8  decoration-red-600 mt-5 text-center">
            Renvoyer le code
          </StyledText>
        </Pressable>
      </View>
    </AppWrapper>
  );
};

export default VerifyAccount;
