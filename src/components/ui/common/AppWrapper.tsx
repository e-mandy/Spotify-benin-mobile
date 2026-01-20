import { IProps } from "@/src/interfaces/props.interface";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../../styles/global.css";

const AppWrapper = ({ children, className }: IProps) => {
  return (
    <SafeAreaView className={`min-h-screen p-2 bg-black/90 ${className}`}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

// bg-background-dark
export default AppWrapper;
