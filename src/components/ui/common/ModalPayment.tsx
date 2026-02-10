import { Coffee, Heart } from "lucide-react-native";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export const CoffeeModal = ({ artistName }) => {
  const coffeeOptions = [
    { id: 1, amount: "500", label: "☕ Un petit café", emoji: "😊" },
    { id: 2, amount: "2000", label: "🍱 Un bon repas", emoji: "🔥" },
    { id: 3, amount: "5000", label: "🚀 Soutien total", emoji: "👑" },
  ];

  return (
    <Pressable className="flex-1 bg-black/60 justify-end">
      <Pressable className="bg-su rounded-t-[30px] p-6 border-t border-white/10">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <View className="bg-[#9D2721] p-2 rounded-full mr-3">
              <Coffee size={20} color="white" />
            </View>
            <Text className="text-white text-xl font-bold">
              Soutenir {artistName}
            </Text>
          </View>
        </View>

        <Text className="text-gray-400 mb-6 leading-5">
          Ton soutien permet à l'artiste de continuer à produire de la qualité.
          Tous les dons sont reversés directement.
        </Text>

        {/* Options */}
        {coffeeOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            className="bg-white/5 border border-white/10 p-4 rounded-2xl flex-row items-center justify-between mb-3"
            onPress={() => console.log(`Don de ${option.amount} FCFA`)}
          >
            <View className="flex-row items-center">
              <Text className="text-2xl mr-3">{option.emoji}</Text>
              <View>
                <Text className="text-white font-semibold">{option.label}</Text>
                <Text className="text-gray-500 text-xs">
                  Paiement Mobile / Carte
                </Text>
              </View>
            </View>
            <Text className="text-[#9D2721] font-bold">
              {option.amount} FCFA
            </Text>
          </TouchableOpacity>
        ))}

        {/* Bouton Custom */}
        <TouchableOpacity className="mt-4 flex-row items-center justify-center bg-transparent border border-[#9D2721] p-4 rounded-2xl">
          <Heart size={18} color="#9D2721" className="mr-2" />
          <Text className="text-[#9D2721] font-bold">Montant personnalisé</Text>
        </TouchableOpacity>

        <View className="mt-6 items-center">
          <Text className="text-gray-600 text-[10px] uppercase tracking-widest">
            Secured by FedaPay or Kkiapay
          </Text>
        </View>
      </Pressable>
    </Pressable>
  );
};

export default CoffeeModal;
