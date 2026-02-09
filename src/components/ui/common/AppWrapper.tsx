import { IProps } from "@/src/interfaces/props.interface";
import React, { ReactNode } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IAppProps extends IProps {
  withScrollView?: boolean;
}

const AppWrapper = ({
  children,
  className,
  withScrollView = true,
}: IAppProps): ReactNode => {
  return (
    <SafeAreaView
      className={`min-h-screen p-2 bg-background-dark ${className}`}
    >
      {withScrollView ? (
        <ScrollView showsVerticalScrollIndicator={false} className="px-2">
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

export default AppWrapper;
