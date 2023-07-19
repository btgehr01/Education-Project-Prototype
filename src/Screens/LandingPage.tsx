import React, { useContext, useEffect } from "react";
import { RoleContext } from "../Auth/RoleContext";
import RubricScreen from "./RubricScreen";

const LandingPage = () => {
  const { userRoles } = useContext(RoleContext);
  console.log("set UserRoles", userRoles);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ textAlign: "center" }}>Database Dashboard</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <RubricScreen />
        <RubricScreen />
        <RubricScreen />
        <RubricScreen />
      </div>
    </div>
  );
};

export default LandingPage;
