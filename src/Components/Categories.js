import React from "react";
import BrandCard from "./BrandCard";
function BrandsSection() {
    return(
        <div className='ml-[120px] mt-12'>
            <h1 className='text-2xl fonst-sans text-bold'>Markalar</h1>
            <div className='flex flex-auto'>
                <BrandCard/>
                <BrandCard/>
                <BrandCard/>
                <BrandCard/>
            </div>
        </div>
    )
}

export default BrandsSection;