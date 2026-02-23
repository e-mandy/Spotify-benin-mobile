import { getAxiosInstance } from "@/src/lib/axios.config";
import { notifSuccess, notifyInfo } from "@/src/utils/react-toast";
import { truncate } from "@/src/utils/truncate";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Coffee, Heart } from "lucide-react-native";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export const CoffeeModal = ({ artistName }) => {
  const coffeeOptions = [
    {
      id: 1,
      amount: "500",
      label: "Un petit café",
      icon: "numeric-1-circle",
    },
    {
      id: 2,
      amount: "2000",
      label: "Un bon repas",
      icon: "numeric-2-circle",
    },
    {
      id: 3,
      amount: "5000",
      label: "Soutien total",
      icon: "numeric-3-circle",
    },
  ] as const;

  const handlePayment = async (amount: number) => {
    const http = getAxiosInstance();

    const payload = {
      amount,
      currency: "XOF",
    };
    try {
      const res = await http.post("/buy/donations", payload);
      console.log(res.data);
      notifyInfo("Veuillez confirmer le paiement sur votre téléphone");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable className="flex-1 bg-black/10 justify-end">
      <Pressable className="bg-surface-dark rounded-t-[30px] p-6 border-t border-white/10">
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <View className="bg-primary p-2 rounded-full mr-3">
              <Coffee size={20} color="white" />
            </View>
            <Text className="text-white text-xl font-bold">
              Soutenir {truncate(artistName, 25)}
            </Text>
          </View>
        </View>

        <Text className="text-gray-400 mb-6 leading-5">
          Ton soutien permet à l‘artiste de continuer à produire de la qualité.
          Tous les dons sont reversés directement.
        </Text>

        {coffeeOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            className="bg-white/5 border border-white/10 p-4 rounded-2xl flex-row items-center justify-between mb-3"
            onPress={() => handlePayment(+option.amount)}
          >
            <View className="flex-row items-center">
              <Text className="text-2xl mr-3">
                <MaterialCommunityIcons
                  color="#fff"
                  size={25}
                  name={option.icon}
                />
              </Text>
              <View>
                <Text className="text-white font-semibold">{option.label}</Text>
                <Text className="text-gray-500 text-xs">
                  Paiement Mobile / Carte
                </Text>
              </View>
            </View>
            <Text className="text-primary font-bold">{option.amount} FCFA</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => notifSuccess("Soon guy! Soon")}
          className="mt-4 flex-row items-center justify-center bg-transparent border border-primary p-4 rounded-2xl"
        >
          <Heart size={18} color="#d84141" className="mr-2" />
          <Text className="text-primary font-bold">Montant personnalisé</Text>
        </TouchableOpacity>

        <View className="mt-6 items-center">
          <Text className="text-gray-600 text-[10px] uppercase tracking-widest">
            Secured by FedaPay
          </Text>
        </View>
      </Pressable>
    </Pressable>
  );
};

export default CoffeeModal;
