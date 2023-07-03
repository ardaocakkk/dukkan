import React, {useEffect, useState} from "react";
import ProductCard from "./Cards/ProductCard";
function ProductByCategory() {

    const categories =  [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ]


    const [products, setProducts] = useState([])


    //Fetch Data
    const fetchProductData = () => {
        fetch('https://fakestoreapi.com/products/category/' + categories[Math.floor(Math.random() * categories.length )])
            .then(res=>res.json())
            .then(data => {
                setProducts(data)
            })
    }
     useEffect(() => {
         fetchProductData()
    }, [])
    return(
        <div className='m-auto flex container mt-10 ml-[120px] mr-auto w-auto h-auto'>
            <h1 className={'font-sans text-2xl font-bold'}>Size {} Kategorisinde Onerilen Urunler</h1>
            <div className="grid mt-10 ml-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-auto ">
                {/* Return elements from data*/}
                {products.map(product => {
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
    )
}

export default ProductByCategory;