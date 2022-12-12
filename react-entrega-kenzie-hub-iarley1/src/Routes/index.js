import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../components/AuthRoutes/AuthRoutes";
import { DashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";


export function RoutesPage () {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route element={<AuthRoutes />}>
           <Route path="/dashboard" element={<DashboardPage />}/>
        </Route>
      </Routes>
    )
}