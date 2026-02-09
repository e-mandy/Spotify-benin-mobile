import AppWrapper from "@/src/components/ui/common/AppWrapper";
import ScrollGenres from "@/src/components/ui/common/ScrollGenres";
import SecondaryTopBar from "@/src/components/ui/common/SecondaryTopBar";
import PinnedPlaylist from "@/src/components/ui/library/PinnedPlaylist";
import React from "react";

const Login = () => {
  return (
    <AppWrapper>
      <SecondaryTopBar topic="Ma Bibliothèque" />
      <ScrollGenres />
      <PinnedPlaylist />
    </AppWrapper>
  );
};

export default Login;
