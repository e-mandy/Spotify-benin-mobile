import AppWrapper from "@/src/components/ui/common/AppWrapper";
import SearchBar from "@/src/components/ui/common/SearchBar";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import React from "react";

const Login = () => {
  return (
    <AppWrapper>
      <SecondaryTopBar topic="Rechercher" />
      <SearchBar />
    </AppWrapper>
  );
};

export default Login;
