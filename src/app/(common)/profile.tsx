import { AppWrapper, GoBack, InfoRow } from "@/src/components/ui/common";
import OutlinedButton from "@/src/components/ui/common/OutlinedButton";
import { defaultProfileUri } from "@/src/constants/url";
import useAuth from "@/src/store/auth.store";
import { convertDateToString } from "@/src/utils/date-to-string";
import { notifSuccess } from "@/src/utils/react-toast";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";

function ProfileScreen() {
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);
  const [isLoading, setLoading] = useState(false);

  const handleLogout = async () => {
    Alert.alert("Déconnexion", "Êtes-vous sûr de vouloir vous déconnecter ?", [
      {
        text: "Oui",
        onPress: async () => {
          setLoading(true);
          await logout();
          setLoading(false);
        },
        style: "destructive",
      },
      {
        text: "Annuler",
        style: "cancel",
      },
    ]);
  };

  return (
    <AppWrapper>
      <GoBack pageTitle="Informations personnelles" />
      <View style={{ paddingBottom: 40 }}>
        <View className="items-center mt-10 mb-8">
          <View className="relative">
            <View className="p-1 rounded-full border-2 border-[#9D2721]">
              <Image
                source={{ uri: user.photo || defaultProfileUri }}
                className="w-32 h-32 rounded-full"
              />
            </View>
            {user.emailVerified && (
              <View className="absolute bottom-1 right-1 bg-green-500 rounded-full p-1 border-2 border-[#1A0F0E]">
                <MaterialIcons name="verified" size={18} color="white" />
              </View>
            )}
          </View>
          <Text className="text-white text-3xl font-bold mt-4">
            {user.username}
          </Text>
          <Text className="text-gray-400 text-base">{user.email}</Text>
        </View>

        <View className="mx-5 bg-[#2D1B19] rounded-3xl p-6 shadow-lg">
          <Text className="text-[#9D2721] font-bold uppercase tracking-widest mb-4">
            Détails personnels
          </Text>

          <InfoRow
            icon="people"
            label="Ethnie / Origine"
            value={user.ethnicity || "-"}
          />
          <InfoRow
            icon="cake"
            label="Date de naissance"
            value={user.birthday ? convertDateToString(user.birthday) : "-"}
          />
          <InfoRow
            icon="history"
            label="Membre depuis"
            value={convertDateToString(user.createdAt)}
          />
        </View>

        <View className="mx-5 mt-8 space-y-4">
          <OutlinedButton
            className="bg-[#9D2721] border-0"
            onPress={() => notifSuccess("Fonctionnalité bientôt disponible")}
            icon="edit"
            iconColor="#fff"
          >
            Modifier le profil
          </OutlinedButton>

          <OutlinedButton
            iconColor="#9D2721"
            icon="logout"
            onPress={handleLogout}
          >
            Déconnexion
          </OutlinedButton>
        </View>
      </View>
    </AppWrapper>
  );
}

export default ProfileScreen;
