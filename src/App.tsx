import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Screens/LandingPage";
import NotFoundPage from "./Screens/NotFoundPage";
import ProfessorPage from "./Screens/ProfessorPage";
import StudentPage from "./Screens/StudentPage";
import ProfilePage from "./Screens/ProfilePage";
import { AuthenticationGuard } from "./Auth/AuthenticationGuard";

const App = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated && !isLoading) {
        await loginWithRedirect({
          appState: {
            returnTo: window.location.pathname,
          },
        });
      }
    };

    checkAuth();
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  if (isLoading) {
    return (
      <div className="page-layout">
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <Routes>
      <Route
        path="/"
        element={<AuthenticationGuard component={LandingPage} />}
      />
      <Route
        path="/professor/:professorId/courses"
        element={<AuthenticationGuard component={ProfessorPage} />}
      />
      <Route
        path="/professor/:professorId/student/:studentId"
        element={<AuthenticationGuard component={StudentPage} />}
      />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
