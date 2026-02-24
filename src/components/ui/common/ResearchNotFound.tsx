import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";
import Title from "./Title";

const ResearchNotFound = ({ section, message = "Aucun résultat trouvé" }) => {
  return (
    <View className="py-5">
      <Title className="my-2"> {section} </Title>
      <StyledText className="text-muted text-clip text-xl">
        {message}
      </StyledText>
    </View>
  );
};

export default ResearchNotFound;
