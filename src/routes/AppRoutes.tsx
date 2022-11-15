import React, { lazy, Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import LayoutClient from "../components/layouts/LayoutClient";
import LayoutDefault from "../components/layouts/LayoutDefault";
import LayoutProfessional from "../components/layouts/LayoutProfessional";
import RequiredAuth from "./RequiredAuth";

const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NewUserPage = lazy(() => import("../pages/NewUserPage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));
const ClientHomePage = lazy(() => import("../pages/ClientHomePage"));
const ClientOrdersPage = lazy(() => import("../pages/ClientOrdersPage"));
const ProfessionalHomePage = lazy(() => import("../pages/ProfessionalHomePage"));
const ProfessionalOrdersPage = lazy(() => import("../pages/ProfessionalOrdersPage"));

interface AppRoutesProps {

}

const AppRoutes: React.FC<AppRoutesProps> = () => {
    return (
        <Suspense fallback={<LinearProgress color="secondary" />}>
            <Routes>
                <Route path="/" element={<LayoutDefault />} >
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/new-user" element={<NewUserPage />} />
                </Route>
                <Route path="/client" element={<RequiredAuth><LayoutClient /></RequiredAuth>} >
                    <Route index element={<ClientHomePage />} />
                    <Route path="/client/orders" element={<ClientOrdersPage />} />
                    <Route path="/client/categories" element={<CategoriesPage />} />
                </Route>
                <Route path="/professional" element={<RequiredAuth><LayoutProfessional /></RequiredAuth>}>
                    <Route index element={<ProfessionalHomePage />} />
                    <Route path="/professional/orders" element={<ProfessionalOrdersPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;