import React, { useContext } from "react";
import { RoleContext } from "../Auth/RoleContext";
import RubricScreen from "./RubricScreen";
import StudentScreen from "./StudentsScreen";
import AssessmentsScreen from "./AssessmentsScreen";
import PersonnelScreen from "./PersonnelScreen";

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
        <PersonnelScreen />
        <StudentScreen />
        <RubricScreen />
        <AssessmentsScreen />
      </div>
    </div>
  );
};

export default LandingPage;
