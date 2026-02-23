// components/keyboard-prevent.tsx
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { IProps } from "../interfaces/props.interface";

interface KeyboardPreventProps extends IProps {
  scrollable?: boolean;
  keyboardVerticalOffset?: number;
}

const KeyboardPrevent = ({
  children,
  scrollable = true,
  keyboardVerticalOffset = 0,
}: KeyboardPreventProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {scrollable ? (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <>{children}</>
        )}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardPrevent;
