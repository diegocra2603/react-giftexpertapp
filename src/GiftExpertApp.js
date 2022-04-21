import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Spider-Man']);

    return (
        <>
            <h2>GiftExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />

            <ul>
                {
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ul>

        </>
    );

}

export default GiftExpertApp;