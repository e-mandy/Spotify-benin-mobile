import { StyleSheet, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export const OtpFormInput = ({
  onFilled,
}: {
  onFilled: (text: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <OtpInput
        numberOfDigits={6}
        focusColor="#4A90E2"
        onFilled={onFilled}
        focusStickBlinkingDuration={500}
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  otpContainer: {
    width: "100%",
  },
  pinCodeContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF3B30",
    borderRadius: 8,
    width: 45,
    height: 55,
  },
  activePinCodeContainer: {
    borderColor: "#4A90E2",
    borderWidth: 2,
  },
  pinCodeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
