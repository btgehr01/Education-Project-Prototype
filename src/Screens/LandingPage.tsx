import React, { useContext } from "react";
import { RoleContext } from "../Auth/RoleContext";
import RubricScreen from "./RubricScreen";
import StudentScreen from "./StudentsScreen";
import PersonnelScreen from "./PersonnelScreen";

const LandingPage = () => {
  const { userRoles } = useContext(RoleContext);
  console.log("set UserRoles", userRoles);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ textAlign: "center" }}>Database Tables</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "2px solid #000",
          borderRadius: "10px",
          padding: "30px 30px 100px 30px",
        }}
      >
        <PersonnelScreen />
        <StudentScreen />
        <RubricScreen />
      </div>
    </div>
  );
};

export default LandingPage;
