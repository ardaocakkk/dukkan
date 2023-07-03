import React from "react";
import {Card, CardBody, CardFooter, Heading, Stack, Divider, ButtonGroup, Button, Image, Text, LinkBox, LinkOverlay} from '@chakra-ui/react'

import {Link as RouteLink,} from "react-router-dom";

function ProductCard(props) {
    return (
        <Card className="h-auto">
                    <CardBody>
                        <Stack spacing='3'>
                            <RouteLink to={`/detail/${props.id}`}>
                            <Heading size='md' className={"font-bold"}>{props.title}</Heading>
                            <Text>
                                {props.description}
                            </Text>
                            <Image
                                boxSize={'200px'}
                                mt={2}
                                src={props.src}
                                alt={props.alt}
                                borderRadius='lg'
                            />
                            <Text color='blue.600' fontSize='2xl'>
                                {props.price + ' ₺'}
                            </Text>
                            </RouteLink>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='ghost' colorScheme='orange'>
                                <p className='font-sans'>Satin Al</p>
                            </Button>
                            <Button variant='ghost' colorScheme='orange'>
                                <p className='font-sans'>Sepete Ekle</p>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>

        </Card>


    )
}

export default ProductCard;