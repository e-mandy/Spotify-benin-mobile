import { Vibration } from "react-native";
import { showMessage } from "react-native-flash-message";
import { triggerErrorHaptic, triggerSuccessHaptic } from "./vibration";

export function notifError(message = "Une erreur est survenue") {
  triggerErrorHaptic();
  Vibration.vibrate(150);
  showMessage({
    message,
    type: "danger",
    floating: true,
    duration: 3000,
    icon: "danger",
    backgroundColor: "rgb(239 68 68 / 0.4)",
  });
}

export function notifSuccess(message) {
  triggerSuccessHaptic();
  showMessage({
    message,
    type: "success",
    duration: 3000,
    floating: true,
    icon: "success",
    backgroundColor: "rgb(34 197 94 / 0.4)",
  });
}
