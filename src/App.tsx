import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ProtectedRoute from "./components/guard/ProtectRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SideMenu from "./components/SideMenu/SideMenu";
import DashBoardPage from "./pages/DashBoardPage";
import UsersPage from "./pages/UsersPage";
import AdminsPage from "./pages/AdminsPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ScenarioDetailsPage from "./pages/ScenarioDetailsPage";
import ActionDetailsPage from "./pages/ActionDetailsPage";
import StepDetailsPage from "./pages/StepDetailsPage";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#003462",
      },
      secondary: {
        main: "#23d160",
        contrastText: "#fff",
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    spacing: (factor: any) => `${0.25 * factor}rem`,
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="" element={<ProtectedRoute></ProtectedRoute>}>
            <Route path="" element={<Navigate to={"/portal"} replace />} />
            <Route path="/portal" element={<SideMenu></SideMenu>}>
              <Route path="" element={<DashBoardPage></DashBoardPage>} />
              <Route path="users" element={<UsersPage></UsersPage>} />
              <Route path="admins" element={<AdminsPage></AdminsPage>} />
              <Route path="settings" element={<SettingsPage></SettingsPage>} />
              <Route path="profile" element={<ProfilePage></ProfilePage>} />
              <Route
                path="projects/:project_id"
                element={<ProjectDetailPage></ProjectDetailPage>}
              />
              <Route
                path="projects/:project_id/scenarios/:scenario_id"
                element={<ScenarioDetailsPage></ScenarioDetailsPage>}
              />
              <Route
                path="projects/:project_id/scenarios/:scenario_id/actions/:action_id"
                element={<ActionDetailsPage></ActionDetailsPage>}
              />
              <Route
                path="projects/:project_id/scenarios/:scenario_id/actions/:action_id/steps/:step_id"
                element={<StepDetailsPage></StepDetailsPage>}
              />
            </Route>
          </Route>
          <Route
            path=""
            element={
              <ProtectedRoute
                authPage={false}
                redirectPath="/"
              ></ProtectedRoute>
            }
          >
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
