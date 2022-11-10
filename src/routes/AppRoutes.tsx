import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutClient from "../components/layouts/LayoutClient";
import LayoutDefault from "../components/layouts/LayoutDefault";
import LayoutProfessional from "../components/layouts/LayoutProfessional";
import CategoriesPage from "../pages/CategoriesPage";
import ClientHomePage from "../pages/ClientHomePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewUserPage from "../pages/NewUserPage";
import ProfessionalHomePage from "../pages/ProfessionalHomePage";
import RequiredAuth from "./RequiredAuth";

interface AppRoutesProps {

}

const AppRoutes: React.FC<AppRoutesProps> = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutDefault />} >
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/new-user" element={<NewUserPage />} />
            </Route>
            <Route path="/client" element={<RequiredAuth><LayoutClient /></RequiredAuth>} >
                <Route index element={<ClientHomePage />} />
                <Route path="/client/categories" element={<CategoriesPage />} />
            </Route>
            <Route path="/professional" element={<RequiredAuth><LayoutProfessional /></RequiredAuth>}>
                <Route index element={<ProfessionalHomePage />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;