import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function CategoriesCarousel(){
    const [categories, setcategories] =  useState([]);

    useEffect(()=>{
        async function loadCategories() {
            const response = await api.get('/categories');
            console.log(response)
        }
        loadCategories();
    },[]);

    return (
        <div>
            <h1>ok</h1>
        </div>
    )
}