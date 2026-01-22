import React from "react";
import DataLoader from "./DataLoader";

const ShowData = ({ children, isLoading }) => {
  if (isLoading) return <DataLoader />;
  return children;
};

export default ShowData;
