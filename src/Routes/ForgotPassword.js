import React from "react";
import Header from "../Components/HeaderSection/Header";
import Footer from "../Components/FooterSection/Footer";
import {Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {useFormik} from "formik";

export default function ForgotReact() {
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: (values) => {
            console.log("values", values)
        }
    })
    return (
        <>
          <Header/>
            <div className={'flex m-auto items-center justify-center'}>
                <form onSubmit={formik.handleSubmit}>
                <Card className={'mt-10'}>
                    <CardHeader> <Heading className={'text-orange-600'}>Sifremi Unuttum</Heading> </CardHeader>
                    <CardBody>
                        <FormControl isRequired>
                            <FormLabel>E-posta</FormLabel>
                            <Input type={'email'} placeholder={'E-posta adresiniz'} id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                        </FormControl>
                    </CardBody>
                    <div className={'flex items-center justify-center'}>
                    <CardFooter> <Button type='submit' variant={'ghost'} colorScheme={'orange'}>Yeni Sifre Gonder</Button> </CardFooter>
                    </div>
                </Card>
                </form>
            </div>
          <Footer/>
        </>
    )
}