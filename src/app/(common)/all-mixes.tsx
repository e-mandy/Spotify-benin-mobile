import { AppWrapper, GoBack } from "@/src/components/ui/common";
import OutlinedButton from "@/src/components/ui/common/OutlinedButton";
import { useFetch } from "@/src/hooks/use-fetch-api";
import { IMixeItem } from "@/src/interfaces/mixe-item.interface";
import { notifSuccess } from "@/src/utils/react-toast";
import { STREAM_URL } from "@env";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AllMixes = () => {
  const { data: mixes } = useFetch(`${STREAM_URL}/stream/daymix`);

  return (
    <View>
      <AppWrapper withScrollView={false}>
        <GoBack pageTitle="Toutes vos mixes du jour" />

        <SafeAreaView className="flex-1">
          <FlatList
            data={mixes}
            numColumns={2}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 20 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <View className="flex-1 p-2">
                <SingleMixe
                  mixe={{
                    id: item.id,
                    coverImage: item.coverImage,
                    title: item.title,
                    subtitle: item.subtitle,
                  }}
                />
              </View>
            )}
          />
          <OutlinedButton
            icon="more"
            onPress={() => notifSuccess("Hé hé ..Et bien plus!")}
          >
            Et bien plus
          </OutlinedButton>
        </SafeAreaView>
      </AppWrapper>
    </View>
  );
};

function SingleMixe({ mixe }: { mixe: IMixeItem }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/day-mix-details?mixeId=${mixe.id}`)}
      className="mb-4"
    >
      <View className="aspect-square bg-[#2D1B19] rounded-[32px] p-4 items-center justify-center shadow-lg">
        <Image
          source={{ uri: mixe.coverImage }}
          className="w-full h-full rounded-2xl"
          style={{ resizeMode: "cover" }}
        />
      </View>

      <View className="mt-3 px-1">
        <Text className="text-white font-bold text-base" numberOfLines={1}>
          {mixe.title}
        </Text>
        <Text className="text-gray-400 text-xs" numberOfLines={1}>
          {mixe.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default AllMixes;
