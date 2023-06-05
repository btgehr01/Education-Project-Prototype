import React, { useContext, useEffect } from "react";
import { RoleContext } from "../Auth/RoleContext";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const { setUserRoles } = useContext(RoleContext);
  const { userRoles } = useContext(RoleContext);
  console.log("set UserRoles", userRoles);
  const { getIdTokenClaims, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getUserRoles = async () => {
      if (isAuthenticated && !isLoading) {
        try {
          const idTokenClaims = await getIdTokenClaims();
          if (idTokenClaims) {
            const userRoles = idTokenClaims["https://wallaceproject.com/roles"];
            setUserRoles(userRoles);
          }
        } catch (error) {
          console.log("Error retrieving ID token claims:", error);
        }
      }
    };

    getUserRoles();
  }, [isAuthenticated, isLoading, getIdTokenClaims, setUserRoles]);

  return <div>Landing Page</div>;
};

export default LandingPage;
