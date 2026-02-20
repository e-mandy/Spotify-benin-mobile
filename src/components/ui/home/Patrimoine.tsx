import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { Button, StyledText } from "../common";

const Patrimoine = () => {
  return (
    <View className="rounded-3xl bg-red-900 p-6 mb-8">
      <View className="flex flex-row items-center mb-5 gap-x-3 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm w-1/2">
        <StyledText className="text-xl">
          <MaterialIcons name="history-edu" size={18} color="#ffcdcd" />
        </StyledText>
        <StyledText className="text-[14px] uppercase tracking-wider font-spline-regular font-bold">
          Patrimoine
        </StyledText>
      </View>
      <StyledText className="text-3xl font-bold text-white mb-2">
        Le Patrimoine{"\n"}Sonore
      </StyledText>
      <Text className="text-sm text-[#ffcdcd] mb-4">
        Redécouvrez les classiques du Dahomey numérisés.
      </Text>

      <View className="absolute right-[25px] top-[45px]">
        <View className="w-24 h-24 rounded-full bg-black border-4 border-[#222] items-center justify-center rotate-12 shadow-2xl">
          <View className="w-8 h-8 rounded-full bg-orange-600 items-center justify-center">
            <View className="w-2 h-2 rounded-full bg-black" />
          </View>
        </View>
        <View
          style={{ width: 10, height: 10 }}
          className="w-15 h-15 absolute right-[30px] bottom-10 rotate-12"
        >
          <Image
            width={2}
            height={2}
            className="bg-no-repeat w-15 h-15 rounded-md"
            style={{ width: 60, height: 60 }}
            source={require("@/assets/images/tradi-instrument.png")}
          />
        </View>
      </View>

      <View className="mt-5">
        <Button
          prefixIcon="arrow-right-thin"
          className="!py-3 px-4 !bg-white text-start !items-start !justify-start max-w-[70%]"
          textStyle="!text-red-900 text-xl"
          colorIcon="#7f1d1d"
        >
          Explorer les archives
        </Button>
      </View>
    </View>
  );
};

export default Patrimoine;
