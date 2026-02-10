import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppModal } from "../common/AppModal";
import CoffeeModal from "../common/ModalPayment";

const BuyACoffee = ({ artistName }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const onClose = () => setShowPaymentModal(false);

  return (
    <>
      <View className="mt-8  max-w-[80%] mx-auto bg-surface-dark rounded-full py-4 px-8 flex items-center justify-center">
        <TouchableOpacity
          className="flex flex-row items-center gap-x-3"
          activeOpacity={0.7}
        >
          <View className="bg-red-500/40 p-1 rounded-2xl">
            <MaterialIcons size={26} name="coffee" color="#d84141" />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setShowPaymentModal(true)}
              activeOpacity={0.8}
            >
              <Text className="font-spline-bold text-white items-center text-xl">
                Offrir un verre de Sodabi
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <AppModal onClose={onClose} showModal={showPaymentModal}>
        <CoffeeModal artistName={artistName} />
      </AppModal>
    </>
  );
};

export default BuyACoffee;
