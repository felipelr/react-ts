import React, { useContext, useState, PropsWithChildren, useEffect } from "react";
import useFetch from "../hooks/useFetch";

interface Category {
    description: string;
    icon: string;
}

interface CategoriesResult {
    categories: Category[]
}

interface CategoriesContextState {
    categories: Category[],
    filteredCategories: Category[],
    filter: string;
    updateFilter: (value: string) => void;
}

const initialState = {
    categories: [],
    filteredCategories: [],
    filter: "",
    updateFilter: (value: string) => { },
} as CategoriesContextState;

const CategoriesContext = React.createContext<CategoriesContextState>(initialState);

export const useCategoriesContext = () => {
    return useContext(CategoriesContext);
}

export interface CategoriesProviderProps { }

export const CategoriesProvider: React.FC<PropsWithChildren<CategoriesProviderProps>> = ({ children }) => {
    const [categoriesResult] = useFetch<CategoriesResult>(`/v1/categories`, 'cached_categories');
    const [contextState, setContextState] = useState<CategoriesContextState>(initialState);

    const setFilter = (value: string) => {
        setContextState((old) => { return { ...old, filter: value } });
    }

    useEffect(() => {
        setContextState((old) => { return { ...old, updateFilter: setFilter } });
    }, [])

    useEffect(() => {
        if (contextState.filter.length >= 3) {
            setContextState((old) => { 
                const filtered = old.categories.filter(item => item.description.includes(contextState.filter));
                return { ...old, filteredCategories: filtered } 
            });
        }
        else {
            setContextState((old) => { 
                return { ...old, filteredCategories: [...old.categories] } 
            });
        }
    }, [contextState.filter])

    useEffect(() => {
        if (categoriesResult) {
            setContextState((old) => { return { ...old, categories: [...categoriesResult.categories], filteredCategories: [...categoriesResult.categories] } });
        }
    }, [categoriesResult])

    return (
        <CategoriesContext.Provider value={contextState}>
            {children}
        </CategoriesContext.Provider>
    )
}