import React from "react";
import {Button, CardFooter} from "@chakra-ui/react";
import DoneIcon from "@mui/icons-material/Done";

function KayitOlButtonOffVisible() {
    return (
            <Button isDisabled={'false'} className={'w-full'} colorScheme={'orange'} variant={'outline'}>Kayit Ol <DoneIcon className={'ml-2'} /> </Button>
    )
}

export default KayitOlButtonOffVisible;