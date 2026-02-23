import { Trash2Icon } from "lucide-react-native";
import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

export const SwipeableTrack = ({ children, onTrackDelete, swipeActive }) => {
  const swipeableRef = useRef<Swipeable>(null);

  const onRightSwipe = async () => {
    await onTrackDelete();
    swipeableRef?.current?.close();
  };

  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity
        onPress={onRightSwipe}
        className="bg-primary justify-center items-end px-6 rounded-r-xl"
      >
        <Trash2Icon color="white" size={24} />
      </TouchableOpacity>
    );
  };

  return swipeActive ? (
    <Swipeable
      ref={swipeableRef}
      leftThreshold={70000000} //we just put a high value to disable the sweap left
      renderRightActions={renderRightActions}
      friction={2}
      rightThreshold={40}
    >
      <View>{children}</View>
    </Swipeable>
  ) : (
    children
  );
};
