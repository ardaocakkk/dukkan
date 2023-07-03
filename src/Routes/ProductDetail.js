import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../Components/HeaderSection/Header";
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image, Stack,
    Text
} from "@chakra-ui/react";

function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    const fetchProductData = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data => {
                setProduct(data)
            })
    }
    useEffect(() => {
        fetchProductData()
    }, [])

    console.log(product);

    return (
        <>
        <Header/>
        <div className={'w-full h-full container flex justify-center items-center m-auto justify-between mt-20'}>
            <Card>
                <Image src={product.image} boxSize={'400px'} ></Image>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{product.title}</Heading>
                        <Text>{product.description}</Text>
                        <Text color='blue.600' fontSize='2xl'>{product.price} TL</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='ghost' colorScheme='orange'>
                            Satin Al
                        </Button>
                        <Button variant='ghost' colorScheme='orange'>
                            Sepete Ekle
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
        </>
    )
}

export default ProductDetail;