import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Screens/LandingPage";
import NotFoundPage from "./Screens/NotFoundPage";
import ProfessorPage from "./Screens/ProfessorPage";
import StudentPage from "./Screens/StudentPage";
import ProfilePage from "./Screens/ProfilePage";
import AccountPage from "./Screens/Account";
import { AuthenticationGuard } from "./Auth/AuthenticationGuard";
import CircularLoader from "./Components/CircularLoader";
import "./App.scss";

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

  return (
    <>
      <NavBar />
      <div className="app-body">
        {isLoading ? (
          <CircularLoader />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<AuthenticationGuard component={LandingPage} />}
            />
            <Route
              path="/account"
              element={<AuthenticationGuard component={AccountPage} />}
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
        )}
      </div>
    </>
  );
};

export default App;
