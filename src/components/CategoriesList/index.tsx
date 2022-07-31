import { Box, Grid } from "@mui/material";
import React from "react";
import { useCategoriesContext } from "../../contexts/CategoriesContext";
import { CategoryContainer, CategoryDescription } from "./styles";

export interface CategoriesListProps { }

const colorPalette = [
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#c0ca33',
    '#fdd835',
    '#ffb300',
    '#fb8c00',
    '#ff5722',
];

const CategoriesList: React.FC<CategoriesListProps> = (props) => {
    const categoriesContext = useCategoriesContext();

    const renderColor = (index: number) => {
        if (index < colorPalette.length) {
            return colorPalette[index];
        }
        else {
            const newIndex = index - (colorPalette.length * Math.floor(index / colorPalette.length));
            return colorPalette[newIndex];
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
                {categoriesContext?.filteredCategories && categoriesContext?.filteredCategories.map((item, index) => {
                    return (
                        <Grid item xs={12} md={4} lg={3} key={item.description}>
                            <CategoryContainer backgroundColor={renderColor(index)}>
                                <CategoryDescription>{item.description}</CategoryDescription>
                            </CategoryContainer>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default CategoriesList;