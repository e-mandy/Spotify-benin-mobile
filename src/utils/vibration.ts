import * as Haptics from "expo-haptics";

export const triggerSuccessHaptic = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
};

export const triggerErrorHaptic = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
};

export const triggerButtonHaptic = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
};
