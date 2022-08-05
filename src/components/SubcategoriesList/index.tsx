import React from "react";
import { Box, Grid } from "@mui/material";
import { useSubcategoriesContext } from "../../contexts/SubcategoriesContext";
import { SubcategoryContainer, SubcategoryDescription } from "./styles";

export interface SubcategoriesListProps { }

const SubcategoriesList: React.FC<SubcategoriesListProps> = (props) => {
    const subategoriesContext = useSubcategoriesContext();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
                {subategoriesContext.subcategories?.map((item, index) => {
                    return (
                        <Grid item xs={12} md={4} lg={3} key={item.id}>
                            <SubcategoryContainer>
                                <SubcategoryDescription>{item.description}</SubcategoryDescription>
                            </SubcategoryContainer>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default SubcategoriesList;