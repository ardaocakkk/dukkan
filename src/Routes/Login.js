import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    FormControl,
    FormLabel,
    Input,
    Divider,
    FormHelperText, InputGroup, InputRightElement,
} from "@chakra-ui/react";
import DoneIcon from '@mui/icons-material/Done';
import {Link as RouteLink,} from "react-router-dom";
import Header from "../Components/HeaderSection/Header";
import Footer from "../Components/FooterSection/Footer";
import {useState} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from "formik";




export default function Login() {
    const [showPassword, setShowPassword] = useState(true);
    const handlePasswordVisibility = () => setShowPassword(!showPassword)

    const formik = useFormik({
        initialValues: {
            email: "",
            password:""
        },
        onSubmit: (values) => {
            //fetch from database and make user login.
        }
    })

    return (
        <>
            <Header/>
            <div className={'flex h-full m-auto justify-center items-center'}>
        <Card className={'mt-12 mb-32'}>
            <CardHeader>
                <RouteLink to={'/login'}><Button className={'ml-3 items-center justify-center m-auto'} colorScheme={'orange'} variant={'outline'}>Giriş Yap</Button> </RouteLink>
                <RouteLink to={'/register'}><Button className={'ml-6 items-center justify-center m-auto'} colorScheme={'orange'} variant={'outline'}>Uye Ol</Button></RouteLink>
            </CardHeader>
            <Divider/>
                <form onSubmit={formik.handleSubmit}>
            <CardBody>

                <FormControl isRequired>
                    {/*E-posta kismi E-mail Section*/}
                    <FormLabel>E-posta</FormLabel>
                    <Input type={'email'} placeholder={'E-posta Adresini giriniz'} onChange={formik.handleChange} value={formik.values.email} id='email' />
                    <FormHelperText>E-posta adresinizi kimseyle paylaşmacağız.</FormHelperText>
                    {/*Sifre Kismi Password Section*/}
                    <FormLabel>Sifre</FormLabel>
                    <InputGroup>
                        <Input
                          type={showPassword ? 'password' : 'text'}
                          placeholder={"******"}
                          size={"lg"}
                          name="password"
                          id="password"
                          value = {formik.values.password}
                          onChange={event => setShowPassword(event.currentTarget.value)}
                          onChange={formik.handleChange}
                        />
                        <InputRightElement>
                            <Button onClick={handlePasswordVisibility} variant={'ghost'}>
                                {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormHelperText>Sifrenizi mi unuttunuz? <RouteLink to={'/forgotpassword'} className={'text-orange-600'}>Buraya Tiklayin</RouteLink> </FormHelperText>
                </FormControl>
            </CardBody>
            <CardFooter>
                <Button type="submit" className={'w-full'} colorScheme={'orange'} variant={'outline'}>Giris Yap <DoneIcon className={'ml-2'} /> </Button>

            </CardFooter>
                </form>

        </Card>
        </div>
                <Footer/>
        </>
    )
}

