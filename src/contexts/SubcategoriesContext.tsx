import React, { useContext, useReducer, PropsWithChildren, useEffect, Dispatch, useState } from "react";
import useFetch from "../hooks/useFetch";

interface Subcategory {
    id: number;
    category_id: number;
    description: string;
    icon: string;
}

interface SubcategoriesResult {
    subcategories: Subcategory[];
}

interface SubcategoriesContextState {
    subcategories: Subcategory[];
}

const initialState = {
    subcategories: []
} as SubcategoriesContextState;

export interface SubcategoriesContextProps {
    category_id: number;
}

const SubcategoriesContext = React.createContext<SubcategoriesContextState>(initialState);


export const useSubcategoriesContext = () => {
    return useContext(SubcategoriesContext);
}

export const SubcategoriesProvider: React.FC<PropsWithChildren<SubcategoriesContextProps>> = ({ category_id, children }) => {
    const [subcategoriesResult] = useFetch<SubcategoriesResult>(`/v1/subcategories/category/${category_id}`, `cached_subcategories_${category_id}`);

    return (
        <SubcategoriesContext.Provider value={{ subcategories: subcategoriesResult?.subcategories } as SubcategoriesContextState}>
            {children}
        </SubcategoriesContext.Provider>
    )
}