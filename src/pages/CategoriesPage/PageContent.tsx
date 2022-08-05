import React from "react";
import ArrowBack from '@mui/icons-material/ArrowBack';
import CategoriesFilter from "../../components/CategoriesFilter";
import CategoriesList from "../../components/CategoriesList";
import PageDescription from "../../components/shared/PageDescription";
import PageTitle from "../../components/shared/PageTitle";
import SubcategoriesList from "../../components/SubcategoriesList";
import { CategoriesActionTypes, useCategoriesContext } from "../../contexts/CategoriesContext";
import { SubcategoriesProvider } from "../../contexts/SubcategoriesContext";
import strings from "./strings";
import { ButtonLink } from "./styles";

export interface PageContentProps { }

const PageContent: React.FC<PageContentProps> = (props) => {
    const categoriesContext = useCategoriesContext();
    const category = categoriesContext.state.categories.find(item => item.id === categoriesContext.state.selected_category_id);

    const handleClickGoBack = () => {        
        categoriesContext.dispatch({ type: CategoriesActionTypes.UPDATE_SELECTED_CATEGORY_ID, payload: 0 });
    }

    return (
        <>
            {categoriesContext.state.selected_category_id === 0 &&
                <>
                    <PageDescription>{strings.description}</PageDescription>
                    <PageTitle>{strings.title}</PageTitle>
                    <CategoriesFilter />
                    <CategoriesList />
                </>
            }
            {categoriesContext.state.selected_category_id !== 0 &&
                <>
                    <ButtonLink onClick={handleClickGoBack}>
                        <ArrowBack />
                        {strings.goBackToCategories}
                    </ButtonLink>
                    <PageDescription>{strings.youAreAlmostThere}</PageDescription>
                    <PageTitle>{strings.selectedCategory} {category?.description}</PageTitle>
                    <SubcategoriesProvider category_id={categoriesContext.state.selected_category_id}>
                        <SubcategoriesList />
                    </SubcategoriesProvider>
                </>
            }
        </>
    )
}

export default PageContent;