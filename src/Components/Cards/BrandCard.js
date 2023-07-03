import React from "react";
import {Card, CardBody, CardFooter, Heading,Image, LinkBox, LinkOverlay} from '@chakra-ui/react'

function BrandCard(props) {
    return (
        <div className={"grid grid-cols-10 mt-3"}>
            <Card>
                <LinkBox>
                <LinkOverlay href={props.link}>
                <CardBody>
                    <Image src={props.src}></Image>
                    <Heading>{props.title}</Heading>
                </CardBody>
                </LinkOverlay>
                </LinkBox>
            </Card>

        </div>
    )
}

export default BrandCard;