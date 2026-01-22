import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 100,
    margin: "auto",
    borderColor: "#f97315",
    borderWidth: 3,
  },
});

const BenineseLegends = () => {
  const legendes = [
    {
      id: 1,
      artiste: "Angélique Kidjo",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCVhmfQMAQbsrxFHPWXMOlNVVxgDwm7L4nqTDmHv16zh3rIQ1ZP76T9GF3KERp9qnERuTe5vVqP7wCXpxIbx-L_yCImjHU4O2YOK5a5XN10UEEC1CsQxaovbrvXxLo003rdqc6BxVS_XnfhIyeU1JU5be6GwCcqFH5itAo6hNdhS3Mp_7RguvKwaVRZyQt5hAlBUj-wUfQNysylVULWtcn9UUBiPzErr2GHDvm54_O3YYnYh9u0C6gQtnzBKB2IJqpvDLfersf9GGHd",
    },
    {
      id: 2,
      artiste: "G.G Vickey",
      cover: "https://i1.sndcdn.com/avatars-000068402056-5uapee-t500x500.jpg",
    },
    {
      id: 3,
      artiste: "Sagbohan",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJHGsdQNH0jZ_8gDNAoR3Uzw69U0XbwyuY15f1dTC6QD6JPEbDgcbtwdOX_WUsB8nLyPvtuEDuAulxe6yLo8gsALzPNxnpTcWHhJd1g&s=10",
    },
    {
      id: 4,
      artiste: "Poli Rythmo",
      cover:
        "https://cdn-images.dzcdn.net/images/artist/dff03c24ba0c9e20751cab20e73c376d/1900x1900-000000-81-0-0.jpg",
    },
  ];

  return (
    <View>
      <Text className="text-xl font-bold text-white mb-4">
        Légendes du Bénin
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-12"
      >
        {legendes.map((legende) => (
          <View key={legende.id} className="items-center mr-6">
            <View className="w-24 h-24  mb-2">
              <Image
                contentFit="cover"
                style={styles.image}
                source={legende.cover}
              />
            </View>
            <Text className="text-xs font-bold text-gray-400">
              {legende.artiste}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BenineseLegends;
