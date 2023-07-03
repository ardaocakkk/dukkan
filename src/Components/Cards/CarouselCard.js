import React, {useState} from "react";
import {Card, Heading, Text, Image, Button, Box} from "@chakra-ui/react";
import {Carousel} from "@material-tailwind/react";
import buguneOzel from "../../BuguneOzel"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function IndexCarousel() {

    const [tabIndex, setTabIndex] = useState();
    const handleTab = (event) => {
        setTabIndex(event.target.value)
        console.log(tabIndex)
    }

    function CarouselCard(props) {
        return (
            <div className={`w-full bg-gradient-to-r ${props.from} ${props.to} h-full  bg-gradient-to-b`}>
                <div className={'m-auto items-center justify-center w-2/3 pt-12 pb-4'}>
                        <Tabs variant='soft-rounded' color={''} >
                          <TabList>
                            <Tab className={'m-auto'}> <Text className={'text-white'} >Bugune Ozel</Text> </Tab>
                            <Tab className={'m-auto'}> <Text className={'text-white'}>Kampanyalar</Text> </Tab>
                            <Tab className={'m-auto'}> <Text className={'text-white'}>Kacirilmayacak Firsatlar</Text> </Tab>
                            <Tab className={'m-auto'}> <Text className={'text-white'}>Teknolojik Firsatlar</Text> </Tab>
                            <Tab className={'m-auto'}> <Text className={'text-white'}>Ayricaliklar</Text> </Tab>
                          </TabList>
                                <div className={'pl-10'}>
                            <TabPanels>
                                <TabPanel>
                                    {/*Carousel Item*/}
                                    <Card>
                                        <div className={'flex justify-between pl-20'}>
                                            <div className={'justify-center items-center flex-col m-auto'}>
                                                <Text fontSize={'2xl'}>{props.title}</Text>
                                                <Heading size={'lg'}>{props.description}</Heading>
                                                <div className={'mt-10'}>
                                                    <Button colorScheme={`${props.button_color}`}>
                                                        <Text>Acele et Kacirma</Text>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className={'p-1'}>
                                                <Image src={props.img} borderRadius={'md'} ></Image>
                                            </div>
                                        </div>
                                    </Card>
                                </TabPanel>
                                <TabPanel>
                                    <p>2</p>
                                </TabPanel>
                                <TabPanel>3</TabPanel>
                                <TabPanel>4</TabPanel>
                                <TabPanel>5</TabPanel>
                            </TabPanels>
                                </div>
                        </Tabs>
                </div>
                <div className={'grid grid-cols-4'}>
                    <div className={'border-2 rounded-3xl items-center justify-center m-auto mt-8 '}>
                    </div>
                </div>

            </div>

        )
    }
    return (
        <>
            <Box className={''}>
                <Carousel transition={{duration: 0.1}} >
                    {buguneOzel.map(Item => {
                        return (
                            <CarouselCard
                                id={Item.id}
                                from={Item.from}
                                to={Item.to}
                                title = {Item.title}
                                description = {Item.description}
                                img = {Item.img}
                                button_color = {Item.button_color}
                            />
                        )
                    })}
                </Carousel>
            </Box>
        </>
    );
}
