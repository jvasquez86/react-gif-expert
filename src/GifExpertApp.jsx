import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        // console.log(event);

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <AddCategory onNewCategory={(event) => onAddCategory(event)}
            />

            {
                categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    );
};