import React from "react";
import "../App.css";
import "../index.css";
import SearchBar from "./SearchBar";
import AccountTab from "./AccountTab";
import Cart from "./Cart";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <>
         <div className='h-15 border-site md:pl-20 w-full flex p-5 flex-auto items-center text-white dark:text-black container mx-auto'>
        {/*<div className=" container flex flex-auto  pt-10 ml-10 gap-72 pb-3 justify-between">*/}
            {/*Logo*/}
             <NavLink to={'/'}><h1 className="text-orange-600 font-sans text-2xl ml-20" >Dukkan</h1></NavLink>
            {/*Search bar*/}
             <div className='flex justify-center w-full items-center ml-20'>
            <SearchBar/>
             </div>
             <div className='w-full  flex justify-end items-center mx-auto'>
             {/*Account Tab*/}
               <AccountTab/>
            {/*Cart*/}
              <Cart/>
             </div>
        </div>
        <div className={" grid grid-cols-4 w-full"}>
            <div className={"bg-orange-700 h-1"}></div>
            <div className={"bg-blue-700 h-1"}></div>
            <div className={"bg-purple-700 h-1"}></div>
            <div className={"bg-green-700 h-1"}></div>
        </div>
        <div className={"w-full bg-cool_gray pl-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 font-sans place-content-center"}>
          <NavLink to={'/category/electronics'}> <div>Elektronik</div> </NavLink>
          <NavLink to={'/category/jewelery'}> <div>Takı, Mücevher</div> </NavLink>
          <NavLink to={'/category/men\'s%20clothing'}> <div>Erkek Giyim</div> </NavLink>
          <NavLink to={'/category/women\'s%20clothing'}> <div>Kadın Giyim</div> </NavLink>
          <NavLink to={'/category/electronics'}> <div>Elektronik</div> </NavLink>
        </div>
        </>
    );
}

export default Header;