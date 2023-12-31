import React, {useState} from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton, useDisclosure, Button, Link,Text
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import KayitOlButton from "./RegisterButtonVisible";
import RegisterButtonOffVisible from "./RegisterButtonOffVisible";

export default function RegisterButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const [showChecked, setChecked] = useState(false)
    const handleShowChecked = () => {
        setChecked(!showChecked)
    }

    const [disabled, setDisabled] = useState(true);

    const handleDisabled = () => {
        if(disabled) {
            setDisabled(!disabled)
        }
    }

    return (
        <>
        <Link onClick={onOpen} style={{textDecoration: "none"}}><Text className={'text-orange-600'}>KVKK Sozlesmesini okumak icin buraya tiklayiniz.</Text></Link>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Kisisel Verilerin Korunumu Kanunu
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            KVKK ile ilgili havali sozlesme.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Iptal
                            </Button>
                            <Button colorScheme='green' onClick={() => {onClose(); handleDisabled();}}  ml={3}>
                                Kabul Ediyorum.
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            <CheckboxGroup name={''}>
                <Checkbox value={"tick"} isDisabled={disabled} colorScheme={'orange'} onChange={handleShowChecked}>
                    Okudum anladim kabul ediyorum.

                </Checkbox>
            </CheckboxGroup>
            {showChecked ? <KayitOlButton/> : <RegisterButtonOffVisible/>}
        </>
    )
}