import React from "react";
import ProductCard from "./Cards/ProductCard";
import products from "../Products";
import {Image,} from "@chakra-ui/react";


function Offers() {

    return (
        <div className='container mt-10 ml-[120px] mr-auto w-auto h-auto mt-12'>
            <h1 className='text-2xl font-bold '> Super Fiyat, Super Teklif</h1>
            <div className="grid mt-10 ml-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-auto ">
                <Image src='https://images.hepsiburada.net/banners/s/0/224-371/homepageImage2094_20230601114930.png/format:webp' className='mt-20'/>
                {products.map(product => {
                    return(
                            <ProductCard
                                id = {product.id}
                                title = {product.title}
                                description = {product.description}
                                src = {product.href}
                                alt = {product.alt}
                                price = {product.price}
                            />
                    )
                })}

            </div>

        </div>
    )
}

export default Offers;