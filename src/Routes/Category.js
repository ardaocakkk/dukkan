import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../Components/HeaderSection/Header";
import ProductCard from "../Components/Cards/ProductCard";


function Category() {
    const {type} = useParams();
    console.log(type)
    const [categoryItem,setCategoryItem] = useState([])
    const fetchCategoryItem = () => {
        fetch(`https://fakestoreapi.com/products/category/${type}`)
            .then(res=>res.json())
            .then(data => {
                setCategoryItem(data)
            })
    }
    useEffect(() => {
        fetchCategoryItem()
    }, [])
    return (
        <>
        <Header/>
            <div className='container m-auto  w-auto h-auto justify-center items-center'>
                <h1 className={'font-sans text-2xl font-bold'}>Size {type} Kategorisinde Onerilen Urunler</h1>
                <div className="grid mt-10 ml-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-auto ">
                    {/* Return elements from data*/}
                    {categoryItem.map(product => {
                        return(
                            <ProductCard
                                id = {product.id}
                                href = {product.href}
                                title = {product.title}
                                description = {product.description.substring(0,40) + '...'}
                                src = {product.image}
                                alt = {product.alt}
                                price = {product.price}
                            />
                        )
                    })}

                </div>

            </div>
        </>
    )
}

export default Category;