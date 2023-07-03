import React,  {useState} from "react";
import {Card, CardBody, CardFooter, Heading, Stack, Text, Image, IconButton} from "@chakra-ui/react";
import {AddIcon, MinusIcon} from '@chakra-ui/icons'



export default function CartItemCard(props) {
    const [visible, setVisible] = useState(true);
    const[itemPrice, setItemPrice] = useState(parseFloat(props.price))
    const [counter, setCounter] = useState(1); //real value 0
    function increaseCounter() {
        setCounter(counter+1);
        setItemPrice(itemPrice * (counter + 1))
    }

    function decreaseCounter() {
        if(counter >= 0) {
            setCounter(counter-1);
            setItemPrice(itemPrice/(counter))
        }
        if(counter -1 == 0) {

            setVisible((prev) => !prev);

        }
    }

    //fetch the authenticated user's cart detail from db
    return(
        <div>
        {visible && (
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'

            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={props.src}
                    alt='Caffe Latte'
                    m={2}
                    borderRadius={'md'}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{props.title}</Heading>

                        <Text py='2'>
                            {props.description}
                        </Text>
                    </CardBody>
                    <div className={'flex justify-between'}>
                        <CardFooter>
                            <div>
                                <Text>Fiyat {itemPrice}</Text>
                            </div>
                            <div className={'mr-4 ml-4'}>
                                <IconButton onClick={increaseCounter} icon={<AddIcon/>} ></IconButton>
                                <IconButton onClick={decreaseCounter} icon={<MinusIcon/>} ></IconButton>
                                <div className={'pl-3 pr-3 bg-orange-400 rounded-3xl'}>
                                    <Text textAlign={'center'}>{counter}</Text>
                                </div>
                            </div>



                        </CardFooter>
                    </div>
                </Stack>
            </Card>
        )}
        </div>

    )
}