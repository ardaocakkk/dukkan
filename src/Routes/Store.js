import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Heading, Divider} from '@chakra-ui/react'
import Header from "../Components/HeaderSection/Header";
import Footer from "../Components/FooterSection/Footer";
import { Text , Badge } from '@chakra-ui/react'
import StoreCard from "../Components/Cards/StoreCard";

function Store() {
    return (
        <>
          <Header/>
          <div className={'container mx-auto mt-12 mb-12'}>
            <Card>
                <CardHeader> <Heading size={'md'}>Magazalar</Heading> </CardHeader>
                <div className={'ml-5 mr-5'}>
                    <Divider/>
                </div>
                <CardBody>
                    <div className={'grid gap-3.5 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 ml-6'}>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>

                    </div>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
          </div>
            <Footer/>
        </>
    )
}


export default Store;