import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure, Input,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge, IconButton} from "@mui/material";
import {createTheme} from "@mui/material/styles";



function Cart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef}   onClick={onOpen} variant='ghost' >
                Sepetim
                <ShoppingCartIcon/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Urunleriniz</DrawerHeader>
                    <DrawerBody>
                        {/*Urunler*/}
                        <h1>Urun 1</h1>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose} colorScheme={"orange"}>Odemeyi Tamamla</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart;