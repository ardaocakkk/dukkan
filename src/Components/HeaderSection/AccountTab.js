import React from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button, Text, Divider,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon , ChevronDownIcon} from '@chakra-ui/icons'
import {NavLink} from "react-router-dom";


function AccountTab() {
    return (

        <Popover>
            <PopoverTrigger>
                <Button variant='ghost'>Hesabim <ChevronDownIcon/> </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <NavLink to={'/login'}><Text>Giriş Yap</Text></NavLink>
                </PopoverBody>
                <PopoverBody>
                    <NavLink to={'/register'}><Text>Kayıt ol</Text></NavLink>
                </PopoverBody>
                <Divider/>
                <PopoverBody>
                    <Link>Siparislerim</Link>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    )
}

export default AccountTab;