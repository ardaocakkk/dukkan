import React, {useState, useEffect} from "react";
import {LinkBox, LinkOverlay} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
function Categories() {

    const [categories, setCategories] = useState([])
    const fetchCategoryData = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data => {
                setCategories(data)
            })
    }
    useEffect(() => {
        fetchCategoryData()
    }, [])

    return(

        <div className='ml-[120px] mt-12'>
            <h1 className='text-2xl fonst-sans font-bold'>Kategoriler</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 '>
                {categories.map((category) => (

                    <div className={'m-10 '}>
                        <NavLink to={`category/${category}`} >
                        <h1 className={"text-xl font-sans"}>{category}</h1>
                        </NavLink>
                    </div>

                ))}
            </div>

        </div>

    )
}

export default Categories;