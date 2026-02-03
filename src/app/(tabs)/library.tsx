import AppWrapper from "@/src/components/ui/common/AppWrapper";
import SearchBar from "@/src/components/ui/common/SearchBar";
import StyledText from "@/src/components/ui/common/StyledText";
import React from "react";

const Login = () => {
  return (
    <AppWrapper>
      <StyledText> Library </StyledText>
      <SearchBar />
    </AppWrapper>
  );
};

export default Login;
