import {
    Button,
    Card,
    CardBody, CardFooter,
    FormControl, FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input, InputGroup, InputLeftAddon, InputRightElement
} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import Footer from "../Components/FooterSection/Footer";
import Header from "../Components/HeaderSection/Header";
import React, {useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RegisterButton from "../Components/ButtonAttributes/RegisterButton";
import { useFormik } from "formik";

export default function Register() {
    const [showPassword, setShowPassword] = useState(true);
    const handlePasswordVisibility = () => setShowPassword(!showPassword)


    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            // console.log("values",values)
            //create a user on db with that values
        }
    })

    return (
        <>
            <Header/>
            <div className={'flex mt-9 mx-auto justify-center items-center'}>
                <Card className={'mb-32 mt-10 '} >
                    <form onSubmit={formik.handleSubmit}>
                        <div className='ml-10 mr-10 mt-5'>
                        <FormControl isRequired>
                            <FormLabel>Isim</FormLabel>
                            <Input type={'text'} placeholder={'Isminiz'} name='name' id='name' onChange={formik.handleChange} value={formik.values.name}/>
                            <FormLabel>Soy Isim</FormLabel>
                            <Input type={'text'} placeholder={'Soy Isminiz'} name='surname' id='surname' onChange={formik.handleChange} value={formik.values.surname}/>
                            <FormLabel>E-posta</FormLabel>
                            <Input type={'email'} placeholder={'E-posta Adresini giriniz'} id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                            <FormHelperText>E-posta adresinizi kimseyle paylaşmayacagiz.</FormHelperText>
                            <FormLabel>Sifre</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'password' : 'text'}
                                    placeholder={"******"}
                                    id="password"
                                    size={"lg"}
                                    name='password'
                                    onChange={event => setShowPassword(event.currentTarget.value) }
                                    onChange={formik.handleChange}
                                />
                                <InputRightElement>
                                    <Button onClick={handlePasswordVisibility} variant={"ghost"}>
                                        {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormLabel>Telefon Numarasi</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='+90' />
                                <Input type='tel' placeholder='telefon numarasi' />
                            </InputGroup>
                            <FormHelperText>Hesabiniz mi var? O halde <NavLink to={'/login'} className={'text-orange-600'}>Buraya Tiklayin.</NavLink> </FormHelperText>
                            <CardFooter >
                                <RegisterButton type='submit' ></RegisterButton>
                            </CardFooter>
                        </FormControl>
                        </div>
                    </form>
           </Card>
         </div>
         <Footer/>
        </>
    )
}