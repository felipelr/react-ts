import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export interface CategoriesListProps { }

interface Category {
    description: string;
    icon: string;
}

interface CategoriesResult {
    categories: Category[]
}

const CategoriesList: React.FC<CategoriesListProps> = (props) => {
    const [categoriesResult] = useFetch<CategoriesResult>(`/v1/categories`, 'cached_categories');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
                    {categoriesResult?.categories && categoriesResult?.categories.map((item) => {
                        return (
                            <Grid item xs={12} md={4} lg={3} key={item.description}>
                                <p>{item.description}</p>
                            </Grid>
                        )
                    })}
                </Grid>
        </Box>
    )
}

export default CategoriesList;