import { Vibration } from "react-native";
import { showMessage } from "react-native-flash-message";
import { triggerErrorHaptic, triggerSuccessHaptic } from "./vibration";

export function notifError(message) {
  triggerErrorHaptic();
  Vibration.vibrate(150);
  showMessage({
    message,
    type: "danger",
    floating: true,
    icon: "danger",
    backgroundColor: "rgb(239 68 68 / 0.4)",
  });
}

export function notifSuccess(message) {
  triggerSuccessHaptic();
  showMessage({
    message,
    type: "success",
    floating: true,
    icon: "success",
    backgroundColor: "rgb(34 197 94 / 0.4)",
  });
}
