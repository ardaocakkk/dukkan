import React from "react"
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Badge} from '@chakra-ui/react'

function StoreCard(props) {
    return (
        <>
            <Card>
                <div className={' mx-auto justify-center mb-3 '}>
                    {/*{props.name}*/}
                    <Text className='mt-2'>Magaza Adi</Text>
                    <div className='flex'>
                        <Text className='text-gray-400'>Puan</Text>
                        {/*{props.score}*/}
                        <Badge className='ml-2' variant='solid' colorScheme='green'>9.8</Badge>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default StoreCard;