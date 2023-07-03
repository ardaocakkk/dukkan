import {Card, CardHeader, CardBody, CardFooter, Heading, Text, SimpleGrid, Button, Image} from '@chakra-ui/react'

function FooterCard() {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={'ml-10'}>
            <Card>
                <CardHeader>
                    <Heading size='md'> Yarın Kapında</Heading>
                </CardHeader>
                <CardBody>
                    <Image boxSize={'200px'} src={'https://images.hepsiburada.net/assets/sfstatic/Content/images/mobil-yarin-kapinda.svg'}/>
                </CardBody>
                <CardFooter>
                    <Text>Yarın Kapında ile ihtiyaçlarına ertesi gün sahip ol</Text>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Tek Tıkla Güvenli Alışveriş</Heading>
                </CardHeader>
                <CardBody>
                    <Image boxSize={'150px'} src={'https://images.hepsiburada.net/assets/sfstatic/Content/images/mobil-tek-tikla-alisveris.svg'}/>
                </CardBody>
                <CardFooter>
                    <Text>Odeme ve Adres bilgilerinizi kaydedin. Güvenli alışveriş yapın.</Text>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Mobil Cebinizde</Heading>
                </CardHeader>
                <CardBody>
                    <Image boxSize={'175px'} src={'https://images.hepsiburada.net/assets/sfstatic/Content/images/mobil-cebinizde.svg'}/>
                </CardBody>
                <CardFooter>
                    <Text>Dilediğiniz her yerden güveli alışveriş keyfini çıkarın.</Text>

                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Kapında İzle</Heading>
                </CardHeader>
                <CardBody>
                    <Image boxSize={'150px'} size={'sm'} src={'https://images.hepsiburada.net/banners/0/imageUrl2107_20230116110649.png'}/>
                </CardBody>
                <CardFooter>
                    <Text>Aldığınız ürünü iade etmek hiç bu kadar kolay olmamıştı</Text>
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}

export default FooterCard;