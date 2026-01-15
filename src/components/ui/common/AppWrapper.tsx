import { IProps } from "@/src/interfaces/props.interface";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../../styles/global.css";

const AppWrapper = ({ children }: IProps) => {
  return (
    <SafeAreaView className="min-h-screen p-2 bg-background-dark">
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default AppWrapper;
