/* eslint-disable react-hooks/exhaustive-deps */
import { MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TrackPlayer, { useProgress } from "react-native-track-player";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1f0036",
  },
  albumArt: {
    width: "85%",
    alignSelf: "center",
    height: 400,
    borderRadius: 20,
  },
  infoContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 190,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  artist: {
    fontSize: 16,
    color: "#ccc",
  },
  slider: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 160 : 170,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  timeText: {
    color: "#fff",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    width: 70,
    height: 70,
    backgroundColor: "#8a4fff",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#8a4fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginHorizontal: 40,
  },
  controlIcon: {
    width: 50,
    height: 50,
  },
});

const TrackPlayerComponent = ({ route }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { artist, artwork, id, title, url } = route.params.data;
  const { position, duration } = useProgress();

  const tracks = [];

  return (
    <View style={styles.container}>
      <Image source={{ uri: artwork }} style={styles.albumArt} />

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>

      <Slider
        step={1}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onSlidingComplete={async (value) => {
          await TrackPlayer.seekTo(value);
        }}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#888"
        thumbTintColor="#fff"
        style={styles.slider}
      />

      <View style={styles.timeRow}>
        <Text style={styles.timeText}>00:00</Text>
        <Text style={styles.timeText}>05:25</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Text>
            <MaterialIcons color="#fff" size={30} name="skip-previous" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton}></TouchableOpacity>
        <Text>
          <MaterialIcons
            color="#fff"
            size={30}
            name={isPlaying ? "pause-circle-filled" : "play-arrow"}
          />
        </Text>
        <TouchableOpacity>
          <Text>
            <MaterialIcons color="#fff" size={30} name="skip-next" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrackPlayerComponent;
