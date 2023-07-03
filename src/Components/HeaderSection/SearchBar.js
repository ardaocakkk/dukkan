import React, {useState} from "react";
import {Input} from "@chakra-ui/react";

function SearchBar() {

    const [searchData, setSearchData] = useState('');
    const handleSearchData = (event) => {
        setSearchData(event.target.value)
    }


    return (
        <>
        <Input placeholder={"Urun Ara"} htmlSize={100} width={"auto"} onSubmit={handleSearchData} />

        </>
    )

}

export default SearchBar;
