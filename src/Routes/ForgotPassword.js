import React from "react";
import Header from "../Components/HeaderSection/Header";
import Footer from "../Components/FooterSection/Footer";
import {Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";

export default function ForgotReact() {
    return (
        <>
          <Header/>
            <div className={'flex m-auto items-center justify-center'}>
                <Card className={'mt-10'}>
                    <CardHeader> <Heading className={'text-orange-600'}>Sifremi Unuttum</Heading> </CardHeader>
                    <CardBody>
                        <FormControl isRequired>
                            <FormLabel>E-posta</FormLabel>
                            <Input type={'email'} placeholder={'E-posta adresiniz'}/>
                        </FormControl>
                    </CardBody>
                    <div className={'flex items-center justify-center'}>
                    <CardFooter> <Button variant={'ghost'} colorScheme={'orange'}>Yeni Sifre Gonder</Button> </CardFooter>
                    </div>
                </Card>
            </div>
          <Footer/>
        </>
    )
}