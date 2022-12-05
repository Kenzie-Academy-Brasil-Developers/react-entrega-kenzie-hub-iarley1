import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";


export function RoutesPage () {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
      </Routes>
    )
}