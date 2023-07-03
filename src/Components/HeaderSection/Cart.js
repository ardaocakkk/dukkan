import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure, Divider,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItemCard from "../Cards/CartItemCard";



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
                size={'md'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Urunleriniz</DrawerHeader>
                    <DrawerBody>
                        {/*Urunler*/}
                        {/*Veritabanindan cekilecek*/}
                        <div className={'mb-3'}>
                            <CartItemCard
                                src= "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1663703840519"
                                title= "iPhone 14 Pro Altin Rengi"
                                description ="iPhone 14 pro Altin Rengi"
                                price = "65.499.00"
                            />
                        </div>
                        <Divider />
                        <div className={'mt-3'}>
                            <CartItemCard
                            src="https://www.gaming.gen.tr/wp-content/uploads/2023/03/msi-raider-ge78hx-13vh-037tr-intel-core-i9-13950hx-64gb-2tb-ssd-rtx4080-17-0-inc-240hz-qhd-w11-gaming-laptop.jpg"
                            title="MSI LAPTOP"
                            description= "MSI Raider GE78HX 13VH-037TR Intel Core i9-13950HX 64GB 2TB SSD RTX4080 17.0 inç 240Hz QHD+ W11 Gaming Laptop"
                            price= "125.485,92"
                            />
                        </div>
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