import React, { useContext, useReducer, PropsWithChildren, useEffect, Dispatch } from "react";
import useFetch from "../hooks/useFetch";

export interface CategoriesProviderProps { }

interface Category {
    id: number;
    description: string;
    icon: string;
}

interface CategoriesResult {
    categories: Category[]
}

interface CategoriesContextState {
    categories: Category[],
    filter: string;
    selected_category_id: number;
}

interface CategoriesContextReducerState {
    state: CategoriesContextState;
    dispatch: Dispatch<UpdateCategoryFilterPayload | UpdateCategoryListPayload | UpdateSelectedCategoryIdPayload>;
}

export enum CategoriesActionTypes {
    UPDATE_CATEGORY_FILTER = "UPDATE_CATEGORY_FILTER",
    UPDATE_CATEGORY_LIST = "UPDATE_CATEGORY_LIST",
    UPDATE_SELECTED_CATEGORY_ID = "UPDATE_SELECTED_CATEGORY_ID",
}

interface UpdateCategoryFilterPayload {
    type: CategoriesActionTypes.UPDATE_CATEGORY_FILTER;
    payload: string;
};

interface UpdateCategoryListPayload {
    type: CategoriesActionTypes.UPDATE_CATEGORY_LIST;
    payload: Category[];
};

interface UpdateSelectedCategoryIdPayload {
    type: CategoriesActionTypes.UPDATE_SELECTED_CATEGORY_ID;
    payload: number;
};

const initialState = {
    categories: [],
    filter: "",
    selected_category_id: 0,
} as CategoriesContextState;

const CategoriesContext = React.createContext<CategoriesContextReducerState>({ state: initialState, dispatch: () => { } });

export const useCategoriesContext = () => {
    return useContext(CategoriesContext);
}

const reducer = (state: CategoriesContextState, action: UpdateCategoryFilterPayload | UpdateCategoryListPayload | UpdateSelectedCategoryIdPayload) => {
    switch (action.type) {
        case CategoriesActionTypes.UPDATE_CATEGORY_FILTER:
            return { ...state, filter: action.payload };
        case CategoriesActionTypes.UPDATE_CATEGORY_LIST:
            return { ...state, categories: action.payload };
        case CategoriesActionTypes.UPDATE_SELECTED_CATEGORY_ID:
            return { ...state, selected_category_id: action.payload };
        default:
            return state;
    }
};

export const CategoriesProvider: React.FC<PropsWithChildren<CategoriesProviderProps>> = ({ children }) => {
    const [categoriesResult] = useFetch<CategoriesResult>('/v1/categories', 'cached_categories');
    const [contextReducerState, dispatchReducer] = useReducer(reducer, initialState);

    useEffect(() => {
        if (categoriesResult !== null) {
            dispatchReducer({ type: CategoriesActionTypes.UPDATE_CATEGORY_LIST, payload: categoriesResult.categories });
        }
    }, [categoriesResult])

    return (
        <CategoriesContext.Provider value={{ state: contextReducerState, dispatch: dispatchReducer }}>
            {children}
        </CategoriesContext.Provider>
    )
}