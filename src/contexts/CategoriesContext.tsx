import React, { useContext, useReducer, PropsWithChildren, useEffect, Dispatch } from "react";
import useFetch from "../hooks/useFetch";

export interface CategoriesProviderProps { }

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
}

interface CategoriesContextReducerState {
    state: CategoriesContextState;
    dispatch: Dispatch<UpdateCategoryFilterPayload | UpdateCategoryListPayload>;
}

export enum CategoriesActionTypes {
    UPDATE_CATEGORY_FILTER = "UPDATE_CATEGORY_FILTER",
    UPDATE_CATEGORY_LIST = "UPDATE_CATEGORY_LIST",
}

interface UpdateCategoryFilterPayload {
    type: CategoriesActionTypes.UPDATE_CATEGORY_FILTER;
    payload: string;
};

interface UpdateCategoryListPayload {
    type: CategoriesActionTypes.UPDATE_CATEGORY_LIST;
    payload: Category[];
};

const initialState = {
    categories: [],
    filteredCategories: [],
    filter: "",
} as CategoriesContextState;

const CategoriesContext = React.createContext<CategoriesContextReducerState>({ state: initialState, dispatch: () => { } });

export const useCategoriesContext = () => {
    return useContext(CategoriesContext);
}

const reducer = (state: CategoriesContextState, action: UpdateCategoryFilterPayload | UpdateCategoryListPayload) => {
    switch (action.type) {
        case CategoriesActionTypes.UPDATE_CATEGORY_FILTER:
            if (action.payload.length >= 3) {
                const filtered = state.categories.filter(item => item.description.includes(action.payload));
                return { ...state, filter: action.payload, filteredCategories: filtered }
            }
            return { ...state, filter: action.payload, filteredCategories: state.categories };
        case CategoriesActionTypes.UPDATE_CATEGORY_LIST:
            return { ...state, categories: action.payload, filteredCategories: action.payload };
        default:
            return state;
    }
};

export const CategoriesProvider: React.FC<PropsWithChildren<CategoriesProviderProps>> = ({ children }) => {
    const [categoriesResult] = useFetch<CategoriesResult>(`/v1/categories`, 'cached_categories');
    const [contextReducerState, dispatchReducer] = useReducer(reducer, initialState);

    useEffect(() => {
        if (categoriesResult) {
            dispatchReducer({ type: CategoriesActionTypes.UPDATE_CATEGORY_LIST, payload: categoriesResult.categories });
        }
    }, [categoriesResult])

    return (
        <CategoriesContext.Provider value={{ state: contextReducerState, dispatch: dispatchReducer }}>
            {children}
        </CategoriesContext.Provider>
    )
}